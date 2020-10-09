import { call, put, takeLatest } from "redux-saga/effects";

const fetchPersonsApi = () =>
  fetch("http://df-react-demo.herokuapp.com/employees")
    .then(resp => resp.json())
    .then(data => data);

function* fetchPersons(action) {
  try {
    const persons = yield call(fetchPersonsApi);
    yield put({ type: "PERSONS_FETCH_SUCCEEDED", payload: { data: persons } });
  } catch (e) {
    yield put({ type: "PERSONS_FETCH_FAILED", message: e.message });
  }
}

export default function* personsSaga() {
  yield takeLatest("PERSOND_FETCH_REQUESTED", fetchPersons);
}
