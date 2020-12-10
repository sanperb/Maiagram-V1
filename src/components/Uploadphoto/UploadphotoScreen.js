import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import storage from '@react-native-firebase/storage';
import ProgressBar from 'react-native-progress/Bar';

export default function UploadScreen() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };

const uploadImage = async () => {
  const { uri } = image;
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

  setUploading(true);
  setTransferred(0);

  const task = storage()
    .ref(filename)
    .putFile(uploadUri);

  // set progress state
  task.on('state_changed', snapshot => {
    setTransferred(
      Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
    );
  });

  try {
    await task;
  } catch (e) {
    console.error(e);
  }

  setUploading(false);

  Alert.alert(
    'Photo uploaded!',
    'Your photo has been uploaded to Firebase Cloud Storage!'
  );

  setImage(null);
};

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {image && (
          <>
            <Image source={{ uri: image.uri }} style={styles.imageBox} />
            {uploading ? (
              <View style={styles.progressBarContainer}>
                <ProgressBar progress={transferred} width={300} />
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={uploadImage}
              >
                <Text style={styles.buttonText}>Upload image</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6'
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center'
  },
  progressBarContainer: {
    marginTop: 20
  },
  imageBox: {
    width: 300,
    height: 300
  }
});