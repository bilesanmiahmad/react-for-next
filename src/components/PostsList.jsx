import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css'
function PostsLists(){
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Manuel" body="Check out the course"/>
                <Post author="Marian" body="More react tutorials"/>
            </ul>
        </>

    )
}

export default PostsLists;