import PostCard from '@/components/PostCard'
import { Inter } from '@next/font/google'
import Grid from '@mui/material/Grid'
import Layout from '@/components/Layout'
import axios from 'axios'
import { useEffect, useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
})

export default function Home() {
  const [posts, setPosts] = useState([])

  const getAllPosts = async () => {
    try {
      const { data: response } = await axios.get('http://localhost:1337/api/blogs')
      const posts = response.data
      console.log(posts)

      setPosts(posts)
    } catch (error) {
      console.log(error)
    }
  }

  //key={post.id}

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <Layout>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={3}
        columnSpacing={{ xs: 0, sm: 3 }}
      >
        {posts.map(post => (
          <Grid item xs={12} sm={6} lg={4}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
