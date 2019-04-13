import { message } from 'antd';
import { fakeSubmitForm } from './service';

export default {
  namespace: 'stepForm',

  state: {
    current: 'info',
    step: {
      payAccount: 'test@alipay.com',
      receiverAccount: 'test@example.com',
      receiverName: 'test',
      amount: '500',
    },
  },

  effects: {
    *submitStepForm({ payload }, { call, put }) {
      //yield call(fakeSubmitForm, payload);
      yield put({
        type: 'saveStepFormData',
        payload,
      });
      yield put({
        type: 'saveCurrentStep',
        payload: 'result',
      });
      message.success('提交成功');
    },
  },

  reducers: {
    saveCurrentStep(state, { payload }) {
      return {
        ...state,
        current: payload,
      };
    },

    saveStepFormData(state, { payload }) {
      return {
        ...state,
        step: {
          ...state.step,
          ...payload,
        },
      };
    },
  },
};
