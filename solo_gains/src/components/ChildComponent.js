import React from "react";

function ChildComponent(props) {

    

const { onIncrement } = props;

  return (
    <div>
      <button onClick={onIncrement}>Click here if you worked out today</button>
    </div>
  );
}

export default ChildComponent;
