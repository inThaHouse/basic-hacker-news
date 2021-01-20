import { useEffect, useState } from 'react'
import { ListItem } from '@chakra-ui/react'
import ContentContainer from '../components/ContentContainer'

const CommentsScreen = ({ location }) => {
  const [comments, setComments] = useState([])
  const [storyHeader, setStoryHeader] = useState('')

  useEffect(() => {
    if (location && location.state) {
      const { state } = location

      setComments(state.comments)
      setStoryHeader(state.title)
    } else {
      setStoryHeader('No story/comment here')
    }
  }, [location])

  return (
    <ContentContainer header={storyHeader}>
      {comments.map((comment, index) => (
        <ListItem key={index}>{comment.text}</ListItem>
      ))}
    </ContentContainer>
  )
}

export default CommentsScreen
