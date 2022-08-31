import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-linear-gradient', () => {});

jest.mock('react-native-toast-message', () => {});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
