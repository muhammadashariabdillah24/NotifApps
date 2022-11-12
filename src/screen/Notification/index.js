import {View, Button} from 'react-native';
import React, { useState } from 'react';
import notifee from '@notifee/react-native';


const Notif = () => {
  const [isState, setIsState] = useState(false);

  const onDisplayNotification = async () => {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: '1',
      name: 'Ashari Channel',
    });

    if (isState) {
      return await notifee.displayNotification({
        title: 'Ayam Bakar',
        body: 'Ayam bakar di bekasi emang paling enak',
        android: {
          channelId,
          smallIcon: 'ic_launcher',
          pressAction: {
            id: '1',
          },
        },
      });
    }
    await notifee.displayNotification({
      title: 'Ayam Geprek',
      body: 'Ayam geprek di bekasi emang paling enak',
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        pressAction: {
          id: '1',
        },
      },
    });

    setIsState(true)

  };

  const handleRemoveNotification = () => {
    
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Munculkan" onPress={onDisplayNotification} />
    </View>
  );
};

export default Notif;
