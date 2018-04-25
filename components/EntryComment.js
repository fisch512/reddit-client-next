import 'semantic-ui-css/components/comment.css'

import { Comment } from 'semantic-ui-react'

export default (props) => (
  <Comment>
    <Comment.Content>
      <Comment.Author as='a'>{props.data.author.username}</Comment.Author>
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
