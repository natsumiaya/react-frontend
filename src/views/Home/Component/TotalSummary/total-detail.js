import React, {Component} from 'react';

class TotalSummaryDetail extends Component{
    render(){
        return (
            <div className="col-6">
                <p>{this.props.title}</p>
                <p className="detail-total">{this.props.total}</p>
            </div>
        )
    }
}

export default TotalSummaryDetail;