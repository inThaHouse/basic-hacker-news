import { useEffect, useState } from 'react'
import { formatIdsToDataList, reduceList } from '../utils/generalUtils'
import { fetchStories, fetchResource } from '../utils/hackerNewsApi'
import { STORIES_ROUTE } from '../utils/constants'
import { ListItem, Spinner, Text, Flex } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import ContentContainer from '../components/ContentContainer'

const HomeScreen = () => {
  const history = useHistory()
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getStories = async () => {
    const topStories = await fetchStories(STORIES_ROUTE, fetchResource)

    setStories(topStories)
    setIsLoading(false)
  }

  const getComments = async (commentIds = [], id, title) => {
    setIsLoading(true)

    const comments = await formatIdsToDataList(
      reduceList(commentIds),
      fetchResource
    )

    comments.length
      ? history.push({ pathname: `/post/${id}`, state: { comments, title } })
      : setIsLoading(false)
  }

  useEffect(() => getStories(), [])

  return isLoading ? (
    <Spinner />
  ) : (
    <ContentContainer header='Top Stories'>
      {stories.map(({ kids = [], title, id }) => (
        <ListItem onClick={() => getComments(kids, id, title)} key={id}>
          <Flex flexDirection={['column', 'column', 'column', 'row']}>
            <Text pr='1'>{title}</Text>
            <Text
              fontWeight='400'
              cursor='pointer'
              color='gray.400'
            >{`${kids.length} comment(s) ->`}</Text>
          </Flex>
        </ListItem>
      ))}
    </ContentContainer>
  )
}

export default HomeScreen
