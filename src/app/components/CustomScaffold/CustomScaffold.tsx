import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../config/colors.config';
import { CustomScaffoldProps } from '../../../entities/props/CustomScaffoldProps';
import { ThemeContextType } from '../../../entities/props/ThemeContextType';
import { ThemeContext } from '../../../context/ThemeContext';
import { ColorSchemeType } from '../../../entities/models/ColorSchemeType';
import View from '../View';

export default function CustomScaffold({
  children,
  backgroundColor,
  customAppBar,
  headerContent,
  scrollEnabled,
  screenBottomButton
}: CustomScaffoldProps) {
  const {
    theme
  }: ThemeContextType = React.useContext(ThemeContext);

  return (
    <>
      <SafeAreaView
        edges={['right', 'left', 'top']}
        style={{
          flex: 1,
          backgroundColor: backgroundColor ?? theme === ColorSchemeType.light ? Colors.teritiaryCyan : Colors.teritiaryGreen,
        }}>
        {
          customAppBar
        }
        {
          headerContent
        }
        <KeyboardAwareScrollView
          scrollEnabled={scrollEnabled ?? true}
          showsVerticalScrollIndicator={false}
          bounces={true}
          contentContainerStyle={{
            flex: 1
          }}
        >
          {children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
      {
        screenBottomButton && ( 
          <View style={{
            marginHorizontal: 20,
            marginBottom: 24,
          }}>
            {
              screenBottomButton
            }
          </View>
        )
      }
    </>
  );
}
