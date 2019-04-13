//import { queryFakeList } from './service';
import { queryFakeList } from './_mock';

export default {
  namespace: 'cardList',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      //const response = yield call(queryFakeList, payload);
      const response = queryFakeList;
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
