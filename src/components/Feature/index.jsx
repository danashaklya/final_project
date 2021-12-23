import './styles.css';
import { Button } from '../Button';
import {Link} from 'react-router-dom'
import PostPageContext from '../../context/postPageContext';

import { useContext } from 'react';

export const Feature = (props) => {
    const {image, user, caption, location, profileImage,backgroundProfile, id} = props;

    const globalState = useContext(PostPageContext);

    const addPostToPage = () => {

        const post = {
            id,
            user,
            image,
            caption,
            location,
            profileImage,
            backgroundProfile
        
    }

    globalState.addPostToPage(post);
    console.log(globalState.order);
    alert("Post added");

}

    return (
        <div className="post">
             <Link to={`/post/${id}`} >
            <h1 className="post-user"> <img src="https://yorktonrentals.com/wp-content/uploads/2017/06/usericon.png" width="30px" height="30px" margin="4px" alt="usericon" /> 
            {user} <Button text="Follow" type="quaternary" isDisabled={false} action={() => alert("Following")}/>  ... </h1>
            
            </Link>
          
            <h1 className="post-location">{location}</h1>
            
            <img className="post-photo" src={image} alt={user + caption +  "photo"} />
        
          
            <p className="post-caption"> {caption}</p>

          

        <Button text="💜" type="primary" isDisabled={false} action={(addPostToPage) => alert("Liked Post")}/> 
        
        <Button text="🟣" type="tertiary" isDisabled={false} action={(addPostToPage) => alert("Saved Post")}/>

        </div>
    )
}