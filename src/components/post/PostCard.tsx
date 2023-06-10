import * as React from 'react'
import moment from 'moment'
// componets
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Flex,
  Avatar,
  ActionIcon,
  Title,
  Space,
  Stack,
  Skeleton,
} from '@mantine/core'
import PostCardMenu from './PostCardMenu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PostCardSkeleton from './PostCardSkeleton'
// hooks
import { useMantineTheme } from '@mantine/core'
import { useRouter } from 'next/router'
// types
import { PostData } from '@/types/post'

type PostProps = {
  post: PostData
  isLoading: boolean
}

export default function RecipeReviewCard({ post, isLoading }: PostProps) {
  const { title, content, createdAt } = post.attributes
  const router = useRouter()
  const theme = useMantineTheme()

  const dateFormatter = (postDate: Date) => moment(postDate).format('MMMM DD, YYYY')
  const contentFormatter = (postContent: string, size: number) =>
    postContent.length > size ? postContent.slice(0, size - 1) + '…' : postContent

  const handleCardClick = (event: any, id: number) => {
    event.stopPropagation()
    event.preventDefault()
    router.push(`/post/${id}`)
  }

  // if (isLoading) {
  //   return <PostCardSkeleton />
  // }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          onClick={event => handleCardClick(event, post.id)}
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Space h="md" />

      <Flex justify="space-between" align="center">
        <Group>
          {true ? (
            <Avatar
              radius="xl"
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            />
          ) : (
            <Avatar color="cyan" radius="xl">
              MK
            </Avatar>
          )}
          <Stack sx={{ gap: 'unset' }}>
            <Text size="md">Name</Text>
            <Text size="xs">{dateFormatter(createdAt)}</Text>
          </Stack>
        </Group>

        <PostCardMenu />
      </Flex>

      <Space h="md" />

      <Title order={4}>{title}</Title>

      <Text size="sm" color="dimmed">
        {contentFormatter(content, 150)}
      </Text>

      <Space h="md" />

      <Flex justify="space-between" align="center">
        <Text size="sm">6 comments</Text>
        <ActionIcon>{true ? <FavoriteBorderIcon /> : <FavoriteIcon color="error" />}</ActionIcon>
      </Flex>
    </Card>
  )
}
