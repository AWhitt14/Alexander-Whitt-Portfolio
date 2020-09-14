import React from 'react';
import { connect} from 'react-redux';
import '../css/header.css';

class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            borderNum: `head b${Math.floor(Math.random() * 3) + 1}`,
            random: () => {this.setState({borderNum: Math.floor(Math.random() * 3) + 1});}
        }


    }

    
    
    render(){return(
        <div className={this.state.borderNum}>
            <h2>{this.props.name}</h2>
            <p>placeholder text</p>
        </div>
    )}
}

const stateToProps = state => {
   return {name: state.name}
}

const dispatchToProps = {

}



export default connect(stateToProps,dispatchToProps)(Profile);

