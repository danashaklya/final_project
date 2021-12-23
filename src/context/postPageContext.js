import React, {useState} from 'react';

const PostPageContext = React.createContext({
    post: [],
    page: [],
    initializePost: () => {},
    addPostToPage: () => {},
    removePostFromPage: () => {},
});

export const PostPageContextProvider = (props) => {
    const [page, setPage] = useState([]);

    const [post, setPosts] = useState([]);

    const initializePost = (postFromApi) => {
        setPosts(postFromApi)
    }

    const addPostToPage = (post) => {
        let newPage = page; 
        newPage.push (post);
        setPage(page);
    }

    const removePostFromPage = (postId) => {
        let prevPage = page;
        const found = page.findIndex( (post ) => {
            return (post.id === postId); 
        })
        if (found !== -1) {
            prevPage.splice(found, 1); // delete one
            setPage([...prevPage]);
        } else {
            console.log ("error delete");
        }
    }
    
    return (<PostPageContext.Provider
     value={{page: page, addPostToPage: addPostToPage, removePostFromPage: removePostFromPage, post: post,
    initializePost: initializePost }}
    >
        {props.children}
    </PostPageContext.Provider>)

} 

export default PostPageContext;