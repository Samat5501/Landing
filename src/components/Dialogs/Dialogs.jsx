import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = () => {
    return <div className={ s.dialog + ' ' + s.active }>
                    <NavLink to ="/dialogs/1">Asylbek</NavLink>
               </div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogItem/>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/2">Urbukan</NavLink>
               </div>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/3">Ermat</NavLink>
               </div>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/4">Samat</NavLink>
               </div>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/5">Nurdan</NavLink>
               </div>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/6">Ainazik</NavLink>
               </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I am Samat</div>
            </div>
        </div>
    )
}

export default Dialogs;
