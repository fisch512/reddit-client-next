import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import UserCard from './UserCard'

function UserCardContainer({ data: { loading, error, refetch, reddit } }) {
  if (error) return <div>'Error loading links...try refetching'</div>
  if (reddit) return <UserCard data={reddit.user} onRefresh={refetch}/>
  return <div>Loading...</div>
}

const UserQuery = gql`
  query User($name: String!) {
    reddit {
      user(username: $name) {
        username
        commentKarma
        createdISO
      }
    }
  }
`

export default graphql(UserQuery, {
  options: (props) => ({
    variables: {
      name: props.name
    }
  })
})(UserCardContainer)
