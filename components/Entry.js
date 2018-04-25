import 'semantic-ui-css/components/item.css'
import 'semantic-ui-css/components/icon.css'
import 'semantic-ui-css/components/accordion.css'
import 'semantic-ui-css/components/comment.css'

import { Accordion, Comment, Icon, Item } from 'semantic-ui-react'
import EntryComment from './EntryComment.js'
import React from 'react'

export default class Entry extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {commentsOpen: false}
  }

  handleClick = (e, someProps) => {
    const { commentsOpen } = this.state
    this.setState({ commentsOpen: !commentsOpen })
  }

  render() {
    const { commentsOpen } = this.state

    return (
      <Item>
        <Item.Image size='tiny' src='/static/empty.png' />
        <Item.Content>
          <Item.Header>{this.props.data.title}</Item.Header>
          <Item.Meta>
            <span>submitted by {this.props.data.author.username}</span>
          </Item.Meta>
          <Item.Extra>
            <Accordion>
              <Accordion.Title active={commentsOpen} onClick={this.handleClick}>
                <Icon name='dropdown' />
                {this.props.data.comments.length} comments
              </Accordion.Title>
              <Accordion.Content active={commentsOpen}>
                <Comment.Group>
                  {this.props.data.comments.map((comment, index) => (
                    <EntryComment data={comment} key={index} />
                  ))}
                </Comment.Group>
              </Accordion.Content>
            </Accordion>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}
