import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CustomScaffoldProps } from '../../../entities/props/CustomScaffoldProps';
import View from '../View';
import { ImageBackground } from 'react-native';
import Images from '../../config/images.config';

export default function ImageCustomScaffold({
  children,
  customAppBar,
  headerContent,
  scrollEnabled,
  screenBottomButton
}: CustomScaffoldProps) {
  return (
    <>
      <ImageBackground
        source={Images.background}
        resizeMode="cover"   
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SafeAreaView
          edges={['right', 'left', 'top']}
          style={{
            flex: 1,
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
      </ImageBackground>
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
