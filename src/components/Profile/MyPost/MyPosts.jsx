import React from 'react';
// import '../MyPost/MyPosts.css'
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
         <Post/>
         <Post/>
         <Post/>
         <Post/>
      
       </div>
      </div>
    )
}
export default MyPosts;