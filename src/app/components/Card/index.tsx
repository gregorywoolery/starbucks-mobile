import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CommonVerticalSpacer from '../Spacers/CommonVerticalSpacer';
import View from '../View';
import Text from '../Text';
import styles from './styles/card.styles';

export default function Card() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.white,
          fontFamily: 'Poppins-Bold',
        }}
      >STARBUCKS</Text>

      <CommonVerticalSpacer height={32} />

      <View style={{
        backgroundColor: 'inherit'
      }}>
        <View style={styles.cardContentTop}>
          <Text
            style={styles.cardNumberText}
          >**** **** **** </Text>
          <Text
            style={{
              ...styles.mainCardText,
              fontFamily: 'Poppins-Bold',
            }}
          >2087</Text>
        </View>

        <CommonVerticalSpacer height={4} />

        <View style={{
          backgroundColor: 'inherit'
        }}>
          <Text style={{
            color: Colors.white,
            fontSize: 10,
          }}>
              Balance
          </Text>
          <Text style={{
            ...styles.mainCardText,
            fontFamily: 'Poppins-SemiBold',
          }}>
              $ 3,550.62
          </Text>
        </View>
      </View>
    </View>
  );
}