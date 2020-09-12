// reducers.js
export default (state = 1, action) => {
    switch (action.type) {
        case 'tabClicked':
            return action.activeTab
        default: return state
    }
};

