import React, { Component } from 'react';

import Stack from '../Stack/Stack';
import StackDiscussion from './StackDiscussion';
import StackCode from './StackCode';
<<<<<<< c3f265f73a0b4f72aebf47f6ea8c8d1201b1e8b6
=======
>>>>>>> Local authentication strategy works. Separated out discussion components in to relevant containers.

>>>>>>> Local authentication strategy works. Separated out discussion components in to relevant containers.

export default class StackPage extends Component {
  render() {

    return <div>
      <div className="row">
        <div className="col-md-6">
          <Stack />
        </div>
        <div className="col-md-6">
          <StackCode />
          <StackDiscussion />
        </div>
      </div>
    </div>
  }
}
