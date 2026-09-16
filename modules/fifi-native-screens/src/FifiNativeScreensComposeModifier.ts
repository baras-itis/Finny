import { createModifier, type ModifierConfig } from '@expo/ui/jetpack-compose/modifiers';

export const fifiNativeScreensComposeModifier = (params: {
  color?: number;
  width?: number;
  cornerRadius?: number;
}): ModifierConfig => createModifier('fifiNativeScreensComposeModifier', params);
