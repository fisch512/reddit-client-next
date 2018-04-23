import App from '../components/App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import withData from '../lib/withData'
import PostList from '../components/PostList'

export default withData(() => (
  <App>
    <Header />
    <PostList />
    <Footer />
  </App>
))
