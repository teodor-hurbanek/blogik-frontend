import { Center, Text } from '@mantine/core'
import React from 'react'

type ErrorProps = {
  error: any
}

export default function Error({ error }: ErrorProps) {
  return (
    <Center h={'63vh'}>
      <Text weight="bold" mr=".3rem">
        Error:
      </Text>
      {error.message}
    </Center>
  )
}
