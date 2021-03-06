import { useEffect, useReducer, useRef } from 'react'

interface State<T> {
  data?: T
  error?: Error
  loading?: Boolean
}

// discriminated union type
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }

function useFetch<T = unknown>(
  url?: string,
  options: RequestInit = {}
): State<T> {
  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false)

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false,
  }

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, loading: true }
      case 'fetched':
        return { ...initialState, data: action.payload, loading: false }
      case 'error':
        return { ...initialState, error: action.payload, loading: false }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return

    const fetchData = async () => {
      dispatch({ type: 'loading' })

      try {
        const response = await fetch(url, options)

        if (!response.ok) {
          let errorMsg = new Error(response.statusText)
          dispatch({ type: 'error', payload: errorMsg })
          throw errorMsg
        }

        const data = (await response.json()) as T

        dispatch({ type: 'fetched', payload: data })
      } catch (error) {
        dispatch({ type: 'error', payload: error })
      }
    }

    void fetchData()

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state
}

export default useFetch
