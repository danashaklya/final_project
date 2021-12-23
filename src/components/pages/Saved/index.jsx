import "./styles.css";
import PostPageContext from "../../../context/postPageContext";
import { useContext, useState, useEffect  } from "react";
import { LikedPosts } from "../../LikedPosts";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useHistory } from "react-router-dom";

export const Saved = () => {
   
    const [page, setPage] = useState([]);

    const history = useHistory();
  
    const globalState = useContext(PostPageContext);

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
        setPage(globalState.page);
      }, [globalState]
    )
  
   
   
    return (
        <div className="post-page">
        <h1 className="post-title">My saved posts</h1>
        <div className="page">
            {
                page.map((page) => <LikedPosts image={page.image} id={page.id} user={page.user} />)
            }
        </div>
        </div>
    );
};