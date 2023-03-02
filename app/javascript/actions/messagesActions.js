export const FETCH_RANDOM_MESSAGE_REQUEST = 'FETCH_RANDOM_MESSAGE_REQUEST';
export const FETCH_RANDOM_MESSAGE_SUCCESS = 'FETCH_RANDOM_MESSAGE_SUCCESS';
export const FETCH_RANDOM_MESSAGE_FAILURE = 'FETCH_RANDOM_MESSAGE_FAILURE';

export const fetchRandomMessage = () => {
  return dispatch => {
    dispatch({ type: FETCH_RANDOM_MESSAGE_REQUEST });

    return fetch('/api/greetings')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_RANDOM_MESSAGE_SUCCESS,
          payload: data.content
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_RANDOM_MESSAGE_FAILURE,
          payload: error.greeting
        });
      });
  };
};