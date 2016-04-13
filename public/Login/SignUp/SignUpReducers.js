import {  OPEN_SIGNUP, CLOSE_SIGNUP } from './SignUpActions';


export default function signUpBox(state = {signUpBox: true}, action) {
    console.log(action.type);
  switch (action.type) {
    case OPEN_SIGNUP:
      return Object.assign({}, state, {
        signUpBox: true
      });
    case CLOSE_SIGNUP:
      return Object.assign({}, state, {
        signUpBox: false,
      });
    default:
      return state;
  }
}