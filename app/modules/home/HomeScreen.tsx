import React from 'react';
import {Text, View} from 'react-native';
import {Header} from '../../components';
import styles from './HomeScreenStyles';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Header title={'Home Screen'} />
    </View>
  );
};

export default HomeScreen;