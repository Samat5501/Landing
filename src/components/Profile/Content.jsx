import React from 'react';
import s from './Content.module.css';
import MyPosts from './MyPost/MyPosts';

const Content = () => {
    return (
      <div className={s.content}>
        <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
      </div>

        <div>
          ava + description
      </div>
      <MyPosts/>
    </div>
    )
}
export default Content;