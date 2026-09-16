import { requireNativeView } from 'expo';
import { type PrimitiveBaseProps } from '@expo/ui/jetpack-compose';
import { createViewModifierEventListener } from '@expo/ui/jetpack-compose/modifiers';
import * as React from 'react';

export interface FifiNativeScreensComposeViewProps extends PrimitiveBaseProps {
  title: string;
  children?: React.ReactNode;
}

const NativeFifiNativeScreensComposeView = requireNativeView<FifiNativeScreensComposeViewProps>(
  'FifiNativeScreens',
  'FifiNativeScreensComposeView'
);

export default function FifiNativeScreensComposeView({
  modifiers,
  ...rest
}: FifiNativeScreensComposeViewProps) {
  return (
    <NativeFifiNativeScreensComposeView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      {...rest}
    />
  );
}
