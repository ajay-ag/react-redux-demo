// reducers.js
export default (state = [], action) => {
    switch (action.type) {
        case 'checkboxChange':
            return action.checkedValue
        default: return state
    }
};

