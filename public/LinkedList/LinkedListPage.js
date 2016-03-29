import React, { Component } from 'react'

import LinkedList from '../LinkedList/LinkedList'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'

export default class LinkedListPage extends Component {
  render() {
    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <LinkedList />
          </div>
          <div className="col-md-6">
            <Code />
            <Discussion />
          </div>
        </div>
      </div>
    )
  }
}
