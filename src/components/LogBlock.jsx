import React from 'react';
import {
  changeLogInName,
  changeLogInPassword,
  submitLogIn
} from 'states/logIn-action.js';
import {
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import {connect} from 'react-redux';
class LogBlock extends React.Component {
    constructor(props) {
        super(props);
        this.inputEl1 = null;
        this.inputEl2 = null;
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.goToLog=this.goToLog.bind(this);
    }

    render() {
      return(
        <div>
          <Form>
              <FormGroup>
              <Input className='name' type='textarea'
              getRef={el => {this.inputEl1 = el;}}
              value={this.props.name}
              onChange={this.handleNameChange}
              placeholder="USERNAME"
              ></Input>
              </FormGroup>
              <FormGroup>
              <Input className='password' type='textarea'
              value={this.props.password}
              getRef={el => {this.inputEl2 = el;}}
              onChange={this.handlePasswordChange}
              placeholder="PASSWORD"
              ></Input>
              </FormGroup>
          </Form>
          <Button className= "login"
          onClick={this.goToLog}> Log In </Button>
        </div>

      );
    }
    handleNameChange(e){
      var texts = e.target.value;
      this.props.dispatch(changeLogInName(texts));
    }

    handlePasswordChange(e){
      var texts = e.target.value;
      this.props.dispatch(changeLogInPassword(texts));
    }
    goToLog(e){
      if(!this.props.name){
        alert("No name!");
      }
      else if(!this.props.password){
        alert("No password!!");
      }
      else{
          this.props.dispatch(submitLogIn(this.props.name,this.props.password));
      }
    }
}

export default connect((state) =>{
  return{
    ...state.logIn
  };
})(LogBlock);
