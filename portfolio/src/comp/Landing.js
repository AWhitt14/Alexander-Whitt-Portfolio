import React, {useState} from 'react';
import { connect } from 'react-redux';
import Card from './core/cards';
import '../css/cards.css';
import click2 from '../sound/click2.mp3';
import {Howl, Howler} from 'howler'

const Landing = props => {
    
    const soundPlay = src => {
    const sound = new Howl({src});
    sound.play();
    }
    const cls = x => {
        soundPlay(click2);
    }
    Howler.volume(0.05);
    return(
        <div className='options' >
            {props.state.cards.map(i => (
                <div className='card' onMouseEnter={cls}>
                    <Card key={i.id} item={i}/>
                </div>
            ))}
        </div>
    )
}

const stateToProps = (state) => {
    return {state: state}
 }
 
 const dispatchToProps = {
 
 }
 
 
 
 export default connect(stateToProps,dispatchToProps)(Landing);
