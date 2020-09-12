// reducers.js
export default (state = "", action) => {
    switch (action.type) {
        case 'selectChange':
            return action.selectedValue
        default: return state
    }
};

