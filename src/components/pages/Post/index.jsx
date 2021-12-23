import "./styles.css"
import {useEffect, useState, useContext} from 'react';
import { Feature } from "../../Feature";
import PostPageContext from "../../../context/postPageContext";
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { useHistory } from "react-router-dom";

export const Post = () => {

    const [post, setPosts] = useState([]);

    const globalState = useContext(PostPageContext);

    const history = useHistory();

 // check if a current user is logged into firebase
    useEffect(
    () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          history.push('/login');
        }
      })
    }, []
  );

    useEffect(
        () => {
            getPosts();
        }, []
    );

    const getPosts = async() => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/dana-social-app/databases/(default)/documents/posts/  ');
            const data = await response.json();
            const formattedData = data.documents.map((item) => {
                return item.fields
            });

            console.log(formattedData);
            setPosts(formattedData);
            globalState.initializePost(formattedData);

        }catch(err) {
            console.log (err)
        }
    }

    return (
        <div className="post-page">
          <h1 className="post-title"> Home </h1>
          <div className="post-container">
          { 
          post.map((post) => (
            <Feature key={post.id.stringValue} image={post.image.stringValue} user={post.user.stringValue} caption={post.caption.stringValue} 
            location={post.location.stringValue}  profileImage={post.profileImage.stringValue}  backgroundProfile={post.backgroundProfile.stringValue} 
            id={post.id.stringValue} ></Feature>
          )) 
        }
          </div>
        </div>
    );
};