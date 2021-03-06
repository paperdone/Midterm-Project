import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import {deleteGroup} from 'states/group-actions.js';
import moment from 'moment';

import './GroupItem.css';

class GroupItem extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.handleGroupDelete = this.handleGroupDelete.bind(this);
    }

    render(){
      return(
        <div>
          <h5>{this.props.name} <Button color="success" onClick={this.handleAddMember}>Add Members</Button> <Button color="danger" onClick={this.handleGroupDelete}>Delete Group</Button></h5>

        </div>
      );
    }

    handleGroupDelete(e){
      this.props.dispatch(deleteGroup(this.props.id, ''));
    }
    handleAddMembers(){

    }
}

export default connect((state) => {
    return {
        ...state.grouplist,
    };
})(GroupItem);
