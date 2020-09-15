import React from 'react';
import {connect} from 'react-redux';



const Card = props => {
    const links = () => {
        console.log(props.item.links.length);
    }
return(
        <div className='inner' onClick={links} >
            <h2>{props.item.name}</h2>
            <div>
                <p className='desc'>{props.item.description}</p>
            </div>
            <p className='nums'>Projects: {props.item.numberOfProjects()}</p>
            
        </div>
    )
}

const stateToProps = state => {
    return {color: state.color}
 }
 
 const dispatchToProps = {}
 
 
 
 export default connect(stateToProps,dispatchToProps)(Card);