/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import notifee, { EventType } from '@notifee/react-native';
import {name as appName} from './app.json';

notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail

    console.log('NOTIFICATION : ' + notification);
    console.log('PRESS ACTION : ' + pressAction);

    if (type === EventType.ACTION_PRESS) {
        console.log('PRESSED');
    }

})

AppRegistry.registerComponent(appName, () => App);
