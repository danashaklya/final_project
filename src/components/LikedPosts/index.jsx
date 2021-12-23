import './styles.css';
import { Button } from "../Button";
import { useContext } from "react";
import PostPageContext from "../../context/postPageContext";



export const LikedPosts = (props) => {
    const {image, user, id} = props;

    const globalState = useContext (PostPageContext);

    const removeLikedPost = () => {
        globalState.removePostFromPage(id);
    }

    
    return (
        <div className="liked-post">
            <img className="liked-photo" src={image} alt="post photo"/>
            <div className="liked-post-dec">
                <h1 className="liked-post-name">{user}</h1>
             
            </div>
            <Button text="Remove liked post" type="secondary" isDisabled={false} action={removeLikedPost} />
         
        </div>
    )
}