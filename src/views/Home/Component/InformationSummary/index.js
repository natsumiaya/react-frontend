import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group'

import PeopleSummaryDetail from './people-detail'

export default class InformationSummary extends Component{
    constructor(){
        super();
        this.state = {
            className: '',
            visible: false
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.data !== this.props.data){
            this.setState({
                summarydata: nextProps.data
            })
        }
    }

    componentDidMount(){
        setTimeout(function(){
            this.setState({visible:true})
        }.bind(this), 1000)
    }


    render(){
        var title = this.props.title.split(' ');
        return(
            <CSSTransition in={this.state.visible} timeout={300} classNames="display" unmountOnExit appear>
                <div className={this.props.className}>
                    <div className="detail-globe-container">
                        <p className='title-font'><strong>{title[0]}</strong> {title[1]}</p>
                        {
                            this.props.data.map((data, i) =>
                                <PeopleSummaryDetail className={this.props.orientation} src={this.props.img_src} title={data.title} info={this.props.info_prefix+data.info} date={data.date} />
                            )
                        }
                    </div>
                </div>
            </CSSTransition>
        )
    }
}