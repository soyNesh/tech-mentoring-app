import { View, Text } from "react-native";
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import styled from "styled-components/native";

import useFetch from "app/hooks/useFetch";
import { ENDPOINTS } from 'app/utils/constants';
import { Card, ICardProps } from 'app/components';

export function HomeScreen() {

  const { data } = useFetch(ENDPOINTS.character);

  const xx:ICardProps = {
    id: 1,
    name: 'Test',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  return (
    <View
      style={{ flex: 1, width: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
    >
      <Card { ...xx }/>
      <Card { ...xx }/>
      <Text style={{ fontWeight: '800' }}>Welcome to Solito.</Text>
      <H1>This is a title</H1>
      <View style={{ maxWidth: 600 }}>
        <Text style={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
      </View>
      <View style={{ height: 32 }} />
      <View>
        <TextLink
          href="/user/fernando"
        >
          Regular Link
        </TextLink>
        <View style={{ width: 32 }} />
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </View>
    </View>
  )
}

const H1 = styled.Text`
  color: blue;
  font-size: 20px;
`;
