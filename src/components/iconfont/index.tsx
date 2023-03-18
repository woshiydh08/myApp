/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'icon-shouye-zhihui' | 'icon-home' | 'icon-function' | 'icon-message' | 'icon-mine';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
