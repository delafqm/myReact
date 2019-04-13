//import { queryBasicProfile } from './service';
import { queryBasicProfile } from './_mock';

export default {
  namespace: 'basicProfile',

  state: {
    basicGoods: [],
  },

  effects: {
    *fetchBasic(_, { call, put }) {
      //const response = yield call(queryBasicProfile);
      const response=queryBasicProfile;
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
