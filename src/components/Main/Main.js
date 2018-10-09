import React, { Component } from 'react'
import axios from 'axios'
import Query from '../Query/Query'
import Results from '../Results/Results'
// import Character from '../Character/Character'
import './main.css'


export default class Main extends Component {
    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        description:undefined,
        main_condition: undefined,
        humidity:undefined
    }
    
    getWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.target.reset();

        const search = `${city},${country}&appid=`;
        const query = `${process.env.API_URL}${search}${process.env.API_KEY}`;
        
        axios.get(query)
            .then(response => {
                this.setState({
                    city: response.data.name,
                    country: response.data.sys.country,
                    temperature: response.data.main.temp,
                    description:response.data.weather[0].description,
                    main_condition: response.data.weather[0].main,
                    humidity: response.data.main.humidity,
                });
            });
    }
           
    render() {
        return (
        <div className="main-container">
            {/* <section className="character-container">
                <Character main_condition={this.state.main_condition} />
            </section> */}
            <section className="query-container">
                <Query getWeather={this.getWeather} />
            </section>
            <section className="results-container">
                <Results 
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    description={this.state.description}
                    main_condition={this.state.main_condition}
                    humidity={this.state.humidity}
                /> 
            </section>
        </div>
        )
    }
}
