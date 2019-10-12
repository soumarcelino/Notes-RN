import React from 'react';
import HomeScreen from './screens/Home';

import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './redux/configureStore';

import { Provider } from 'react-redux';

const { store, persistor } = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <HomeScreen />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;