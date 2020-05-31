import React from 'react';

function GetStartedMessage(props) {
  if (props.displayGetStarted === false) {
    return <></>;
  }
  return <p className="whitetext">{props.locData.getstartedmessage}</p>;
}

export default GetStartedMessage;
