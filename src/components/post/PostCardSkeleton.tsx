import { Card, Flex, Space, Skeleton } from '@mantine/core'
import React from 'react'

export default function PostCardSkeleton() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Skeleton height={200} />
      </Card.Section>

      <Space h="md" />

      <Flex gap=".5rem" align="center">
        <Skeleton height={30} circle />
        <Skeleton height={8} width="90%" radius="xl" />
      </Flex>

      <Space h="md" />

      <Skeleton height={20} width="70%" radius="xl" mb=".5rem" />

      <Skeleton height={8} radius="xl" mb=".5rem" />
      <Skeleton height={8} radius="xl" mb=".5rem" />
      <Skeleton height={8} radius="xl" mb=".5rem" />
      <Skeleton height={8} radius="xl" />

      <Space h="md" />

      <Flex justify="space-between" align="center">
        <Skeleton height={8} width="90%" radius="xl" />
        <Skeleton height={20} circle />
      </Flex>
    </Card>
  )
}
