import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types'

const SplashScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text>{'SplashScreen'}</Text>
    </View>
  );
});

export default SplashScreen;

SplashScreen.defaultProps = {};
SplashScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
