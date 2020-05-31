import React from 'react';
import { DefaultButton } from '@fluentui/react/lib';

const AuthButton = (props) => {
  if (props.userSignedIn) {
    return <DefaultButton onClick={() => props.handleSignOutClick()}>{props.locData.signout}</DefaultButton>;
  } else {
    return <DefaultButton onClick={() => props.handleInitiateSignInClick()}>{props.locData.signin}</DefaultButton>;
  }
};

export default AuthButton;
