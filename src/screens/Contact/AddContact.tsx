import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../components/Button';
import Input from '../../components/Input';
import {AppDispatch, RootState} from '../../store';
import {
  saveContact,
  setAge,
  setFirstName,
  setLastName,
  setPhoto,
  updateContact,
} from '../../store/ContactStore';
import {Colors} from '../../theme';
import styles from './style';
import ImagePicker from 'react-native-image-crop-picker';
import images from '../../assets/images';

const AddContact = ({navigation, route}: any) => {
  const {isEdit, id} = route?.params;
  const dispatch = useDispatch<AppDispatch>();
  const contactState = useSelector((state: RootState) => state.contactReducer);

  useEffect(() => {
    if (isEdit) {
      dispatch(setFirstName(contactState.contact?.firstName));
      dispatch(setLastName(contactState.contact?.lastName));
      dispatch(setAge(contactState.contact?.age?.toString()));
      dispatch(setPhoto(contactState.contact?.photo));
    }
  }, []);

  const Header = () => {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.caramel, Colors.choco]}
        style={styles.header}>
        <TouchableOpacity style={styles.titleContainer} onPress={onSelectImage}>
          <Image
            source={
              contactState.photo === ''
                ? images.default_avatar
                : {uri: contactState.photo}
            }
            style={styles.profilePicture}
          />
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  const onSelectImage = async () => {
    await ImagePicker.openPicker({
      width: 800,
      height: 800,
      cropping: true,
    })
      .then(image => {
        let cleanUrl = '';

        const url = image.path;

        if (Platform.OS === 'ios') {
          cleanUrl = url.replace('file://', '');
        } else {
          cleanUrl = url;
        }

        dispatch(setPhoto(cleanUrl));
      })
      .catch(err => {
        if (err.code === 'E_PICKER_CANCELLED') {
          return false;
        }
      });
  };

  const onChangeFirstName = (value: string) => {
    dispatch(setFirstName(value));
  };

  const onChangeLastName = (value: string) => {
    dispatch(setLastName(value));
  };

  const onChangeAge = (value: string) => {
    dispatch(setAge(value));
  };

  const onSave = () => {
    const data = {
      id: id,
      firstName: contactState.firstName,
      lastName: contactState.lastName,
      age: Number(contactState.age),
      photo: contactState.photo,
      navigation,
    };
    if (isEdit) {
      dispatch(updateContact(data));
    } else {
      dispatch(saveContact(data));
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Input
            value={contactState.firstName}
            label="First Name"
            placeholder="First Name"
            onChangeText={onChangeFirstName}
          />

          <Input
            value={contactState.lastName}
            label="Last Name"
            placeholder="Last Name"
            onChangeText={onChangeLastName}
          />

          <Input
            value={contactState.age}
            label="Age"
            placeholder="Age"
            keyboardType="number-pad"
            onChangeText={onChangeAge}
          />
          <Button label="Save" onPress={onSave} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddContact;
