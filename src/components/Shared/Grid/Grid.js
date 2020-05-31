import React from 'react';
/* 
https://developer.microsoft.com/en-us/fluentui#/styles/web/layout

Example Usage:
	<Grid>
		<GridRow>
			<GridColumn></GridColumn>
		</GridRow>
	</Grid>
*/

function Grid(props) {
  return (
    <div className="ms-Grid" dir="ltr">
      {props.children}
    </div>
  );
}

export default Grid;
