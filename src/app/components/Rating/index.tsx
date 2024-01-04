import { View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../config/colors.config';
import CommonHorizontalSpacer from '../Spacers/CommonHorizontalSpacer';

type RatingProps = {
  rating: number;
}

export default function Rating({
  rating
}: RatingProps) {
  return (
    <View style={{
      flexDirection: 'row'
    }}>
      {
        Array(rating).fill(null).map((_, rate) => (
          <React.Fragment key={rate}>
            <Ionicons
              name={rate < rating ? 'star' : 'star-outline'}
              size={18}
              color={Colors.primaryOrange}
            />
            <CommonHorizontalSpacer width={4} />
          </React.Fragment>
        ))
      }
    </View>
  );
}