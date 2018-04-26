import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Subreddit from './Subreddit'

function SubredditContainer({ data: { loading, error, refetch, reddit } }) {
  if (error) return <div>'Error loading links...try refetching'</div>
  if (reddit) return <Subreddit data={reddit.subreddit} onRefresh={refetch}/>
  return <div>Loading...</div>
}

const NewListingQuery = gql`
  query NewListingQuery($name: String!, $limit: Int!) {
    reddit {
      subreddit(name: $name) {
        name
        title
        publicDescription
        newListings(limit: $limit) {
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
        hotListings(limit: $limit) {
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
        topListings(limit: $limit) {
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

const addOptions = (props) => ({
  variables: {
    name: props.name,
    limit: 10
  }
})

export default compose(
  graphql(NewListingQuery, {
    options: addOptions,
    skip: (props) => props.sortBy != 'new'
  }),
  graphql(HotListingQuery, {
    options: addOptions,
    skip: props => props.sortBy != 'hot'
  }),
  graphql(TopListingQuery, {
    options: addOptions,
    skip: props => props.sortBy != 'top'
  }),
)(SubredditContainer)
