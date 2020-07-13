import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types'

const TrackCreateScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text>{'TrackCreateScreen'}</Text>
    </View>
  );
});

export default TrackCreateScreen;

TrackCreateScreen.defaultProps = {};
TrackCreateScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
