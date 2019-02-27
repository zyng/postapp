/*  normalnie wykonywane by bylo to:
export const createPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    }
}
*/
// jednak z uzyciem thunka przekazujemy funkcje
export const createPost = (post) => {
    return (dispatch, getState) => {
        // tutaj asynchroniczne zapytania do bazy danych
        dispatch({
            type: 'CREATE_POST',
            post
        })
    }
};