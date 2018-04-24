import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import Foobar from './Foobar'
import Subreddit from './Subreddit'

function SubredditContainer({ data: { loading, error, refetch, reddit } }) {
  if (error) return <ErrorMessage message='Error loading links...' />
  if (reddit) {
    return (
      <div>
        <Subreddit data={reddit.subreddit} onRefresh={refetch}/>
      </div>
    )
  }
  return <div>Loading...</div>
}

const NewListingQuery = gql`
  query NewListingQuery($name: String!) {
    reddit {
      subreddit(name: $name) {
        name
        title
        publicDescription
        newListings(limit: 10) {
          fullnameId
          title
          url
          numComments
          comments {
            body
            author {
              username
            }
          }
          author {
            username
          }
        }
      }
    }
  }
`

const HotListingQuery = gql`
  query HotListingQuery($name: String!) {
    reddit {
      subreddit(name: $name) {
        hotListings(limit: 10) {
          fullnameId
          title
          url
          numComments
          comments {
            body
            author {
              username
            }
          }
          author {
            username
          }
        }
      }
    }
  }
`

const TopListingQuery = gql`
  query TopListingQuery($name: String!) {
    reddit {
      subreddit(name: $name) {
        topListings(limit: 10) {
          fullnameId
          title
          url
          numComments
          comments {
            body
            author {
              username
            }
          }
          author {
            username
          }
        }
      }
    }
  }
`

export default compose(
  graphql(NewListingQuery, {
    options: (props) => ({
      variables: {
        name: props.name
      }
    }),
    skip: (props) => props.sortBy != 'new'
  }),
  graphql(HotListingQuery, {
    options: (props) => ({
      variables: {
        name: props.name
      }
    }),
    skip: props => props.sortBy != 'hot'
  }),
  graphql(TopListingQuery, {
    options: (props) => ({
      variables: {
        name: props.name
      }
    }),
    skip: props => props.sortBy != 'top'
  }),
)(SubredditContainer)
