import {Text, View, Image, Button, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Footer() {
  return (
    <View className="" style={{height: 80}}>
      <View className="border-t-2 border-slate-300 flex flex-row justify-center py-4">
        <View className="p-2">
          {/* <Icon name="rocket" size={30} color="#900" />
          <Text className="font-bold mt-2">Tasks</Text>
           */}
           <Pressable className="rounded-xl bg-emerald-200 w-20 h-10 justify-center items-center"><Text>Collection</Text></Pressable>
        </View>
        {/* <View className="p-2">
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
        </View> */}
      </View>
    </View>
  );
}
