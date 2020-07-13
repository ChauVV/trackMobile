import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types'

const SigupScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text>{'SigupScreen'}</Text>
    </View>
  );
});

export default SigupScreen;

SigupScreen.defaultProps = {};
SigupScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
