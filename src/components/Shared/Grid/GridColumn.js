import React from 'react';
/* 
https://developer.microsoft.com/en-us/fluentui#/styles/web/layout

Example Usage:
	<GridColumn>
	</GridColumn>
*/

function GridColumn(props) {
  let gridClassSmallName = 'ms-sm' + (props.sm ? props.sm : '12');
  let gridClassMedName = 'ms-md' + (props.md ? props.md : '12');
  let gridClassLargeName = 'ms-lg' + (props.lg ? props.lg : '12');
  let gridClassPadding = props.padding ? props.padding + 'px' : '0';
  let gridClassMargin = props.margin ? props.margin + 'px' : '0';

  let gridClassNames = props.classes
    ? 'ms-Grid-col ' + props.classes
    : 'ms-Grid-col ' + gridClassSmallName + ' ' + gridClassMedName + ' ' + gridClassLargeName;

  let gridColumnStyle = {
    padding: gridClassPadding,
    margin: gridClassMargin
  };

  return (
    <div className={gridClassNames} style={gridColumnStyle}>
      {props.children}
    </div>
  );
}

export default GridColumn;
