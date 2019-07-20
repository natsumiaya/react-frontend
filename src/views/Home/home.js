import React, {Component} from 'react';

import TotalSummary from './Component/TotalSummary';
import InformationSummary from './Component/InformationSummary';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            total_values: [0, 0],
            data_title: ["Population", "Residents"],
            total_vehicles: [0, 0],
            data_title_vehicle: ["Total Vehicle", "Total Passanger"],
            vehicles_detail: [],
            people_detail: []
        }
    }

    componentDidMount = ()=>{
        this.getSummaryData();
        this.getVehicleData();
        this.getPeopleDetail();
    }

    getSummaryData(){
        fetch('https://swapi.co/api/planets/1')
        .then(result => {
            return result.json();
        }).then(data => {
            this.setState({
                total_values: [data.population, data.residents.length]
            })
        })
    }

    getVehicleData(){
        fetch('https://swapi.co/api/vehicles')
        .then(result => {
            return result.json();
        }).then(data => {
            let total_passanger = 0;
            let vehicle_detail = [];
            for(let i = 0; i < data.results.length; i++){
                if (i < 3){
                    var name = data.results[i].name.split(' ');
                    vehicle_detail.push({
                        "title": name[0], 
                        "info": data.results[i].model, 
                        "date": data.results[i].edited
                    })
                }
                total_passanger += parseInt(data.results[i].passengers)
            }
            this.setState({
                total_vehicles: [data.results.length, total_passanger],
                vehicles_detail: vehicle_detail
            });
        })
    }

    getPeopleDetail(){
        fetch('https://swapi.co/api/people')
        .then(result => {
            return result.json();
        }).then(data => {
            var detail = [];
            for (let i = 0; i < 3; i++){
                detail.push({"title": data.results[i].gender, "info":data.results[i].height, "date":data.results[i].edited})
            }
            this.setState({
                people_detail: detail
            })
        })
    }

    render(){
        return(
            <div className="landing-page">
                <div className="globe-home">
                    <TotalSummary className="detail-globe left-number" title="Face Recognition" data={this.state.total_values} data_title={this.state.data_title}/>
                    <TotalSummary className="detail-globe right-number" title="Traffic Surveilance" data={this.state.total_vehicles} data_title={this.state.data_title_vehicle}/>
                    <InformationSummary data={this.state.people_detail} title="Face Detection" className="detail-globe left-info" info_prefix="Height " img_src={['user-silhouette']} orientation="column"/>
                    <InformationSummary data={this.state.vehicles_detail} title="Traffic Surveilance" className="detail-globe right-info" info_prefix="" img_src={['bus', 'icon-lpr']} orientation="row"/>
                </div>
            </div>
        )
    }
}

export default Home;