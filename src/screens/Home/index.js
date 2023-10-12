import {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => setData(res));
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{height: 40}}
              onPress={() => navigation.navigate('Details', {item: item})}>
              <Text style={{fontSize: 18}}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
