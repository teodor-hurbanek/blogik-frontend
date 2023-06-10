import * as React from 'react'
// components
import Link from 'next/link'
import { Box, Container, Flex, Group, Stack, Title } from '@mantine/core'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// hooks
import { useRouter } from 'next/router'
import { useMantineTheme } from '@mantine/core'
import TheMenu from './NavbarMenu'

export default function TheNavbar() {
  const theme = useMantineTheme()
  const router = useRouter()

  return (
    <Stack
      spacing={0}
      style={{ position: 'fixed', width: '100%', zIndex: 1 }}
      sx={theme => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0] })}
    >
      <Box
        sx={theme => ({
          padding: '.5rem 1rem',
          borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
        })}
      >
        <Container>
          <Flex align="center" justify="space-between">
            <Group spacing="sm">
              <Link style={{ display: 'flex' }} target="_blank" href="https://www.facebook.com/teodor.hurbanek/">
                <FacebookRoundedIcon />
              </Link>
              <Link style={{ display: 'flex' }} target="_blank" href="https://www.instagram.com/teodorhurbanek/">
                <InstagramIcon />
              </Link>
              <Link
                style={{ display: 'flex' }}
                target="_blank"
                href="https://www.linkedin.com/in/teodor-hurb%C3%A1nek-61a2b322a/"
              >
                <LinkedInIcon />
              </Link>
            </Group>

            <TheMenu />
          </Flex>
        </Container>
      </Box>

      <Box
        sx={theme => ({
          padding: '1rem',
          textAlign: 'center',
          borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
        })}
      >
        <Title order={2}>
          REACT
          <span style={{ fontFamily: 'cursive', letterSpacing: '.1rem' }}>Blogik</span>
        </Title>
      </Box>

      <Flex justify="center">
        <Group spacing="xl" sx={{ padding: '.5rem 1rem' }}>
          <Link
            style={router.pathname === '/' || router.pathname === '/post/[slug]' ? { fontWeight: 'bold' } : {}}
            href="/"
          >
            Home
          </Link>
          <Link style={router.pathname === '/about' ? { fontWeight: 'bold' } : {}} href="/about">
            About
          </Link>
          <Link style={router.pathname === '/contact' ? { fontWeight: 'bold' } : {}} href="/contact">
            Contact
          </Link>
        </Group>
      </Flex>
    </Stack>
  )
}
