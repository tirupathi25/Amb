import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/json_files/selection.json';
const LinerIcon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

export default ({ name, ...props }) => (
  <LinerIcon
    name={`${name}`}
    {...props}
  />
);