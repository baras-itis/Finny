import { NativeModule, requireNativeModule } from 'expo';

import { FifiNativeScreensModuleEvents } from './FifiNativeScreens.types';
import type { FifiNativeScreensModuleSharedObject } from './FifiNativeScreensModuleSharedObject';

declare class FifiNativeScreensModule extends NativeModule<FifiNativeScreensModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  FifiNativeScreensModuleSharedObject: typeof FifiNativeScreensModuleSharedObject;
}

export default requireNativeModule<FifiNativeScreensModule>('FifiNativeScreens');
