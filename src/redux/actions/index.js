import api from 'axios';

export const tabClicked = (activeTab) => ({
    type: 'tabClicked',
    activeTab: activeTab
});

export const textFieldChange = (textFieldValue) => ({
    type: 'textFieldChange',
    textfield: textFieldValue
});

export const selectChange = (selectedValue) => ({
    type: 'selectChange',
    selectedValue: selectedValue
});

export const checkboxChange = (checkedValue) => ({
    type: 'checkboxChange',
    checkedValue: checkedValue
});

export const radioChanged = (selectedOption) => ({
    type: 'radioChanged',
    selectedOption: selectedOption
});

export const loading = (loader) => ({
    type: 'showLoader',
    loader: loader
});

export const getPost = (post) => ({
    type: 'getPost',
    post: post
});

export const fetchPost = (post) => {

    return (dispatch) => {
        api.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            const post = response.data;
            dispatch(getPost(post));
        })
    }

};

