import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types'

const TrackDetailScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text>{'TrackDetailScreen'}</Text>
    </View>
  );
});

export default TrackDetailScreen;

TrackDetailScreen.defaultProps = {};
TrackDetailScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
