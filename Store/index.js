import { createStore,applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from '../Store/Reducer';
import Reduxthunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(reducer,applyMiddleware(Reduxthunk))


let store = createStore(persistedReducer,applyMiddleware(Reduxthunk))
  let persistor = persistStore(store)

export {
store,
persistor


} 