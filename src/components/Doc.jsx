'use strict';
import React, {Component} from "react";
//import Configure from '../docs/user-guide/configuring';

const docs = {
  configure: require('../docs/user-guide/configuring'),
}

export default
  class Doc extends Component {
    render () {
      let DocComponent = docs[this.props.name];

      if (!DocComponent) return <div/>;

      return <div><DocComponent/></div>;
    }
  }

