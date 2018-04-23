import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'

function PostList({ data: { reddit, refetch } }) {
  const allPosts = reddit.subreddit.newListings
  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <h1>/r/Cats</h1>
      <ul>{allPosts && allPosts.map(post => <li>{post.title}</li>)}</ul>
    </div>
  )
}

export default graphql(gql`
  query PostListQuery {
    reddit {
      subreddit(name: "cats") {
        newListings(limit: 10) {
          title
        }
      }
    }
  }
`)(PostList)
