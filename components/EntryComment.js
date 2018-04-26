import 'semantic-ui-css/components/comment.css'

import { Comment } from 'semantic-ui-react'
import Link from 'next/link'

export default (props) => (
  <Comment>
    <Comment.Content>
      <Link as={`/u/${props.data.author.username}`} href={{ pathname: '/user', query: { name: props.data.author.username } }}>
        <Comment.Author as='a'>{props.data.author.username}</Comment.Author>
      </Link>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>{props.data.body}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
)
