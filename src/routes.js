import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Tabs from './components/Tabs';

export default createAppContainer(
  createSwitchNavigator({
    Tabs,
  })
);