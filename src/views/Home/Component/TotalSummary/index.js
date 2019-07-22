import React, {Component} from 'react';

import TotalSumaryDetail from './total-detail.js'

class TotalSummary extends Component{
    constructor(){
        super();
        this.state = {
            summarydata: [0, 0],
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.data !== this.props.data){
            this.setState({
                summarydata: nextProps.data
            })
        }
    }
    
    render(){
        var title = this.props.title.split(' ');
        return (
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
        )
    }
}

export default TotalSummary;