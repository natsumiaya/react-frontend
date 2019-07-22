import React, {Component} from 'react';

// import Loading from '../loading.js'
import HomeGlobe from '../Home/Section/home-globe.js'

const loader_container = document.querySelector('.loader-container');

class Home extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        this.timer = setInterval(
            () => loader_container.classList.add('loader--hide'),
            2250,
        );
    }

    render(){
        return(
            <HomeGlobe />
        )
    }
}

export default Home;