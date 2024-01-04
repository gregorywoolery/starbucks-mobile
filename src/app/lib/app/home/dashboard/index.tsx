import { View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React from 'react';
import Colors from '../../../../config/colors.config';
import MainScreenView from '../../../../components/MainScreenView/MainScreenView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonVerticalSpacer from '../../../../components/Spacers/CommonVerticalSpacer';
import CustomScaffold from '../../../../components/CustomScaffold/CustomScaffold';
import AppBar from '../../../../components/AppBar';
import Text from '../../../../components/Text';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles/main.styles';
import MenuItem from '../../../../components/MenuItem';
import { PAGE_HEIGHT } from '../../../../../entities/constants/dimensions';
import useDashboard from './useDashboard';
import { useNavigation } from '@react-navigation/native';

export default function HomeMain() {
  const navigation = useNavigation<any>();

  const {
    starbucksSearchOptions,
    menuItems
  } = useDashboard();

  return (
    <MainScreenView>
      <CustomScaffold
        customAppBar={
          <AppBar
            showActions={true}
            title='Hey, Zahni'
          />
        }
        scrollEnabled={false}
      >
        <View>
          <View style={{
            paddingHorizontal: 20,
          }}>
            <CommonVerticalSpacer height={8} />

            <View style={styles.headerSecondaryTextContainer}>
              <Text
                style={{
                  color: Colors.teritiaryGrey,
                  fontFamily: 'Poppins-SemiBold',
                }}
              >Let&#39;s find your morning taste</Text>
            </View>

            <CommonVerticalSpacer height={32} />

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <TextInput
                style={styles.searchBar}
                placeholder='Find your favorite'
                placeholderTextColor={Colors.teritiaryGrey}
              />

              <TouchableOpacity style={{
                position: 'absolute',
                left: 18
              }}>
                <Ionicons
                  name="search"
                  size={18}
                  color={Colors.teritiaryGrey}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{
                position: 'absolute',
                right: 18
              }}>
                <Ionicons
                  name="options-outline"
                  size={18}
                  color={Colors.primaryGreen}
                />
              </TouchableOpacity>
            </View>
          </View>

          <CommonVerticalSpacer height={24} />

          <View style={{
            paddingBottom: 12
          }}>
            <FlatList
              data={starbucksSearchOptions}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Text
                  key={item}
                  style={styles.optionTextSelector}
                >{item}</Text>
              )}
              horizontal={true}
            />
          </View>

          <View>
            <ScrollView
              bounces={true}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.container}
              horizontal={false}
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  menuItem={item}
                  navigation={navigation}
                />
              ))}

              <View style={{
                height: PAGE_HEIGHT - 200,
              }}>
              </View>
            </ScrollView>
          </View>
        </View>
      </CustomScaffold>
    </MainScreenView>
  );
}