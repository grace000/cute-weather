import React from 'react'
import './results.css'
import Character from '../Character/Character';

const Results = props => {

  let kTemp = props.temperature;
	let fTemp = (kTemp - 273.15) *9 /5 + 32;

  return (
    <div className="results-wrapper">
      <Character className="character" main_condition={props.main_condition} />
      {!props.city && <p>Submit a location to find the weather</p>}
      {props.city && props.country && 
        <div className="location"><h1>{props.city}, {props.country}</h1></div>
      }
      {props.description && 
        <div className="description"><p>{props.description}</p></div>
      }
      {props.temperature && 
        <div className="temperature"><p>{fTemp.toFixed()}&deg;F</p></div>
      }
      {props.humidity &&
        <div className="humidity"><p>Humidity: {props.humidity} %</p></div>
      }
    </div>
  ) 
}

export default Results;

