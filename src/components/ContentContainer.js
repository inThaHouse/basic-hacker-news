import { Container, OrderedList, Heading } from '@chakra-ui/react'

const ContentContainer = ({ header, children }) => {
  return (
    <Container
      my={[5]}
      maxW={['95%', '85%', '80%']}
      bg='hackerNewsGray'
      p={[2, 5]}
    >
      <Heading mb='4'>{header}</Heading>
      <OrderedList spacing={3} fontWeight='semibold'>
        {children}
      </OrderedList>
    </Container>
  )
}

export default ContentContainer
