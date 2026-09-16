import { createModifier, type ModifierConfig } from '@expo/ui/swift-ui/modifiers';

export const fifiNativeScreensSwiftUIModifier = (params: {
  color?: string;
  width?: number;
  cornerRadius?: number;
}): ModifierConfig => createModifier('fifiNativeScreensSwiftUIModifier', params);
