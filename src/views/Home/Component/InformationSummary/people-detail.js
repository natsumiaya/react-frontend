import React, {Component} from 'react';
import DetailText from './detail-text.js';
import DetailIcon from './detail-icon.js';

export default class PeopleSummaryDetail extends Component{
    render(){
        return (
            <ul className={"flex-container "+ this.props.className}>
                {
                    this.props.src.map((data) =>
                        <DetailIcon src={data}/>
                    )
                }
                <DetailText title={this.props.title} detail={this.props.info} date={this.props.date}/>
            </ul>
        )
    }
}