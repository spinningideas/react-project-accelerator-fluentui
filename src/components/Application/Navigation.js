import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// UI Kit Components
import {
  DefaultButton,
  IconButton,
  CommandBarButton,
  Stack,
  Dropdown,
  Panel,
  FontIcon,
  Text
} from '@fluentui/react/lib';

// Services
import LocalizationService from 'services/LocalizationService';
import NavigationService from 'services/NavigationService';
// Components
import SignInDialog from 'components/Application/SignInDialog';

/* 
TODO: pull in or implement navbar? https://github.com/microsoft/fluentui/issues/13409
*/

function Navigation(props) {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [locData, setLocData] = useState({});
  const [selectedLocCode, setSelectedLocCode] = useState('');
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);

  const localizationService = LocalizationService();
  const navigationService = NavigationService();

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      setSelectedLocCode(locCode);
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        ['apptitle', 'signin', 'signindescription', 'signout', 'home', 'contact', 'about', 'cancel'],
        locCode
      );

      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  const toggleDrawerOpen = () => {
    setOpenNavigation(!openNavigation);
  };

  const closeDrawer = () => {
    setOpenNavigation(false);
  };

  const languageOptions = [
    { key: 'enUS', text: 'English' },
    { key: 'zhCN', text: 'Chinese' },
    { key: 'esES', text: 'Spanish' }
  ];

  const languageSelectionMakeChoice = (locale) => {
    localizationService.setUserLocale(locale);
    window.location.reload();
  };

  const handleSignInClick = () => {
    setSignInDialogOpen(false);
    props.handleSignIn();
  };

  const handleSignOutClick = () => {
    props.handleSignOut();
  };

  const appTitle = () => {
    //if (isWidthUp('sm', props.width)) {
    //  return <>{locData.apptitle}</>;
    //}
    return <>RPA</>;
  };

  const navMenuItems = [
    {
      key: 'home',
      text: locData.home,
      iconProps: { iconName: 'Home' },
      onClick: () => navigate('/')
    },
    {
      key: 'contact',
      text: locData.contact,
      iconProps: { iconName: 'ArrangeByFrom' },
      onClick: () => navigate('/contact')
    },
    {
      key: 'about',
      text: locData.about,
      iconProps: { iconName: 'Help' },
      onClick: () => navigate('/about')
    }
  ];

  const navigate = (route) => {
    setOpenNavigation(false);
    navigationService.navigate(props, route, null);
  };

  const NavMenu = () => {
    const items = navMenuItems.map((item) => (
      <Stack.Item key={item.key}>
        <CommandBarButton
          className="p-2 m-2 full-width text-left"
          iconProps={item.iconProps}
          text={item.text}
          onClick={item.onClick}
        />
      </Stack.Item>
    ));
    return items;
  };

  return (
    <div>
      <Stack position="static">
        <Stack.Item>
          <IconButton onClick={() => toggleDrawerOpen()} color="inherit" aria-label="menu">
            <FontIcon iconName="GlobalNavButton" />
          </IconButton>
          <Text variant="xLarge">{appTitle()}</Text>
          <Dropdown
            id="language-menu"
            selectedKey={selectedLocCode ? selectedLocCode : undefined}
            options={languageOptions}
            onChange={languageSelectionMakeChoice}
          ></Dropdown>
          {props.userSignedIn && <DefaultButton onClick={() => handleSignOutClick}>{locData.signout}</DefaultButton>}
          {!props.userSignedIn && (
            <DefaultButton onClick={() => setSignInDialogOpen(true)}>{locData.signin}</DefaultButton>
          )}
        </Stack.Item>
      </Stack>
      <Panel isLightDismiss isOpen={openNavigation} onDismiss={closeDrawer}>
        <Stack>
          <NavMenu />
        </Stack>
      </Panel>
      <SignInDialog
        locData={locData}
        open={signInDialogOpen}
        handleSignIn={handleSignInClick}
        handleSignInCancel={() => setSignInDialogOpen(false)}
      />
    </div>
  );
}

export default withRouter(Navigation);
