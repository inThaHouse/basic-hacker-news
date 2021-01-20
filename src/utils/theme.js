import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    hackerNewsOrange: '#ff6600',
    hackerNewsGray: '#f6f6ef',
  },
}

export const theme = extendTheme(customTheme)
