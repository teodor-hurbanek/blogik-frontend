import { Inter } from '@next/font/google'
// hooks
import useAxiosGet from '@/hooks/useAxiosGet'
import { useRouter } from 'next/router'
// components
import Layout from '@/components/Layout'
import PostCard from '@/components/post/PostCard'
import Error from '@/components/ui/Error'
import { Grid } from '@mantine/core'
import PaginationEl from '@/components/ui/PaginationEl'
import PostCardSkeleton from '@/components/post/PostCardSkeleton'
// types
import { Post } from '@/types/post'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
})

export default function Home() {
  const { data, error, isLoading } = useAxiosGet<Post>('http://localhost:1337/api/blogs')
  const router = useRouter()
  const { page, pageCount, pageSize, total } = data?.meta.pagination || {} // handle undefined data

  if (error) {
    return (
      <Layout>
        <Error error={error} />
      </Layout>
    )
  }

  if (isLoading) {
    return (
      <Grid>
        {data?.data.map(post => (
          <Grid.Col key={post.id} span={12} xs={6} md={4}>
            <PostCardSkeleton />
          </Grid.Col>
        ))}
      </Grid>
    )
  }

  return (
    <Layout>
      <Grid>
        {/* style={{ gridAutoRows: '1fr' }} */}
        {data?.data.map(post => (
          <Grid.Col key={post.id} span={12} xs={6} md={4}>
            <PostCard post={post} isLoading={isLoading} />
          </Grid.Col>
        ))}
      </Grid>

      {pageCount && pageCount > 1 && (
        <PaginationEl
          style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'fixed', bottom: '1rem' }}
          count={pageCount}
        />
      )}
    </Layout>
  )
}
