import useFetch from "./useFetch";

export default function reducerUserConnect(state, action){

    if (action.type === 'verified_ident') {
        const userGood = [...state.data.users].filter(user => {
            return user.login === action.payload.userLogin && user.password === action.payload.code
        })

        if (userGood.length > 0) {
            return {
                ...state,
                id: userGood[0].id,
                userLogin: userGood[0].login,
                code: userGood[0].password,
                errorLoginPassword: false,
                loading: false
            }
        }
        else {
            return {
                ...state,
                errorLoginPassword: true
            }
        }
    }

    return state
}