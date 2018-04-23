import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/header.css'

import { Container, Header } from 'semantic-ui-react'
import AppLayout from '../components/AppLayout'

export default () => (
  <AppLayout>
    <Container text style={{ marginTop: '6em' }}>
      <Header as='h1' textAlign='center'>Simple Reddit Client</Header>
      <p>
        A simple reddit client using <a href='https://github.com/zeit/next.js'>Next.js</a>
        {' '}and <a href='https://github.com/apollographql/apollo-client'>Apollo</a>
        {' '}for GraphQL API calls and local state storage.
      </p>
    </Container>
  </AppLayout>
)
