const inisialState = {
    userDatas: [],
    user_data: '',
    login: false
}

const loginRe = (state = inisialState, action) => {

    switch (action.type) {
        case 'sign_up':
            return {
                ...state,
                userDatas: [...state.userDatas, action.payload]
            }

        case 'loginSuc':
            return {
                ...state,
                login: true,
                user_data: action.payload
            }

        case 'loginErr':
            return {
                ...state,
                login: false,
                user_data: ''
            }

        default:
            return state;
    }

}

export default loginRe;