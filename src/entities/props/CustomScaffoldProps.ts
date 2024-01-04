/* eslint-disable semi */

import { ReactNode } from 'react';
import { ColorValue } from 'react-native';

export type CustomScaffoldProps = {
  children: ReactNode;
  backgroundColor?: ColorValue;
  customAppBar: ReactNode;
  headerContent?: ReactNode;
  scrollEnabled?: boolean;
  screenBottomButton?: ReactNode;
}
