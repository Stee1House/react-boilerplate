import { fork } from 'redux-saga/effects';

import user from './user';
import faq from './faq';
import staticContent from './staticContent';

const sagas = [
  ...user,
  ...faq,
  ...staticContent,
];

export default function* rootSaga() {
  try {
    yield sagas.map(saga => fork(saga));
  } catch(error) {
    console.error(error);
  }
}
