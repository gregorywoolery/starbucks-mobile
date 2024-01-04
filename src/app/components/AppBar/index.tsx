import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../config/colors.config';
import Text from '../Text';
import { ThemeContext } from '../../../context/ThemeContext';
import { ThemeContextType } from '../../../entities/props/ThemeContextType';
import { ColorSchemeType } from '../../../entities/models/ColorSchemeType';
import CartIcon from '../CartIcon';

type AppBarProps = {
  title?: string;
  navigation?: any;
  showBackButton?: boolean;
  showActions?: boolean;
  backButtonColor?: string;
  color?: string;
}


export default function AppBar({
  title,
  navigation,
  showBackButton,
  showActions,
  backButtonColor,
  color
}: AppBarProps) {

  const {
    theme,
  }: ThemeContextType = React.useContext(ThemeContext);

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 24
    }}>
      <View
        style={{
          width: title && !showBackButton ? 200 : 74
        }}
      >
        {
          showBackButton ? (
            <TouchableOpacity
              style={{
                height: 25,
                width: 25
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons
                name="arrow-back-outline"
                size={20}
                color={backButtonColor ? backButtonColor : theme === ColorSchemeType.light ? Colors.teritiaryGreen : Colors.white}
              />
            </TouchableOpacity>
          ) : (
            title && (
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Poppins-SemiBold',
                    color: color ?? theme === ColorSchemeType.light ? Colors.primaryGreen : Colors.white,
                  }}>{title}</Text>
              </View>
            )
          )
        }
      </View>
      {
        title && showBackButton && (
          <View>
            <Text style={{
              fontSize: 16,
              color: color ?? theme === ColorSchemeType.light ? Colors.primaryGreen : Colors.white,
            }}>{title}</Text>
          </View>
        )
      }

      <View style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        width: 74,
        marginRight: 12
      }}>
        {
          showActions && (
            <CartIcon
              customColor={backButtonColor}
              theme={theme}
            />
          )}
      </View>
    </View>
  );
}