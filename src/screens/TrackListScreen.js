import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types'

const TrackListScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text>{'TrackListScreen'}</Text>
    </View>
  );
});

export default TrackListScreen;

TrackListScreen.defaultProps = {};
TrackListScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
