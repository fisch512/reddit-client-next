import App from '../components/App'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <App>
    <Header />
    <article>
      <h1>Simple Reddit Client</h1>
      <p>
        A simple reddit client using <a href='https://github.com/zeit/next.js'>Next.js</a>
        {' '}and <a href='https://github.com/apollographql/apollo-client'>Apollo</a>
        {' '}for GraphQL API calls and local state storage.
      </p>
    </article>
    <Footer />
  </App>
)
