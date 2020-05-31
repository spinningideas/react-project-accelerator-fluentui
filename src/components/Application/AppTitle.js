import React from 'react';
import { Text } from '@fluentui/react/lib';

const AppTitle = (props) => {
  return (
    <Text variant="xLarge">
      <span className="ml-2 ms-hiddenXlUp">RPA</span>
      <span className="ms-hiddenLgDown">{props.locData.apptitle}</span>
    </Text>
  );
};

export default AppTitle;
