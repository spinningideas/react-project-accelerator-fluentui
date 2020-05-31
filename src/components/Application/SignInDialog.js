import React from 'react';
import { PrimaryButton, DefaultButton, Dialog, DialogType, DialogFooter } from '@fluentui/react/lib';

function SignInDialog(props) {
  const dialogContentProps = {
    type: DialogType.largeHeader,
    closeButtonAriaLabel: props.locData.cancel,
    title: props.locData.signin,
    subText: props.locData.signindescription
  };

  const handleCancelClose = () => {
    props.handleSignInCancel(false);
  };

  const handleSignInClose = () => {
    props.handleSignIn();
  };

  return (
    <Dialog hidden={!props.open} onDismiss={() => handleCancelClose()} dialogContentProps={dialogContentProps}>
      <DialogFooter>
        <DefaultButton onClick={() => handleCancelClose()}>{props.locData.cancel}</DefaultButton>
        <PrimaryButton onClick={() => handleSignInClose(true)} color="secondary" autoFocus>
          {props.locData.signin}
        </PrimaryButton>
      </DialogFooter>
    </Dialog>
  );
}

export default SignInDialog;
