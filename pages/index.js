import 'semantic-ui-css/components/container.css'

import { Container } from 'semantic-ui-react'
import AppLayout from '../components/AppLayout'
import SubredditSearch from '../components/SubredditSearch'
import withData from '../lib/withData'
import Head from 'next/head'


export default withData(() => (
  <AppLayout>
    <Head>
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <Container style={{ marginTop: '8em' }}>
      <SubredditSearch />
    </Container>
  </AppLayout>
))
