import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import icons from '../../assets/icons';
import images from '../../assets/images';
import Input from '../../components/Input';
import {AppDispatch, RootState} from '../../store';
import {deleteContactById, getContactById} from '../../store/ContactStore';
import {Colors} from '../../theme';
import styles from './style';

const DetailContact = ({navigation, route}: any) => {
  const {id} = route?.params;
  const dispatch = useDispatch<AppDispatch>();
  const contactState = useSelector((state: RootState) => state.contactReducer);

  useEffect(() => {
    dispatch(getContactById(id));
  }, []);

  const onDeletePress = () => {
    const params = {
      id,
      navigation,
    };
    dispatch(deleteContactById(params));
  };

  const onEditPress = () => {
    navigation.navigate('AddContactScreen', {isEdit: true, id});
  };

  if (contactState.fecthDetail) {
    return (
      <ActivityIndicator
        size="large"
        color={Colors.caramel}
        style={styles.loading}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[Colors.caramel, Colors.choco]}
          style={styles.header}>
          <TouchableOpacity style={styles.titleContainer}>
            <Image
              source={
                contactState.contact?.photo !== 'N/A'
                  ? {uri: contactState.contact?.photo}
                  : images.default_avatar
              }
              style={styles.profilePicture}
            />
          </TouchableOpacity>
          <View style={styles.row}>
            <TouchableOpacity style={styles.actionButton} onPress={onEditPress}>
              <Image source={icons.ic_edit} style={styles.icon} />
              <Text style={styles.actionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onDeletePress}>
              <Image source={icons.ic_delete} style={styles.icon} />
              <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View style={styles.content}>
          <Input
            editable={false}
            value={contactState.contact?.firstName}
            label="First Name"
            textInputStyle={styles.input}
          />

          <Input
            editable={false}
            value={contactState.contact?.lastName}
            label="Last Name"
            textInputStyle={styles.input}
          />

          <Input
            editable={false}
            value={contactState.contact?.age?.toString()}
            label="Age"
            textInputStyle={styles.input}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailContact;
