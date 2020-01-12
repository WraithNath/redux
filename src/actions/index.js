import jsonPlaceholder from '../apis/jsonPlaceholder';
import lodash from 'lodash';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = userId => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const posts = getState().posts;

    lodash.chain(posts)
        .map('userId')
        .uniq()
        .forEach(async id => await dispatch(fetchUser(id)))
        .value();
};