let initialState = {
    loggedInUser: { name: 'anyOne' }
}

function authReducer(state = initialState, action) {

    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "USER_LOGIN_STARTED":
            newState.inProcess = true;
            return newState
            break;

        case "USER_LOGIN_SUCCESS":
            newState.loggedInUser = action.payload;
            newState.loggedInUser = {success: true}
            console.log('User Logged in')
            return newState

            break;

        case "USER_LOGIN_FAILED":
            newState.loggedInUser = { failed: true }
            return newState
            break;

        case "USER_LOGIN_DONE":
            newState.inProcess = false;

            return newState
            break;
            
        default:
            return newState
            
    }

}

export default authReducer;