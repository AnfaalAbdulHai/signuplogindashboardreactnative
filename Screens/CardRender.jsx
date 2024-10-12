import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Animated,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import Data from './Data';

const StoreCards = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const animations = products.map(() => new Animated.Value(0)); // Create an array of animated values

  useEffect(() => {
    // Fetch data from the Fake Store API using fetch
    // fetch('https://fakestoreapi.com/products')
    //   .then(response => response.json())
    //   .then(data => {
    //     setProducts(data);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     // console.error('Error fetching products:', error);
    //     setProducts(Data);
    //     setLoading(false);
    //   });
    setProducts(Data)
  }, []);

  const animateCard = index => {
    Animated.timing(animations[index], {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({item, index}) => {
    const scale = animations[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0.85, 1],
    });
    const handle_detail=(item)=>{
      navigation.navigate('Product',item)
    }
    return (
      <Animated.View
        style={[
          styles.card,
          {transform: [{scale}], opacity: animations[index]},
        ]}
        onLayout={() => animateCard(index)}>
        <Card key={item.id}>
          <Card.Cover
            style={{width: '100%', height: 100}}
            source={{uri: item.image}}
          />
          <Card.Content>
            <Title style={{fontSize: 15}} numberOfLines={1}>
              {item.title}
            </Title>
            <Paragraph style={{fontSize: 12}} numberOfLines={2}>
              {item.description}
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={()=> handle_detail(item)}>Price: ${item.price}</Button>
          </Card.Actions>
        </Card>
      </Animated.View>
    );
  };
  // const onclick=()=>{
  //   navigation.navigate('Product')
  // };
  return (
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    flex: 1,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#BB8BD9',
    padding: 10,
    margin: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StoreCards;
