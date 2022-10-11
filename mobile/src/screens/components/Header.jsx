import {Text, View, Image} from 'react-native';
import {Icon} from '@rneui/themed';
export default function Header({title}) {
  return (
    <View className="" style={{height:80}}>
      <View className="px-4 justify-between flex flex-row w-full">
        <Text className="font-bold text-3xl w-3/4 my-auto text-emerald-600">{title}</Text>
        <View className="flex flex-row justify-end items-center w-1/4">
          <Image
            className="h-16 w-16 rounded-full"
            source={require('../../assets/pp.png')}
          />
        </View>
      </View>
    </View>
  );
}
