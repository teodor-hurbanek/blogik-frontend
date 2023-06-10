import moment from 'moment'
// components
import Layout from '@/components/Layout'
import Error from '@/components/ui/Error'
import PostCardMenu from '@/components/post/PostCardMenu'
import { Flex, Group, Avatar, Stack, Text, ActionIcon, Space, Title } from '@mantine/core'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
// hooks
import useAxiosGetSingle from '@/hooks/useAxiosGetSingle'
import { useRouter } from 'next/router'
import { Post, PostAttributes, PostData } from '@/types/post'
import { useEffect, useState } from 'react'

export default function PostDetail() {
  const router = useRouter()
  // const [postId, setPostId] = useState(0)
  const postId = Number(router.query.slug)
  const { data, error, isLoading } = useAxiosGetSingle<Post>('http://localhost:1337/api/blogs/', 1)

  const dateFormatter = (postDate: Date) => moment(postDate).format('MMMM DD, YYYY')
  const contentFormatter = (postContent: string, size: number) =>
    postContent.length > size ? postContent.slice(0, size - 1) + '…' : postContent

  // useEffect(() => {
  //   const id = Number(router.query.slug)
  //   setPostId(id)
  // }, [])

  if (!data && !error) {
    return <Layout>loading...</Layout>
  }

  if (error) {
    return (
      <Layout>
        <Error error={error} />
      </Layout>
    )
  }
  console.log(postId)

  console.log(data?.data)

  return (
    <Layout>
      <Flex justify="space-between" align="center">
        <Group>
          {true ? (
            <Avatar
              size={'lg'}
              radius="xl"
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            />
          ) : (
            <Avatar color="cyan" radius="xl">
              MK
            </Avatar>
          )}
          <Stack sx={{ gap: 'unset' }}>
            <Text size="xl">Name</Text>
            <Text size="md">{'date'}</Text>
          </Stack>
        </Group>

        <ActionIcon>{false ? <FavoriteBorderIcon /> : <FavoriteIcon color="success" />}</ActionIcon>
      </Flex>

      <Space h={'xl'} />
      <Space h={'xl'} />

      <Title order={5}>Title</Title>
      <Text size="md">title</Text>
    </Layout>
  )
}
