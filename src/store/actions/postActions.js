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
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // tutaj asynchroniczne zapytania do bazy danych
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('posts').add({
            ...post,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post })
        }).catch((error) => {
            dispatch({ type: "CREATE_POST_ERROR", error })
        })

    }
};