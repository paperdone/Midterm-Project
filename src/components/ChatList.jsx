import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import GroupList from 'components/GroupList.jsx';
import ChatRoom from 'components/ChatRoom.jsx';
import {listGroups} from 'states/group-actions.js';

import './ChatList.css';

class ChatList extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.dispatch(listGroups(''));
    }
    render() {
      return(

          <Row>
            <Col xs="4"><GroupList/></Col>
            <Col xs="8"><ChatRoom/></Col>
          </Row>


      );
    }
}

export default connect((state) => {
    return {
        ...state.grouplist,
    };
})(ChatList);
