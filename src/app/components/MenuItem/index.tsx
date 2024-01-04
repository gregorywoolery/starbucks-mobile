import React from 'react';
import View from '../View';
import Text from '../Text';
import { ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../../config/colors.config';
import { MenuItemProps } from '../../../entities/props/MenuItemProps';
import CommonHorizontalSpacer from '../Spacers/CommonHorizontalSpacer';
import { Screens } from '../../config/screens.enum';
import FavouriteButton from '../Buttons/FavouriteButton';
import styles from './styles/menu-item.styles';

export default function MenuItem({
  navigation,
  menuItem
}: { navigation, menuItem: MenuItemProps }) {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.push(Screens.ITEM_LOBBY_SCREEN);
      }}
    >
      <ImageBackground
        source={menuItem.image}
        resizeMode="cover"
        style={styles.imageContent}
        imageStyle={{
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
      >
        <FavouriteButton
          favorite={
            menuItem.isFavorite
          } />
      </ImageBackground>

      <View style={styles.content}>
        <Text style={{
          fontFamily: 'Poppins-SemiBold',
          color: Colors.teritiaryGrey,
        }}>{menuItem.name}</Text>

        <CommonHorizontalSpacer width={4} />

        <Text style={{
          fontFamily: 'Poppins-SemiBold',
          color: Colors.primaryGreen,
        }}
        >${menuItem.price}</Text>
      </View>
    </TouchableOpacity>
  );
}