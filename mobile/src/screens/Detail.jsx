import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Detail({route, navigation}) {
  const {name,token} = route.params;
  const [detail, setDetail] = useState({});
  const [stat, setStat] = useState([]);
  const [tokens,setTokens]=useState([])
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = async () => {
    try {
      setTokens(token)
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
        <Text>{name}</Text>
      </ScrollView>
      <Footer />
    </View>
  );
}
