import React, {useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {FloatingButton} from '../../components/Button';
import List from '../../components/List';
import {AppDispatch, RootState} from '../../store';
import {getContact} from '../../store/ContactStore';
import {Colors} from '../../theme';
import styles from './style';

const Contact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactState = useSelector((state: RootState) => state.contactReducer);

  useEffect(() => {
    getContactData();
  }, []);

  const getContactData = () => {
    dispatch(getContact());
  };

  const renderItem = ({item}: any) => {
    return (
      <List name={`${item?.firstName} ${item?.lastName}`} photo={item?.photo} />
    );
  };

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

  const renderIcon = () => {
    return <Text style={styles.fabText}>+</Text>;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text
            style={
              styles.textLen
            }>{`My Contacts(${contactState.data?.length})`}</Text>
          <FlatList
            data={contactState.data}
            renderItem={renderItem}
            keyExtractor={(item: any) => item?.id?.toString()}
          />
        </View>
        <FloatingButton renderIcon={renderIcon} onPress={() => null} />
      </View>
    </SafeAreaView>
  );
};

export default Contact;
