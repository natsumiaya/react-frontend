import React, {Component} from 'react';
import Moment from 'react-moment';

export default class DetailText extends Component{
    render(){
        return(
            <li className="flex-item">
                <p className="info-title">{this.props.title }</p>
                <p className="info-detail">{this.props.detail}</p>
                <p className="info-date">
                    <Moment fromNow>
                        {this.props.date}
                    </Moment>
                    <span> at </span>
                    <Moment format="hh:mm">
                        {this.props.date}
                    </Moment>
                </p>
            </li>
        )
    }
}