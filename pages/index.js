import AppLayout from '../components/AppLayout'
import SubredditContainer from '../components/SubredditContainer'
import withData from '../lib/withData'

import 'semantic-ui-css/components/container.css'
import { Container } from 'semantic-ui-react'

export default withData(() => (
  <AppLayout>
    <Container style={{ marginTop: '6em' }}>
      <SubredditContainer name='cats' sortBy='new'/>
    </Container>
  </AppLayout>
))
