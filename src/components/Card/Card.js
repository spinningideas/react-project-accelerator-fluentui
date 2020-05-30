import React from 'react';
/* 
Example Usage:
	<Card>
	</Card>
*/

function Card(props) {
  let cardStyle = {
    border: '1px solid #eeeeee',
    background: '#ffffff',
    padding: '10px'
  };

  return <div style={cardStyle}>{props.children}</div>;
}

export default Card;
