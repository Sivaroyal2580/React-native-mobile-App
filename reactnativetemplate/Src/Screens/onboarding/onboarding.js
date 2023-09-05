import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HOME} from '../../Assets/icons';
import {WELCOME} from '../../config/onboard';

export default function Onboard({navigation}) {
  const Done = ({...props}) => (
    <TouchableOpacity {...props}>
      <Text style={{fontSize: 16, marginHorizontal: 20}}>Done</Text>
    </TouchableOpacity>
  );
  const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'blue' : 'black';
    return (
      <View
        style={{
          width: 10,
          height: 6,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };
  return (
    <Onboarding
      onSkip={() => navigation.replace('tabs')}
      //To handle the navigation to the Homepage after Done is clicked
      onDone={() => navigation.replace('tabs')}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../../Assets/images/OA1.png')}
              style={{width: 250, height: 250}}
            />
          ),
          title: WELCOME,
          subtitle: 'Welcome to the first slide of the Onboarding Swiper.',
        },
        {
          backgroundColor: '#556B2F',
          image: (
            <Image
              source={require('../../Assets/images/OA2.png')}
              style={{width: 250, height: 250}}
            />
          ),
          title: WELCOME,
          subtitle: 'Welcome to the first slide of the Onboarding Swiper.',
        },
        {
          backgroundColor: '#FAF0E6',
          image: (
            <Image
              source={require('../../Assets/images/OA3.png')}
              style={{width: 250, height: 250}}
            />
          ),
          title: WELCOME,
          subtitle: 'Welcome to the first slide of the Onboarding Swiper.',
        },
      ]}
    />
  );
}
