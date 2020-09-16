import { LOGIN_SET,LOGOUT,TOGGLE_USER} from '../usertype';

export const Login_user = (user)=>{
    return{
        type:LOGIN_SET,
        payload: user
    }
    
}

export const Logout = ()=>{
    return{
        type:LOGOUT
    }
}

export const Toggle_User = ()=>{
    return{
        type:TOGGLE_USER
    }
}