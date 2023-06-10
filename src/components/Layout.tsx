import * as React from 'react'
// components
import TheNavbar from './navbar/Navbar'
import { AppShell, Container, Header } from '@mantine/core'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main style={{ minHeight: '100vh', paddingTop: '15rem', paddingBottom: '3rem' }}>
        <Container>{children}</Container>
      </main>
    </>
  )
}
