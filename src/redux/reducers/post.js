// reducers.js
const initState = {
    loader: true,
    post: []
}
export default (state = initState, action) => {

    switch (action.type) {
        case 'loader':
            return {
                loader: true,
                post: [],
            };
        case 'getPost':
            return {
                loader: false,
                post: action.post,
            };
        default: return state
    }

};

