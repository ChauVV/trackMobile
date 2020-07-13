import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types'

const AccountScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text>{'AccountScreen'}</Text>
    </View>
  );
});

export default AccountScreen;

AccountScreen.defaultProps = {};
AccountScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
