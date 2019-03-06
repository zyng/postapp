const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: 'null'
            }
        case 'SIGNOUT_SUCCESS':
            return state
        case 'SIGNUP_SUCCESS':
            console.log('nowy uzytkownik zarejestrowany');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('blad przy rejestracji');
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state
    }
}

export default authReducer;