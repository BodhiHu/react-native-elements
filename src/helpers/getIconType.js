const customIcons = {};

export const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};

export default type => {
  switch (type) {
    case 'zocial':
      return require('react-native-vector-icons/Zocial');
    case 'octicon':
      return require('react-native-vector-icons/Octicons');
    case 'material':
      return require('react-native-vector-icons/MaterialIcons');
    case 'material-community':
      return require('react-native-vector-icons/MaterialCommunityIcons');
    case 'ionicon':
      return require('react-native-vector-icons/Ionicons');
    case 'foundation':
      return require('react-native-vector-icons/Foundation');
    case 'evilicon':
      return require('react-native-vector-icons/EvilIcons');
    case 'entypo':
      return require('react-native-vector-icons/Entypo');
    case 'font-awesome':
      return require('react-native-vector-icons/FontAwesome');
    case 'simple-line-icon':
      return require('react-native-vector-icons/SimpleLineIcons');
    case 'feather':
      return require('react-native-vector-icons/Feather');
    default:
      if (customIcons.hasOwnProperty(type)) {
        return customIcons[type];
      }
      return MaterialIcon;
  }
};
