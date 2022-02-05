import React from 'react';
import "../style/Question.css"
 function Question(props)
 {
  return <div>
      <h1>
        {props.question}
      </h1>
  </div>;
}
export default Question