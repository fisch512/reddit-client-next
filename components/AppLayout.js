import TopMenu from './TopMenu'
import Footer from './Footer'
import Head from 'next/head'

export default (props) => (
  <div>
    <Head>
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <TopMenu />
    {props.children}
    <Footer />
  </div>
)
