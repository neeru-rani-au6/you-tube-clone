import { LOGIN_SET, LOGOUT } from '../usertype';

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isAuthenticating: localStorage.getItem('isAuth') ? localStorage.getItem('isAuth') : false
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SET:
            const userJSON = JSON.stringify(payload)
            localStorage.setItem('user', userJSON);
            localStorage.setItem('isAuth', true);
            return { ...state, user: payload, isAuthenticating: true }
        // case TOGGLE_USER:
        //     return { ...state, isAuthenticating: !state.isAuthenticating }

        case LOGOUT:
            localStorage.removeItem('user')
            localStorage.setItem('isAuth', false)
            return { ...state, user: null, isAuthenticating: false }
        default:
            return state;

    }
}

export default userReducer;