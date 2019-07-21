import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import TotalSumaryDetail from './total-detail.js'

class TotalSummary extends Component{
    constructor(){
        super();
        this.state = {
            summarydata: [0, 0],
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
        }.bind(this), 300)
    }
    
    render(){
        var title = this.props.title.split(' ');
        return (
            <TransitionGroup>
                <CSSTransition in={this.state.visible} timeout={300} classNames={this.state.visible?'fadeIn':'fadeOut'} unmountOnExit appear>
                    <div className={this.props.className}>
                        <div className="detail-globe-container">
                            <p className='title-font'><strong>{title[0]}</strong> {title[1]}</p>
                            <div className="row">
                                { 
                                    this.state.summarydata.map((data, i) => 
                                        <TotalSumaryDetail title={this.props.data_title[i]} total={data} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}

export default TotalSummary;