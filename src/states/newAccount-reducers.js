const initAccount={
  email: '',
  name: '',
  password:'',
  loading: false,
  success: false
};

export function newAccount(state = initAccount, action){
  switch(action.type){
    case '@NewAccount/NameChange':
    return{
      ...state,
      name: action.texts
    };
    case '@NewAccount/PasswordChange':
    return{
      ...state,
      password: action.texts
    };
    case '@NewAccount/EmailChange':
    return{
      ...state,
      email: action.texts
    };
    case '@NewAccount/StartLoading':
    return{
      ...state,
      loading: true
    };
    case '@NewAccount/EndLoading':
    return{
      ...state,
      loading: false
    };
    case '@NewAccount/Reset':
    return{
      ...initAccount
    };
    default:
      return state;
  }
}
