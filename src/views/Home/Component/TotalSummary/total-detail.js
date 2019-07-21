import React, {Component} from 'react';
import CountUp from 'react-countup'
class TotalSummaryDetail extends Component{
    render(){
        return (
            <div className="col-6">
                <p>{this.props.title}</p>
                <CountUp start={0} end={this.props.total} delay={0} >
                    {
                        ({countUpRef}) => (
                            <span className="detail-total" ref={countUpRef} />
                        )
                    }
                </CountUp>
                
            </div>
        )
    }
}

export default TotalSummaryDetail;