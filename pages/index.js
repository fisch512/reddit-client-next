import 'semantic-ui-css/components/container.css'

import { Container } from 'semantic-ui-react'
import AppLayout from '../components/AppLayout'
import SubredditSearch from '../components/SubredditSearch'
import withData from '../lib/withData'

export default withData(() => (
  <AppLayout>
    <Container style={{ marginTop: '8em' }}>
      <SubredditSearch />
    </Container>
  </AppLayout>
))
