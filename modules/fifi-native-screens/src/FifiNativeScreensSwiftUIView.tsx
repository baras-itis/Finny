import { requireNativeView } from 'expo';
import { type CommonViewModifierProps } from '@expo/ui/swift-ui';
import { createViewModifierEventListener } from '@expo/ui/swift-ui/modifiers';
import * as React from 'react';

export interface FifiNativeScreensSwiftUIViewProps extends CommonViewModifierProps {
  title: string;
  children?: React.ReactNode;
}

const NativeFifiNativeScreensSwiftUIView = requireNativeView<FifiNativeScreensSwiftUIViewProps>(
  'FifiNativeScreens',
  'FifiNativeScreensSwiftUIView'
);

export default function FifiNativeScreensSwiftUIView({
  modifiers,
  ...rest
}: FifiNativeScreensSwiftUIViewProps) {
  return (
    <NativeFifiNativeScreensSwiftUIView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      {...rest}
    />
  );
}
