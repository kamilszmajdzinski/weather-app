import React from "react";

const Weather = props => 
  (
      <div>
        {props.city &&
          props.country && (
            <p>
              {" "}
              Lokacja: {props.city}, {props.country}
            </p>
          )}
        {props.temperature &&
          props.humidity && (
            <p>
              {" "}
              T i H: {props.temperature}, {props.humidity}
            </p>
          )}
        {props.description && <p> {props.description}</p>}
        {props.error && <p> {props.error}</p>}
      </div>
    )
  
    export default Weather;