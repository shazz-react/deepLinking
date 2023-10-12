import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const Details = ({route}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (route?.params?.item) {
      setData(route.params.item);
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${route.params.userId}`)
        .then(response => response.json())
        .then(res => setData(res));
    }
  }, []);

  return (
    <View>
      <Text style={{fontSize: 24}}>{data?.name}</Text>
      <Text style={{fontSize: 24}}>{data?.id}</Text>
      <Text style={{fontSize: 24}}>{route?.params?.userId}</Text>
    </View>
  );
};

export default Details;
