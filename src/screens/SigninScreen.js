import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types'

const SigninScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text>{'SigninScreen'}</Text>
    </View>
  );
});

export default SigninScreen;

SigninScreen.defaultProps = {};
SigninScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
