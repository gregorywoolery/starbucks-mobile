import { MenuItemProps } from '../../../../../entities/props/MenuItemProps';
import Images from '../../../../config/images.config';

const useDashboard = () => {
  const starbucksSearchOptions = [
    'Cappuccino',
    'Latte',
    'Mocha',
    'Espresso',
    'Macchiato',
    'Americano',
    'Flat White',
    'Dessert'
  ];
    
  const menuItems: MenuItemProps[] = [
    {
      'name': 'Cappuccino',
      'price': 4.99,
      'isFavorite': true,
      'image': Images.drink1
    },
    {
      'name': 'Espresso',
      'price': 3.99,
      'isFavorite': false,
      'image': Images.drink2
    },
    {
      'name': 'Latte',
      'price': 5.49,
      'isFavorite': true,
      'image': Images.drink3
    },
    {
      'name': 'Mocha',
      'price': 4.79,
      'isFavorite': true,
      'image': Images.drink4
    },
    {
      'name': 'Americano',
      'price': 4.29,
      'isFavorite': false,
      'image': Images.drink5
    },
  ];

  return {
    starbucksSearchOptions,
    menuItems
  };

};

export default useDashboard;