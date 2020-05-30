import React from 'react';
import { Spinner, SpinnerSize } from '@fluentui/react/lib';

export default function LoadingIndicator(props) {
  if (props.display === undefined || props.display === false) {
    return <></>;
  }
  return <Spinner size={SpinnerSize.large} />;
}
