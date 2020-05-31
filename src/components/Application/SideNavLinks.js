import React from 'react';
import { CommandBarButton } from '@fluentui/react/lib';

const SideNavLinks = (props) => {
  const sideNavItems = props.getNavMenuItems(true);
  const items = sideNavItems.map((item) => (
    <CommandBarButton
      key={item.key}
      className="p-3 full-width text-left"
      iconProps={item.iconProps}
      text={item.text}
      onClick={item.onClick}
    />
  ));
  return items;
};

export default SideNavLinks;
