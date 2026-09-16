import * as React from 'react';

import { FifiNativeScreensViewProps } from './FifiNativeScreens.types';

export default function FifiNativeScreensView(props: FifiNativeScreensViewProps) {
  return (
    <div
      style={{
        backgroundColor: '#aabbcc',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => props.onTap({ nativeEvent: {} })}>
      <span>FifiNativeScreens - native view</span>
      <span>Tap the view to emit a view event</span>
    </div>
  );
}
