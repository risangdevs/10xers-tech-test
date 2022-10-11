import {Text, View, ScrollView, Image, Pressable} from 'react-native';
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
        'https://api-generator.retool.com/jlEsLB/wallet_content',
      );
      const parsed = data.map((e, i) => {
        return {
          id: e.id,
          external_id: e.external_id,
          image_url: e.image_url,
          name: e.name,
          token_id: e.token_id,
          description: e.description,
          collection: JSON.parse(e.collection_json),
        };
      });
      const group = parsed.reduce((group, e) => {
        const {name} = e.collection;
        group[name] = group[name] ?? [];
        group[name].push(e);
        return group;
      }, {});
      let result = [];
      for (const key in group) {
        result.push({[key]: group[key]});
      }
      setCol(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCollection();
    // setCol(Collection.getCollection())
  }, []);
  // console.log(col);
  const toDetail = ({name,token}) => {
    navigation.navigate('detail', {name,token});
  };
  return (
    <View style={{top: top}}>
      <Header title="Home" />
      <ScrollView
        className="overflow-y-scroll mx-4 mt-4"
        style={{height: height - 220}}>
        <Text className="text-center text-2xl font-extrabold text text-cyan-600">
          Collection List
        </Text>
        {col &&
          col.map((e, i) => {
            return (
              <Pressable
                key={i}
                onPress={() =>
                  toDetail({name: Object.keys(e), token: e[Object.keys(e)]})
                }>
                <View className="border-2 border-emerald-400 p-4 mx-2 my-4 rounded-lg">
                  <Text className="text-lg font-bold mb-2">
                    {Object.keys(e)}
                  </Text>
                  {e[Object.keys(e).join('')].map((f, j) => {
                    // console.log(f.collection.banner_image_url);
                    return (
                      <View key={j}>
                        <View className="flex flex-row justify-center my-1 p-1 items-center">
                          <Image
                            className="w-10 h-10 mx-2"
                            source={{uri: f.collection.image_url}}
                          />
                          <View>
                            <Text>total sales: {f.collection.total_sales}</Text>
                            <Text>
                              total volume: {f.collection.total_volume}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                  <Text className="mt-2 font-semibold text-lg text-emerald-700">
                    Token Owned : {e[Object.keys(e).join('')].length}
                  </Text>
                </View>
              </Pressable>
            );
          })}
      </ScrollView>
      <Footer />
    </View>
  );
}
