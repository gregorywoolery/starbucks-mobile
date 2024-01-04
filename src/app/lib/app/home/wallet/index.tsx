import React from 'react';
import View from '../../../../components/View';
import Text from '../../../../components/Text';
import AppBar from '../../../../components/AppBar';
import CustomScaffold from '../../../../components/CustomScaffold/CustomScaffold';
import MainScreenView from '../../../../components/MainScreenView/MainScreenView';
import CommonVerticalSpacer from '../../../../components/Spacers/CommonVerticalSpacer';
import Colors from '../../../../config/colors.config';
import { ImageBackground, TouchableOpacity } from 'react-native';
import giftCardImage from '../../../../../assets/photos/giftcard.jpg';
import Logo from '../../../../components/Logo';
import useWallet from './useWallet';
import styles from './styles/wallet.styles';
import Card from '../../../../components/Card';

export default function Wallet() {
  const {
    bubbleOptions
  } = useWallet();

  return (
    <MainScreenView>
      <CustomScaffold
        customAppBar={
          <AppBar
            showActions={true}
            title='Starbie Wallet'
          />
        }
      >
        <View style={{
          paddingHorizontal: 24,
        }}>
          <CommonVerticalSpacer height={32} />
          <View>
            <Text style={{
              fontFamily: 'Poppins-SemiBold'
            }}>
              Startbie Card
            </Text>

            <Text style={{
              color: Colors.teritiaryGrey
            }}>
              Never miss a sip with your starbie card
            </Text>
          </View>

          <CommonVerticalSpacer height={24} />

          <View style={styles.optionContainer}>
            {bubbleOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <CommonVerticalSpacer height={16} />

          <Card />

          <CommonVerticalSpacer height={40} />

          <View>
            <Text style={{
              fontSize: 14,
              fontFamily: 'Poppins-SemiBold'
            }}>
              Gift Cards
            </Text>

            <CommonVerticalSpacer height={17} />

            <ImageBackground
              resizeMode="cover"
              imageStyle={{
                borderRadius: 10,
              }}
              style={styles.cardImageContainer}
              source={giftCardImage}
            >
              <Logo />
            </ImageBackground>
          </View>
        </View>
      </CustomScaffold>
    </MainScreenView>
  );
}