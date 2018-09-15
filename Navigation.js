import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from './Home';
import SettingsScreen from './Settings';
import Profile from './Profile';
import UserManual from './UserManual';

const SettingStack = createStackNavigator({
  Setting: SettingsScreen,
  Profile: Profile,
  UserManual: UserManual,
});

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingStack,
}, {
  lazy: true,
});