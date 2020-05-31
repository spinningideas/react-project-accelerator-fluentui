import React from 'react';
/* 
Example Usage:
	<Card>
		<CardItem>
		</CardItem>
	</Card>
*/

function CardItem(props) {
  let cardItemStyle = {
    background: '#ffffff',
    padding: '10px'
  };

  return <div style={cardItemStyle}>{props.children}</div>;
}

export default CardItem;
