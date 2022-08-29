import React, {useEffect} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import List from '../../components/List';
import {AppDispatch, RootState} from '../../store';
import {getContact} from '../../store/ContactStore';
import styles from './style';

const Contact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactState = useSelector((state: RootState) => state.contactReducer);

  useEffect(() => {
    dispatch(getContact());
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <List name={`${item?.firstName} ${item?.lastName}`} photo={item?.photo} />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={contactState.data}
          renderItem={renderItem}
          keyExtractor={(item: any) => item?.id?.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Contact;
