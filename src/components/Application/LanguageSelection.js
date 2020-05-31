import React from 'react';
import { Dropdown } from '@fluentui/react/lib';

const languageDropdownStyles = { dropdown: { width: 100 } };

const languageOptions = [
  { key: 'enUS', text: 'English' },
  { key: 'zhCN', text: 'Chinese' },
  { key: 'esES', text: 'Spanish' }
];

const LanguageSelection = (props) => {
  const languageSelectionMakeChoice = (evnt, item) => {
    props.localizationService.setUserLocale(item.key);
    window.location.reload();
  };

  return (
    <Dropdown
      id="language-menu"
      styles={languageDropdownStyles}
      selectedKey={props.selectedLocCode ? props.selectedLocCode : undefined}
      options={languageOptions}
      onChange={languageSelectionMakeChoice}
    ></Dropdown>
  );
};

export default LanguageSelection;
