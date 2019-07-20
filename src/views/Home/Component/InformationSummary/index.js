import React, {Component} from 'react';
import PeopleSummaryDetail from './people-detail'

export default class InformationSummary extends Component{
    constructor(){
        super();
        this.state = {
            summarydata: [],
            className: ''
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
        return(
            <div className={this.props.className}>
                <div className="detail-globe-container">
                    <p className='title-font'><strong>{title[0]}</strong> {title[1]}</p>
                    {
                        this.state.summarydata.map((data, i) =>
                            <PeopleSummaryDetail className={this.props.orientation} src={this.props.img_src} title={data.title} info={this.props.info_prefix+data.info} date={data.date} />
                        )
                    }
                </div>
            </div>
        )
    }
}