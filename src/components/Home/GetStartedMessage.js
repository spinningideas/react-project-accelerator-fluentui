import React from 'react';
import { Stack } from '@fluentui/react/lib/Stack';

function GetStartedMessage(props) {
  if (props.displayGetStarted === false) {
    return <></>;
  }
  return (
    <Stack spacing={0}>
      <Stack.Item xs={12}>
        <p className="whitetext">{props.locData.getstartedmessage}</p>
      </Stack.Item>
    </Stack>
  );
}

export default GetStartedMessage;
