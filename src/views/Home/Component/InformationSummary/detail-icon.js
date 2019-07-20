import React, {Component} from 'react';

class DetailIcon extends Component{
    render(){
        const images = require.context('../../../../assets/images', true);
        let logo = images(`./${this.props.src}.svg`);
        return(
            <li className="icon-box icon-user flex-item">
                <img src={logo}/>
            </li>
        )
    }
}

export default DetailIcon;