import React from 'react';
import  s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
        My Post
        <div>
          <textarea></textarea>
          <button>Add</button>
        </div>
        <div className={s.posts}>
         <Post message = "Hi, How are you?"/>
         <Post message = "I'm Samat"/>
         <Post message = "Hi, Nice to meet you"/>
         <Post message = "Hi, Nice to meet you too"/>
      
       </div>
      </div>
    )
}
export default MyPosts;