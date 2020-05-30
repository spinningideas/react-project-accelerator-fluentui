import React from 'react';
/* 
https://developer.microsoft.com/en-us/fluentui#/styles/web/layout

Example Usage:
	<GridColumn>
	</GridColumn>
*/

function GridColumn(props) {
  let gridClassNames = 'ms-Grid-col' + props.gridClasses ? props.gridClasses : 'ms-sm12 ms-md12 ms-lg12';

  let gridColumnStyle = {
    border: '1px solid #eeeeee',
    background: '#ffffff',
    padding: '10px'
  };

  return (
    <div className={gridClassNames} style={gridColumnStyle}>
      {props.children}
    </div>
  );
}

export default GridColumn;
