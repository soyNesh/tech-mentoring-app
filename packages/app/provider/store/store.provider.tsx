import React, {
  createContext,
  useMemo,
  useContext,
  useState,
  useCallback,
} from 'react'

const initialValue = {
  isMenuOpen: false,
  currentView: 'characters',
  toggleMenu: () => {},
  updateCurrentView: (view) => {},
  items: [],
  updateItems: (items) => {},
}

const StoreContext = createContext(initialValue)

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('There is no context')
  }

  return context
}

const StoreProvider = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(initialValue.isMenuOpen)
  const [currentView, setCurrentView] = useState(initialValue.currentView)
  const [items, setItems] = useState(initialValue.items)

  const toggleMenu = useCallback(() => {
    return setIsMenuOpen((prev) => !prev)
  }, [])

  const updateCurrentView = useCallback((view) => {
    return setCurrentView(view)
  }, [])

  const updateItems = useCallback((items) => {
    return setItems(items)
  }, [])

  const value = useMemo(() => {
    return {
      isMenuOpen,
      toggleMenu,
      currentView,
      updateCurrentView,
      items,
      updateItems,
    }
  }, [isMenuOpen, currentView, items])

  return <StoreContext.Provider value={value} {...props} />
}

export default StoreProvider
