import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Detail({route, navigation}) {
  const {name, token} = route.params;
  const [detail, setDetail] = useState({});
  const [stat, setStat] = useState([]);
  const [tokens, setTokens] = useState([]);
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = async () => {
    try {
      setTokens(token);
      const {data} = await axios.get(
        'https://api-generator.retool.com/j3Iz08/collections',
      );
      let id = null;
      for (let i = 0; i < data.length; i++) {
        if (name.join('') === data[i].name) {
          id = data[i].id;
        }
      }
      const detail = await axios.get(
        `https://api-generator.retool.com/j3Iz08/collections/${id}`,
      );
      setDetail(detail.data);

      const stat = await axios.get(
        `https://api-generator.retool.com/ELI42D/collection_stats?collection_id=${id}`,
      );
      setStat(stat.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{top: top}}>
      <Header title={name} />
      <ScrollView>
        <View className="m-2">
          <ImageBackground
            className="w-full h-40 justify-end items-center"
            source={{uri: detail.banner_image_url}}>
            <View className="p-2 mb-2 bg-orange-400 rounded-lg">
              <Image className="w-20 h-20" source={{uri: detail.image_url}} />
            </View>
          </ImageBackground>
          <View className="flex flex-row flex-wrap justify-around py-2">
            <View className="m-2">
              <Text className="text-md font-semibold">Total Volume:</Text>
              <Text className="text-yellow-600">{detail.total_volume}</Text>
            </View>
            <View className="m-2">
              <Text className="text-md font-semibold">Total Owned Tokens:</Text>
              <Text>{tokens.length}</Text>
            </View>
            <View className="m-2">
              <Text className="text-md font-semibold">Today Change:</Text>
              <Text className="text-yellow-600">{detail.one_day_change}</Text>
            </View>
            <View className="m-2">
              <Text className="text-md font-semibold">Today Volume:</Text>
              <Text>{detail.one_day_volume}</Text>
            </View>
          </View>
        </View>
        <View className="m-2">

        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}
