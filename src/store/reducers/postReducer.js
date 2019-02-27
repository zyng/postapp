const initState = {
    posts: [
        { id: 1, title: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, temporibus!' },
        { id: 2, title: 'Lorem ipsum', content: 'Lorem ipsum, dolor sit amet  adipisicing elit. Asperiores, temporibus!' },
        { id: 3, title: 'Lorem ipsum dolor', content: 'Lorem ipsum,  sit amet consectetur adipisicing, temporibus!' },
    ]

}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post);
            break;

    }
    return state;
}

export default postReducer;