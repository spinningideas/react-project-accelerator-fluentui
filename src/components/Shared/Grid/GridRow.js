import React from 'react';
/* 
Example Usage:
	<GridRow>
	</GridRow>
*/

function GridRow(props) {
  return (
    <div className="ms-Grid-row" style={props.styles}>
      {props.children}
    </div>
  );
}

export default GridRow;
