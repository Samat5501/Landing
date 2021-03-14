import React from 'react'
import Dialogs from '../Dialogs/Dialogs';
import Music from '../Music/Music';
import News from '../News/News';
import Content from '../Profile/Content';
import s from './Settings.module.css';

function Setting(props) {
    return (
        <div className={s.set}>
            How are You I am setting page
            <Music />
            <Content />
            <News />
            <Dialogs />
            
        </div>
    )
}
export { Setting };