import React from 'react';
import { PrimaryButton, DefaultButton, Dialog, DialogType, DialogFooter } from '@fluentui/react/lib';

function SignInDialog(props) {
  const dialogContentProps = {
    type: DialogType.normal,
    title: props.locData.sign,
    closeButtonAriaLabel: props.locData.cancel,
    subText: props.locData.signindescription
  };

  const handleCancelClose = () => {
    props.handleSignInCancel(false);
  };

  const handleSignInClose = () => {
    props.handleSignIn();
  };

  return (
    <div>
      <Dialog open={props.open} dialogContentProps={dialogContentProps}>
        {props.content}
        <DialogFooter>
          <DefaultButton onClick={() => handleCancelClose(false)}>{props.locData.cancel}</DefaultButton>
          <PrimaryButton onClick={() => handleSignInClose(true)} color="secondary" autoFocus>
            {props.locData.signin}
          </PrimaryButton>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default SignInDialog;
