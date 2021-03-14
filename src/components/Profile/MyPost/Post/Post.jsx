import React from 'react';
import  s from './Post.module.css'

const Post = (props) => {
    return (
          <div className={s.item}>
            <img src='https://www.liveabout.com/thmb/pElYdfgKoydmsrso8fiU1wd-jO0=/1449x1449/smart/filters:no_upscale()/Avatar_12_HR_01-56a00ca93df78cafda9fd17c.jpg'/>
        <span className={s.props}>{props.message}</span> 
        <div>
          <span>like</span>
        </div>
        </div>
    )
}
export default Post;