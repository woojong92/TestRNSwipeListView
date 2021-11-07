import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styledText: {
    color: '#111',
    fontWeight: 'bold',
  },
  swipeListItem: {
    alignItems: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#eee',
  },
  swipeHiddenItemContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  swipeHiddenItem: {
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeHiddenItemText: {
    color: 'white',
    fontSize: 14,
  },
});

const LIST_VIEW_DATA = Array(5)
  .fill('')
  .map((_, i) => ({key: `${i}`, text: `item #${i}`}));

export default () => {
  const [text, setText] = useState('Not Pressed');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.styledText}>{text}</Text>
      </View>

      <SwipeListView
        data={LIST_VIEW_DATA}
        renderItem={({item}) => (
          <View style={styles.swipeListItem}>
            <Text>{item.text}</Text>
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.swipeHiddenItemContainer}>
            <TouchableOpacity
              onPress={() => setText(`${data.item.text} left is pressed`)}>
              <View style={[styles.swipeHiddenItem, {backgroundColor: 'pink'}]}>
                <Text style={styles.swipeHiddenItemText}>left</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setText(`${data.item.text} right is pressed`)}>
              <View
                style={[styles.swipeHiddenItem, {backgroundColor: 'skyblue'}]}>
                <Text style={styles.swipeHiddenItemText}>right</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={70}
        rightOpenValue={-70}
      />
    </SafeAreaView>
  );
};
