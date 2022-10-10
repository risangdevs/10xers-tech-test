import {Text, View, Image} from 'react-native';
import {Icon} from '@rneui/themed';
export default function Footer() {
  return (
    <View className="" style={{height: 80}}>
      <View className="border-t-2 border-slate-300 flex flex-row justify-center py-4">
        <View className="p-2">
          <Icon name="server" type="feather" />
          <Text className="font-bold mt-2">Tasks</Text>
        </View>
        <View className="p-2">
          <Icon name="clipboard-play" type="material-community" />
          <Text className="font-bold mt-2">Projects</Text>
        </View>
        <View className="p-2">
          <Icon name="chat" type="entypo" />
          <Text className="font-bold mt-2">Chats</Text>
        </View>
        <View className="p-2">
          <Icon name="team" type="ant-design" />
          <Text className="font-bold mt-2">Team</Text>
        </View>
        <View className="p-2">
          <Icon name="account" type="material-community" />
          <Text className="font-bold mt-2">Account</Text>
        </View>
      </View>
    </View>
  );
}
