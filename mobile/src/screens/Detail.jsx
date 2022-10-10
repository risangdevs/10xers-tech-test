import {Text, View} from 'react-native';

export default function Detail({route, navigation}) {
  const {name} = route.params;
  return (
    <View className="my-auto mx-auto">
      <Text>{name}</Text>
    </View>
  );
}
