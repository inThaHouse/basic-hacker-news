import { Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <Flex
    as='nav'
    padding='1.2rem'
    bg='hackerNewsOrange'
    justifyContent={['center', 'center', 'flex-start']}
  >
    <Link to={'/'}>
      <Heading fontSize='1.5rem' color='white'>
        Hacker News Clone
      </Heading>
    </Link>
  </Flex>
)

export default Nav
