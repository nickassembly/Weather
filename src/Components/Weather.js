import React from "react";

const Weather = props => (
  <div className="weather__info">
  {
    props.city && props.country && <p className="weather__key">Location:
      <span className="weather__value"> {props.city}, {props.country} </span> 
    </p>
  }
  {
    props.temperature && <p className="weather__key"> Temperature :
      <span className="weather__value">  {props.temperature} </span>
        </p>
  }
  {
    props.humidity && <p className="weather__key"> Humditiy:
      <span className="weather__value">  {props.humidity} </span>
       </p>
  }
  {
    props.description && <p className="weather__key"> Conditions: 
   <span className="weather__value">  {props.description} </span>
    </p>
  }
  {
    props.error && <p className="weather__error"> {props.error}</p>
  }
</div>
);
  // functional stateless components don't need to extend react.component or use a class
  // functional stateless components with only one element don't need () => {}


export default Weather;
