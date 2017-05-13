import{
  logInSubmit
}from 'api/logIn.js';
export function changeLogInName(texts){
  return{
    type: '@LogIn/NameChange',
    texts
  };
}
export function changeLogInPassword(texts){
  return{
    type: '@LogIn/PasswordChange',
    texts
  };
}
function startLoading(){
  return{
    type: '@LogIn/StartLoading'
  };
}
function endLoading(){
  return{
    type: '@LogIn/EndLoading'
  };
}
function resetItem(){
  return{
    type: '@LogIn/Reset'
  };
}

export function submitLogIn(name,password){
  return (dispatch, getState) => {
    dispatch(startLoading());
    // submit the information to check is right or not
    setTimeout(() =>{dispatch(endLoading());
    },600);
    return logInSubmit(name,password).then((len)=>{
      if(len){
        console.log("Log in succeess");
        console.log(name);
        console.log(password);
      }
      else{
        console.log("Log in fail");
      }
      dispatch(resetItem());
    });
  };
  /*  if(1){
      console.log("Log in succeess");
      console.log(name);
      console.log(password);
    }
    else{
      console.log("Log in fail");
    }
    dispatch(resetItem());
  };*/
}
