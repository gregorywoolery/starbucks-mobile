import { Dimensions } from 'react-native';
import Rect from '../models/Rect';

const { width: windowWidth } = Dimensions.get('window');

export const PREVIEW_SIZE = 370;
export const PREVIEW_RECT: Rect = {
  minX: (windowWidth - PREVIEW_SIZE) / 2,
  minY: 180,
  width: PREVIEW_SIZE,
  height: PREVIEW_SIZE
};