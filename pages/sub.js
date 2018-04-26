import 'semantic-ui-css/components/container.css'

import { Container } from 'semantic-ui-react'
import AppLayout from '../components/AppLayout'
import SubredditContainer from '../components/SubredditContainer'
import withData from '../lib/withData'

export default withData((props) => (
  <AppLayout>
    <Container style={{ marginTop: '6em' }}>
      <SubredditContainer name={props.url.query.name} sortBy='new'/>
    </Container>
  </AppLayout>
))
