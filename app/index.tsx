import { useState } from 'react'
import { Text, YStack, Button, styled } from 'tamagui'

const DisplayText = styled(Text, {
  animation: 'quick',
  variants: {
    active: {
      false: {
        fontSize: '$6',
        color: '$color10',
        fontWeight: 'normal',
      },
      true: {
        fontSize: '$8',
        color: '$color',
        fontWeight: 'bold',
      },
    },
  },
})

export default function Home() {
  const [value, setValue] = useState(false)
  return (
    <YStack>
      <DisplayText active={!value}>3503</DisplayText>
      <DisplayText active={value}>3503</DisplayText>
      <Button onPress={() => setValue(!value)}>Click me</Button>
    </YStack>
  )
}
