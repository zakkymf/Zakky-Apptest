import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../theme';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 200,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: Fonts.type.monserratDemi,
  },
  content: {
    padding: 16,
  },
  textLen: {
    fontSize: 12,
    marginBottom: 10,
    color: Colors.black,
    fontFamily: Fonts.type.monserratDemi,
  },
  fabText: {
    fontSize: 24,
    color: Colors.white,
  },
});

export default styles;
