import { persistStore, persistReducer } from 'redux-persist';

import storage from '@react-native-community/async-storage';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	const store = createStore(persistedReducer, applyMiddleware(logger));
	const persistor = persistStore(store);
	return { store, persistor };
};
