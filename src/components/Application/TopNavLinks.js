import React from 'react';
import { CommandBar } from '@fluentui/react/lib';

const topNavLinksStyles = {
  root: {
    height: 30
  }
};

const TopNavLinks = (props) => {
  const topNavLinksItems = props.getNavMenuItems(false);
  return <CommandBar styles={topNavLinksStyles} items={topNavLinksItems} />;
};

export default TopNavLinks;
