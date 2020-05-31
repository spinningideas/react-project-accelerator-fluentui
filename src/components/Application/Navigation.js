import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// UI Kit Components
import {
  DefaultButton,
	IconButton,
	CommandBar,
  CommandBarButton,
  Stack,
  Dropdown,
  Panel,
  PanelType,
  FontIcon,
  Text
} from '@fluentui/react/lib';

// Services
import LocalizationService from 'services/LocalizationService';
import NavigationService from 'services/NavigationService';
// Components
import { Grid, GridRow, GridColumn } from 'components/Shared/Grid';
import SignInDialog from 'components/Application/SignInDialog';

/* 
TODO: pull in or implement navbar? https://github.com/microsoft/fluentui/issues/13409
*/

const sideMenuWidth = 245;

const languageDropdownStyles = { dropdown: { width: 100 } };

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

  const languageSelectionMakeChoice = (evnt, item) => {
    localizationService.setUserLocale(item.key);
    window.location.reload();
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

  const appTitle = () => {
    //if (isWidthUp('sm', props.width)) {
    //  return <>{locData.apptitle}</>;
    //}
    return <>RPA</>;
  };

  const navBarStyles = {
    borderBottom: '1px solid #eeeeee',
    padding: '5px',
    height: '45px'
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
	
	const TopNavMenu = () => {
		return <CommandBar
			items={navMenuItems}
		/>    
  };

  const NavMenu = () => {
    const items = navMenuItems.map((item) => (
			<CommandBarButton
				className="p-3 full-width text-left"
				iconProps={item.iconProps}
				text={item.text}
				onClick={item.onClick}
			/>
    ));
    return items;
  };

  return (
    <Grid>
      <GridRow styles={navBarStyles}>
        <GridColumn sm={1} md={1} lg={1}>
          <IconButton onClick={() => toggleDrawerOpen()} color="inherit" aria-label="menu">
            <FontIcon iconName="GlobalNavButton" />
          </IconButton>
        </GridColumn>
        <GridColumn sm={2} md={2} lg={2}>
          <Text variant="xLarge">{appTitle()}</Text>					
        </GridColumn>
				<GridColumn sm={3} md={4} lg={5}>					
					<TopNavMenu />				
        </GridColumn>
        <GridColumn sm={2} md={2} lg={1}>			
          <Dropdown
            id="language-menu"
            styles={languageDropdownStyles}
            selectedKey={selectedLocCode ? selectedLocCode : undefined}
            options={languageOptions}
            onChange={languageSelectionMakeChoice}
          ></Dropdown>
        </GridColumn>
        <GridColumn sm={2} md={1} lg={1}>
          {props.userSignedIn && <DefaultButton onClick={() => handleSignOutClick()}>{locData.signout}</DefaultButton>}
          {!props.userSignedIn && (
            <DefaultButton onClick={() => handleInitiateSignInClick()}>{locData.signin}</DefaultButton>
          )}
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
          <NavMenu />
        </Stack>
      </Panel>
      <SignInDialog
        locData={locData}
        open={signInDialogOpen}
        handleSignIn={handleSignInClick}
        handleSignInCancel={() => setSignInDialogOpen(false)}
      />
    </Grid>
  );
}

export default withRouter(Navigation);
