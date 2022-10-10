import {Text, View, ScrollView, Image} from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Dimension from './../utils/Dimension';
import {useEffect, useState} from 'react';
import Collection from './../queries/Collection';
import axios from 'axios';
const height = Dimension.responsiveHeight();

export default function Home({navigation}) {
  const {top} = useSafeAreaInsets();
  const [col, setCol] = useState([]);
  const getCollection = async () => {
    try {
      const {data} = await axios.get(
        'https://api-generator.retool.com/j3Iz08/collections',
      );
      setCol(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCollection();
  }, []);
  //   console.log(col);
  return (
    <View style={{top: top}}>
      <Header title="Home" />
      <View
        className="overflow-y-scroll mx-4 mt-4"
        style={{height: height - 220}}>
        {col &&
          col.map(e => {
            return (
              <View
                key={e.id}
                className="border-2 border-emerald-400 p-4 m-2 rounded-lg flex flex-row justify-between">
                <View className="w-1/3">
                  <Image className="h-20 w-20" source={{uri: e.image_url}} />
                </View>
                <View className="w-2/3">
                  <Text className="text-lg font-bold">{e.name}</Text>
                  <Text className="mt-2">Total Tokens</Text>
                  <Text className="text-md font-semibold">{e.total_volume}</Text>
                </View>
              </View>
            );
          })}
      </View>
      <Footer />
    </View>
  );
}
