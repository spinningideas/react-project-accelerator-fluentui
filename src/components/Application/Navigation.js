import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// UI Kit Components
import { IconButton, Stack, Panel, PanelType, FontIcon } from '@fluentui/react/lib';
// Services
import LocalizationService from 'services/LocalizationService';
import NavigationService from 'services/NavigationService';
// Components
import { Grid, GridRow, GridColumn } from 'components/Shared/Grid';
import AuthButton from 'components/Application/AuthButton';
import AuthDialog from 'components/Application/AuthDialog';
import AppTitle from 'components/Application/AppTitle';
import TopNavLinks from 'components/Application/TopNavLinks';
import SideNavLinks from 'components/Application/SideNavLinks';
import LanguageSelection from 'components/Application/LanguageSelection';

// import { objectInArray } from 'utils';
/* 
TODO: improve this navbar or pull one in once this happens: 
https://github.com/microsoft/fluentui/issues/13409
*/

const sideMenuWidth = 245;

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

  const handleInitiateSignInClick = () => {
    setSignInDialogOpen(true);
  };

  const handleSignInClick = () => {
    setSignInDialogOpen(false);
    props.handleSignIn();
  };

  const handleSignOutClick = () => {
    setSignInDialogOpen(false);
    props.handleSignOut();
  };

  const navBarStyles = {
    borderBottom: '1px solid #eeeeee',
    padding: '5px',
    paddingTop: '10px',
    height: '50px'
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

  const getNavMenuItems = (showIcons) => {
    let baseNavItems = navMenuItems;
    /*
		Example of adding menu items at run time:

		let signOutItem = {
			key: 'signout',
			text: locData.signout,
			iconProps: { iconName: 'SignOut' },
			onClick: () => handleSignOutClick
		}

    if (props.userSignedIn && !objectInArray(baseNavItems, 'key', 'signout')) {
      baseNavItems.push(signOutItem);
		}
		*/

    if (showIcons === false) {
      // remove icon from each item
      return baseNavItems.map((item) => {
        let itemClone = Object.assign({}, item);
        return delete itemClone.iconProps, itemClone;
      });
    }
    return baseNavItems;
  };

  const navigate = (route) => {
    setOpenNavigation(false);
    navigationService.navigate(props, route, null);
  };

  return (
    <Grid>
      <GridRow styles={navBarStyles}>
        <GridColumn sm={3} md={4} lg={5}>
          <IconButton onClick={() => toggleDrawerOpen()} color="inherit" aria-label="menu">
            <FontIcon iconName="GlobalNavButton" />
          </IconButton>
          <AppTitle locData={locData} />
        </GridColumn>
        <GridColumn sm={3} md={4} lg={3}>
          <TopNavLinks getNavMenuItems={getNavMenuItems} />
        </GridColumn>
        <GridColumn sm={3} md={2} lg={2}>
          <LanguageSelection selectedLocCode={selectedLocCode} localizationService={localizationService} />
        </GridColumn>
        <GridColumn sm={3} md={2} lg={2}>
          <AuthButton
            locData={locData}
            userSignedIn={props.userSignedIn}
            handleSignOutClick={handleSignOutClick}
            handleInitiateSignInClick={handleInitiateSignInClick}
          />
          <AuthDialog
            locData={locData}
            open={signInDialogOpen}
            handleSignIn={handleSignInClick}
            handleSignInCancel={() => setSignInDialogOpen(false)}
          />
        </GridColumn>
      </GridRow>
      <Panel
        isLightDismiss
        type={PanelType.customNear}
        customWidth={sideMenuWidth + 'px'}
        isOpen={openNavigation}
        onDismiss={closeDrawer}
      >
        <Stack>
          <SideNavLinks getNavMenuItems={getNavMenuItems} />
        </Stack>
      </Panel>
    </Grid>
  );
}

export default withRouter(Navigation);
