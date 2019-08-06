import{ FETCH_POSTS, NEW_POST} from "./types";

export const fetchPosts = () => dispatch => {

      fetch('https://rest-vol1.herokuapp.com/posts')
          .then(res=>res.json())
          .then(posts=>dispatch({
              type: FETCH_POSTS,
              payload: posts.reverse()
          },
          console.log(posts)
          ))
};

export const createPost = (post) => dispatch => {

    fetch('https://rest-vol1.herokuapp.com/posts', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },

        body: JSON.stringify(post)

    }).then(res=>res.json())
        .then(post=>dispatch({
            type: NEW_POST,
            payload: post
        }))
};
/*
export const deletePost = (post) => dispatch => {

    fetch('https://rest-vol1.herokuapp.com/posts', {
        method: 'DELETE',
        headers:{
            'content-type': 'application/json'
        },

        body: JSON.stringify(post)

    }).then(res=>res.json())
        .then(post=>dispatch({
            type: DELETE_POST,
            payload: post
        }))
};

*/
