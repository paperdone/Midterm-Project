import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import{
  changeAccountName,
  changeAccountPassword,
  changeAccountEmail,
  submitAccount
} from 'states/newAccount-action.js';
import {connect} from 'react-redux';
class CreateAccount extends React.Component{
    constructor(props){
        super(props);
    this.NameChange=this.NameChange.bind(this);
    this.PasswordChange=this.PasswordChange.bind(this);
    this.EmailChange=this.EmailChange.bind(this);
    this.buildAccount=this.buildAccount.bind(this);
  }

    render(){
        return(
    <div>
      <Form>
        <FormGroup>
        <Input
        className='name' type='textarea'
        getRef={el => {this.inputEl1 =el;}}
        onChange={this.NameChange}
        placeholder="USERNAME"
        value ={this.props.name}
        ></Input>
        </FormGroup>

        <FormGroup>
        <Input
        className='password' type='textarea'
        getRef={el => {this.inputEl2 =el;}}
        onChange={this.PasswordChange}
        placeholder="PASSWORD"
        value ={this.props.password}
        ></Input>
        </FormGroup>

        <FormGroup>
        <Input
        className='email' type='email'
        getRef={el => {this.inputEl3 =el;}}
        onChange={this.EmailChange}
        placeholder="EMAIL"
        value ={this.props.email}
        ></Input>
        </FormGroup>
      </Form>
      <Button className= "login"
      onClick={this.buildAccount}> New Account </Button>
    </div>
    );
  }

  NameChange(e){
    var texts=e.target.value;
    this.props.dispatch(changeAccountName(texts));
  }
  PasswordChange(e){
    var texts = e.target.value;
    this.props.dispatch(changeAccountPassword(texts));
  }
  EmailChange(e){
    var texts = e.target.value;
    this.props.dispatch(changeAccountEmail(texts));
  }
  buildAccount(){
    if(!this.props.name){
      alert('No name!');
    }
    else if(!this.props.password){
      alert('No password!!');
    }
    else if(!this.props.email){
      alert('No email!!');
    }
    else{
      this.props.dispatch(submitAccount(
        this.props.name,
        this.props.email,
        this.props.password
      ));
    }
  }
}
export default connect((state) =>{
  return{
    ...state.newAccount
  };
})(CreateAccount);
