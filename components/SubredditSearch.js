import 'semantic-ui-css/components/input.css'
import 'semantic-ui-css/components/grid.css'
import 'semantic-ui-css/components/icon.css'

import { Icon, Input, Grid } from 'semantic-ui-react'

import React from 'react'
import Router from 'next/router'
import EntryComment from './EntryComment.js'

export default class SubredditSearch extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {input: ''}
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleClick = (e) => {
    Router.push('/sub?name=' + this.state.input, '/r/' + this.state.input)
  }

  render() {
    return (
      <div>
        <Grid centered>
          <Input
            placeholder='Search topic...try coding'
            onChange={this.handleChange}
            action={{ icon: 'search', onClick: this.handleClick}}
          />
        </Grid>
      </div>
    )
  }
}
