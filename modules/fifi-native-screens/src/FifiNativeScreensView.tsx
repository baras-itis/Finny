import { requireNativeView } from 'expo';
import * as React from 'react';

import { FifiNativeScreensViewProps } from './FifiNativeScreens.types';

const NativeView: React.ComponentType<FifiNativeScreensViewProps> = requireNativeView('FifiNativeScreens');

export default function FifiNativeScreensView(props: FifiNativeScreensViewProps) {
  return <NativeView {...props} />;
}
