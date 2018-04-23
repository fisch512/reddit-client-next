import AppLayout from '../components/AppLayout'
import PostList from '../components/PostList'
import withData from '../lib/withData'

export default withData(() => (
  <AppLayout>
    <PostList />
  </AppLayout>
))
