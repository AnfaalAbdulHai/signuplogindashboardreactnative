import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Cart = () => {
  const [captureImage, setCaptureImage] = useState('');
  // const [filePath, setFilePath] = useState([]);
  const [filePathArray, setFilePathArray] = useState([]);
  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    const imageSrc = result.assets[0].uri;
    console.log(result);
    if (imageSrc) {
      setCaptureImage(imageSrc);
    } else {
      setCaptureImage('');
    }
  };
  const openGallery = () => {
    let options = {
      mediaType: 'photo',
      selectionLimit: 5,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel || response.errorCode) {
        console.log('User cancelled or there was an error.');
        return;
      }

      const newUris = response.assets
        .map(item => item.uri)
        .filter(uri => uri !== null);

      setFilePathArray(prevFilePathArray => [...prevFilePathArray, ...newUris]);
    });
  };
  return (
    <ScrollView>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 200,
      }}>
      {/* <View >
        { captureImage? 
        <Image
        source={{uri : captureImage}}
        style={{alignContent: 'center', justifyContent: 'center'}}
        height={200}
        width={200}
        resizeMode='cover'
        />: null
        }
      </View> */}
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {filePathArray.map((uri, index) => (
          <Image
            key={index}
            source={{uri}}
            style={{width: 100, height: 100,margin: 6}}
          />
        ))}
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={{color: 'white'}}>Open Camera</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={openGallery}>
          <Text style={{color: 'white'}}>Open Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
    // paddingVertical: 20,
    alignContent: 'center',
    justifyContent: 'center',
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
    width: 200,
    // height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
});
export default Cart;
