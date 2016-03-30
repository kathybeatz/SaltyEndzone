import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

export default class HomePage extends Component {
 
  render() {
    return (
      <div>
        <div className="data-buttons-section">
          <div className="button-wrapper">
            <img className="data-structure-buttons" src ={require('./img/stack.png')} />
            <p className="text">STACK</p>
          </div>
          <div className="button-wrapper">
            <img className="data-structure-buttons" src ={require('./img/queue.png')} />
            <p className="text">QUEUE</p>
          </div>
          <div className="button-wrapper">
            <img className="data-structure-buttons" src={require('./img/tree.png')} />
            <p className="text">TREE</p>
          </div>
          <div className="button-wrapper">
            <Link to={'linkedlist'}><img className="data-structure-buttons" src={require('./img/linkedList.png')} /></Link>
            <Link to={'linkedlist'}><p className="text">LINKED LIST</p></Link>
          </div>
          <div className="button-wrapper">
            <img className="data-structure-buttons" src ={require('./img/graph.png')} />
            <p className="text">GRAPH</p>
          </div>
          <div className="button-wrapper">
            <img className="data-structure-buttons" src ={require('./img/hashTable.png')} /> 
            <p className="text">HASH TABLE</p>
          </div>
        </div>
      </div>
    )
  }
}


