import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Stack } from '@fluentui/react/lib/Stack';
// Routes
import routes from 'routes';
// Services
import AuthService from 'services/AuthService';
// Components
import Navigation from 'components/Application/Navigation';

function Application(props) {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const authService = AuthService();
  const refLocation = useRef(props.location);

  useEffect(() => {
    let userHasSignedIn = authService.userHasSignedIn();
    setUserSignedIn(userHasSignedIn);
  }, [userSignedIn]);

  useEffect(() => {
    // Route Change Detection
    if (
      refLocation &&
      refLocation.current &&
      props.location &&
      props.location.pathname &&
      refLocation.current !== props.location.pathname
    ) {
      refLocation.current = props.location.pathname;
      // Can track page views here via TBD servvice: analyticsService.trackPageView(props.location.pathname);
      window.scrollTo(0, 0);
    }
  }, [props.location.key]);

  const handleSignIn = () => {
    authService.signIn();
    if (window && window.location) {
      window.location.reload(true);
    }
  };

  const handleSignOut = () => {
    authService.signOut();
    if (window && window.location) {
      window.location.reload(true);
    }
  };

  return (
    <Stack>
      <Stack.Item>
        <Navigation userSignedIn={userSignedIn} handleSignIn={handleSignIn} handleSignOut={handleSignOut} />
      </Stack.Item>
      <Stack.Item>{routes}</Stack.Item>
    </Stack>
  );
}

export default withRouter(Application);
