import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/icon.css'
import 'semantic-ui-css/components/header.css'
import 'semantic-ui-css/components/item.css'
import 'semantic-ui-css/themes/default/assets/fonts/icons.eot'
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff'
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff2'

import { Button, Icon, Item, Header } from 'semantic-ui-react'
import Entry from './Entry.js'

export default (props) => (
  <div>
    <Header
      as='h2'
      textAlign='center'
      content={props.data.title}
      subheader={props.data.publicDescription}
    />
    <Button icon size='tiny' onClick={() => props.onRefresh()}>
      <Icon name='refresh' />
    </Button>
    <Item.Group relaxed>
      {props.data.newListings.map((entry) => (
        <Entry data={entry} key={entry.fullnameId} />
      ))}
    </Item.Group>
  </div>
)
