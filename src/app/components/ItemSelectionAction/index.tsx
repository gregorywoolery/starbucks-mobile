import React, { useEffect } from 'react';
import View from '../View';
import Text from '../Text';
import { TouchableOpacity } from 'react-native';
import Colors from '../../config/colors.config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/item-selection-action.styles';

export default function ItemSelectionAction() {
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(4.50);

  const adjustPrice = () => {
    const newPrice = quantity * 4.50;
    setPrice(newPrice);
  };

  useEffect(() => {
    adjustPrice();  
  }, [quantity]);
  
  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          onPress={() => {
            if (quantity >= 1) {
              setQuantity(quantity - 1);
            }
          }}

          style={styles.actionButton}>
          <Ionicons 
            name={'ios-remove'}
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>

        <Text>{quantity}</Text>
 
        <TouchableOpacity 
          onPress={() => {
            setQuantity(quantity + 1);
          }}

          style={styles.actionButton}>
          <Ionicons 
            name={'ios-add'}
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>

      <Text 
        style={styles.largeTextContent}>
        $ { price.toFixed(2) } 
      </Text>
    </View>

  );
}