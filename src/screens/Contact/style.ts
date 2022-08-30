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
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 16,
  },
  input: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.type.monserratMed,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButton: {
    top: -20,
    borderRadius: 8,
    marginHorizontal: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: Colors.white,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 18,
    height: 18,
  },
  actionText: {
    fontSize: 12,
    marginLeft: 10,
    color: Colors.black,
    fontFamily: Fonts.type.monserrat,
  },
});

export default styles;
