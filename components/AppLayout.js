import 'semantic-ui-css/themes/default/assets/fonts/icons.eot'
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff'
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff2'

import TopMenu from './TopMenu'
import Head from 'next/head'

export default (props) => (
  <div>
    <Head>
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <TopMenu />
    {props.children}
  </div>
)
