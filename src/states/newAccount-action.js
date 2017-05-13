import{
  newSubmit
} from 'api/accountPost.js';
import{
  logInSubmit
}from 'api/logIn.js';
export function changeAccountName(texts){
  return{
    type: '@NewAccount/NameChange',
    texts
  };
}
export function changeAccountPassword(texts){
  return{
    type: '@NewAccount/PasswordChange',
    texts
  };
}

export function changeAccountEmail(texts){
  return{
    type: '@NewAccount/EmailChange',
    texts
  };
}
function endGoLoading(){
  return{
    type: '@NewAccount/StartLoading'
  };
}
function startGoLoading(){
  return{
    type: '@NewAccount/StartLoading'
  };
}
function resetAccount(){
  return{
    type: '@NewAccount/Reset'
  };
}

export function submitAccount(name,email,password){
  return (dispatch, getState) =>{
    dispatch(startGoLoading());
    // check the name is use or not
   return  logInSubmit(name).then((len) => {
      if(len){
        console.log("The name has been use");
        dispatch(endGoLoading());
        dispatch(resetAccount());
      }
      else{
        // submit the account
        newSubmit(name,password,email).then((status)=>{
           dispatch(endGoLoading());
           console.log(status); // output status
           console.log("Submit NewAccount");
           dispatch(resetAccount());
       }).catch(err => {
           dispatch(endGoLoading());
           console.error('Error creating posts', err);
           dispatch(resetAccount());
       });
      }
    });
    // submit the account
/*     newSubmit(name,password,email).then((status)=>{
        dispatch(endGoLoading());
        console.log(status); // output status
        console.log("Submit NewAccount");
        dispatch(resetAccount());
    }).catch(err => {
        dispatch(endGoLoading());
        console.error('Error creating posts', err);
        dispatch(resetAccount());
    });     */
//    setTimeout(()=>{ dispatch(endGoLoading());
//    },600);
    //console.log("Submit NewAccount");
    //dispatch(resetAccount());
  };
}
