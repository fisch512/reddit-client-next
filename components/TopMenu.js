import 'semantic-ui-css/components/menu.css'
import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/dropdown.css'
import 'semantic-ui-css/components/image.css'

import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'
import { withRouter } from 'next/router'
import Link from 'next/link'

const TopMenu = ({ router: { pathname } }) => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        <Image
          size='tiny'
          src='/static/logo.png'
          style={{ marginRight: '1.5em'}}
        />
      </Menu.Item>
      <Link prefetch href="/">
        <Menu.Item as="a" active={pathname === '/'}>Home</Menu.Item>
      </Link>
      <Link prefetch href="/about">
        <Menu.Item as="a" active={pathname === '/about'}>About</Menu.Item>
      </Link>
    </Container>
  </Menu>
)

export default withRouter(TopMenu)
