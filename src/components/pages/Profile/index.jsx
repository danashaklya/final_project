import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import PostPageContext from '../../../context/postPageContext';


import "./styles.css";


export const Profile = (props) => {
    const {id} = useParams();

    const [post, setPosts] = useState({});

    const globalState = useContext(PostPageContext);

    useEffect ( () => {
        const post= globalState.post.find(
        (post) => post.id.stringValue === id 
    );
    setPosts (post);
    }, [])

    if (post) {
         return (
        <div className="profile">
            <h1 className="profile-name"> {post.user?.stringvalue} </h1>
             <img src={post.profileImage?.stringValue}  alt="profile-image"/>
         
        </div>
       
    )
    } else {
        return <p>No profile with this id</p>
    }

}