import 'semantic-ui-css/components/icon.css'
import 'semantic-ui-css/components/image.css'
import 'semantic-ui-css/components/card.css'
import 'semantic-ui-css/themes/default/assets/fonts/icons.eot'
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff'
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff2'

import { Icon, Card, Image } from 'semantic-ui-react'

export default (props) => (
  <Card>
    <Image src='/static/empty.png' />
    <Card.Content>
      <Card.Header>
        {props.data.username}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
           Joined {props.data.createdISO}
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='trophy' />
        {props.data.commentKarma} Karma
      </a>
    </Card.Content>
  </Card>
)
