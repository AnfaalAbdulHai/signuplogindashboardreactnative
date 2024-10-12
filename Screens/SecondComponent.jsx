import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import {Card, Title, Paragraph, Button} from 'react-native-paper';

const SecondComponent = ({ route, navigation }) => {

  const item = route.params;
  // id, title, price, description, image
  return (
    // <View style={styles.centeredContainer}>
    //   <Text style={styles.centeredText}>Hello React Native</Text>
    // </View>
    <ScrollView style={{height: '100%'}}>
      <View style={{alignContent: 'center', alignItems: 'center'}}>
    <Card key={item.id} style={{margin: 4}}>
          <Card.Cover
            // style={{width: '100%', height: 100}}
            source={{uri: item.image}}
          />
          <Card.Content>
            <Title style={{fontSize: 15}}>
              {item.title}
            </Title>
            <Paragraph style={{fontSize: 12}}>
              {item.description}
            </Paragraph>
            <Text>price: {item.price}</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={()=> navigation.navigate('Home')}>Go Back</Button>
          </Card.Actions>
        </Card>
        </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    centeredContainer: {
      height:300,
      backgroundColor: 'rgba(255, 99, 71, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 3
    },
    centeredText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 40,
    },
    image: {
      width: '100%',
      height: 250,
      margin: 0,
    },
  });
  
export default SecondComponent