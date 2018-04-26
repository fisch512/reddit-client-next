import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/icon.css'
import 'semantic-ui-css/components/header.css'
import 'semantic-ui-css/components/item.css'

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
    <Button icon='refresh' size='tiny' onClick={() => props.onRefresh()} />
    <Item.Group relaxed>
      {props.data.newListings.map((entry) => (
        <Entry data={entry} key={entry.fullnameId} />
      ))}
    </Item.Group>
  </div>
)
