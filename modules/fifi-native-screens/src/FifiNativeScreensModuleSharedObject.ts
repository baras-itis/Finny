import { SharedObject, useReleasingSharedObject } from 'expo-modules-core';

import FifiNativeScreensModule from './FifiNativeScreensModule';

export declare class FifiNativeScreensModuleSharedObject extends SharedObject {
  count: number;
}

/**
 * Creates a new FifiNativeScreensModuleSharedObject instance.
 * You are responsible for releasing it from memory by calling `release()` when done.
 */
export function createFifiNativeScreensModuleSharedObject(): FifiNativeScreensModuleSharedObject {
  return new FifiNativeScreensModule.FifiNativeScreensModuleSharedObject();
}

/**
 * A hook that creates a FifiNativeScreensModuleSharedObject instance and automatically
 * releases it when the component unmounts.
 */
export function useFifiNativeScreensModuleSharedObject(): FifiNativeScreensModuleSharedObject {
  return useReleasingSharedObject(() => new FifiNativeScreensModule.FifiNativeScreensModuleSharedObject(), []);
}
