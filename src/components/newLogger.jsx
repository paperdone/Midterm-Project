import React from 'react';
import {Link} from 'react-router-dom'
import {
  Button
} from 'reactstrap';
export default class NewLogger extends React.Component {
    constructor(props) {
        super(props);
      //  this.goNewUser=this.goNewUser.bind(this);
    }

    render() {
      return(
        <div>
          <Button><Link to="/CreateID"> New Logger </Link></Button>
        </div>

      );
    }
    //goNewUser(){
      //var x= location.href;
      //location.href = x+ 'CreateID';

    //}
}
