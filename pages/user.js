import AppLayout from '../components/AppLayout'
import UserCardContainer from '../components/UserCardContainer'
import withData from '../lib/withData'

import 'semantic-ui-css/components/container.css'
import { Container } from 'semantic-ui-react'

export default withData((props) => (
  <AppLayout>
    <Container style={{ marginTop: '6em' }}>
      <UserCardContainer name={props.url.query.name} />
    </Container>
  </AppLayout>
))
