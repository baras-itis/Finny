import { registerWebModule, NativeModule } from 'expo';

import { FifiNativeScreensModuleEvents } from './FifiNativeScreens.types';

class FifiNativeScreensModule extends NativeModule<FifiNativeScreensModuleEvents> {
  PI = Math.PI;

  hello() {
    return 'Hello world! 👋';
  }

  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
}

export default registerWebModule(FifiNativeScreensModule, 'FifiNativeScreensModule');
