import React from 'react'
// components
import { Pagination } from '@mantine/core'
type PaginationProps = {
  style: {}
  count: number
}

export default function PaginationEl({ style, count }: PaginationProps) {
  return <Pagination sx={style} total={count} />
}
