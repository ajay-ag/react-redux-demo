// reducers.js
export default (state = '', action) => {
    switch (action.type) {
        case 'textFieldChange':
            return action.textfield
        default: return state
    }
};

