import React from 'react';
import withCounter from './withCounter';

function ClickCounter(props) {
    const {count, incrementCount} = props;
    // console.log("name", props.name); // undefined

  return (
    <div>
        <button onClick={incrementCount}>{props.name} Clicked {count} times</button>
    </div>
  )
}

export default withCounter(ClickCounter, 5);