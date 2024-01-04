import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../config/colors.config';

export default function FavouriteButton({ favorite }) {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(favorite);

  return (
    <TouchableOpacity 
      onPress={() => {
        setIsFavorite(!isFavorite);
      }}
    >
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={20}
        color={Colors.googleRed}
      />
    </TouchableOpacity>
  );
}