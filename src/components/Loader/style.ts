import {StyleSheet, Dimensions} from 'react-native';
import { purple, purple2 } from '../../colors'
//

export default StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: purple2,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 100,
  },
  line: {
    backgroundColor: purple,
    height: 5,
    width: 20,
    marginTop: 10,
    marginLeft: 110,
    borderRadius: 50,
    alignSelf: 'flex-start',
    position: 'relative',
    zIndex: 1
  },
  line2: {
    backgroundColor: purple,
    height: 5,
    width: 170,
    // marginLeft: 110,
    borderRadius: 50,
    alignSelf: 'flex-start',
    position: "absolute",
    zIndex: -2,
    opacity: 0.2
  }
});
