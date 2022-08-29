import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../components/Button';
import Input from '../../components/Input';
import {AppDispatch, RootState} from '../../store';
import {setFirstName} from '../../store/ContactStore';
import {Colors} from '../../theme';
import styles from './style';

const AddContact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactState = useSelector((state: RootState) => state.contactReducer);

  const Header = () => {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.caramel, Colors.choco]}
        style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Contacts</Text>
        </View>
      </LinearGradient>
    );
  };

  const onChangeFirstName = (value: string) => {
    dispatch(setFirstName(value));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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
            value={contactState.firstName}
            label="Last Name"
            placeholder="Last Name"
            onChangeText={onChangeFirstName}
          />

          <Input
            value={contactState.firstName}
            label="Age"
            placeholder="Age"
            onChangeText={onChangeFirstName}
          />
          <Button label="Save" onPress={() => null} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddContact;
