import React from 'react';
import Text from '../../../components/Text';
import View from '../../../components/View';
import AppBar from '../../../components/AppBar';
import MainScreenView from '../../../components/MainScreenView/MainScreenView';
import Colors from '../../../config/colors.config';
import CommonVerticalSpacer from '../../../components/Spacers/CommonVerticalSpacer';
import Rating from '../../../components/Rating';
import CupSelectionButton from '../../../components/CupSelectionButton';
import Button from '../../../components/Buttons';
import ItemSelectionAction from '../../../components/ItemSelectionAction';
import ImageCustomScaffold from '../../../components/CustomScaffold/ImageCustomScaffold';
import { Image } from 'react-native';
import Images from '../../../config/images.config';
import styles from './styles/item-lobby.styles';

export default function ItemLobby({ navigation }) {
  return (
    <MainScreenView style='light'>
      <ImageCustomScaffold 
        customAppBar={
          <AppBar
            backButtonColor={Colors.white}
            navigation={navigation}
            showActions={true}
            showBackButton={true}
          />
        }
        scrollEnabled={false}
      >
        <View style={styles.mainContainer}>
          <View style={styles.imagesContainer}>
            <Image
              source={Images.drink_cut_1}
              resizeMode='contain'
              style={{
                width: 170,
                height: 290,
              }}
            />
            <Image
              source={Images.drink_cut_2}
              resizeMode='contain'
              style={{
                width: 130,
                height: 220,
              }}
            />
          </View>

          <View style={{
            backgroundColor: 'inherit'
          }}>
            <Text style={styles.mainText}>
                Love Bon Bon Frappuccio
            </Text>

            <CommonVerticalSpacer height={8} />

            <Rating
              rating={4}
            />

            <CommonVerticalSpacer height={16} />

            <Text style={{
              color: Colors.teritiaryGrey,
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. t amet, cons etur adipiscing elit. t amet, cons ectetur adipiscing elit. 
            </Text>

            <CommonVerticalSpacer height={32} />

            <Text style={{
              fontFamily: 'Poppins-SemiBold',
              color: Colors.teritiaryGrey,
            }}>
                Size Options
            </Text>

            <CommonVerticalSpacer height={8} />

            <View style={styles.buttonsContainer}>
              <CupSelectionButton
                name={'Tall'}
                isSelected={true}
              />

              <CupSelectionButton
                name={'Grande'}
                isSelected={false}
              />

              <CupSelectionButton
                name={'Venti'}
                isSelected={false}
              />
            </View>

            <CommonVerticalSpacer height={32} />

            <ItemSelectionAction />

            <CommonVerticalSpacer height={32} />

            <Button
              title='Add to Cart'
              action={() => {}}
              isValid={true}
            />
            <CommonVerticalSpacer height={24} />
          </View>
        </View>
      </ImageCustomScaffold>
    </MainScreenView>
      
  );
}