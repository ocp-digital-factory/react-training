import { call, put, takeLatest } from "redux-saga/effects";

const fetchPersonsApi = () =>
  fetch("https://df-react-demo.herokuapp.com/employees")
    .then(resp => resp.json())
    .then(data => data);

const addPersonApi = newPerson =>
  fetch("https://df-react-demo.herokuapp.com/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPerson)
  });

const deletePersonApi = id =>
  fetch(`https://df-react-demo.herokuapp.com/employees/${id}`, {
    method: "DELETE",
  });

function* fetchPersons(action) {
  try {
    const persons = yield call(fetchPersonsApi);
    yield put({ type: "PERSONS_FETCH_SUCCEEDED", payload: { data: persons } });
  } catch (e) {
    yield put({ type: "PERSONS_FETCH_FAILED", message: e.message });
  }
}

function* addPerson(action) {
  try {
    yield call(addPersonApi, action.payload.data);
    yield put({ type: "PERSONS_FETCH_REQUESTED" });
  } catch (e) {
    yield put({ type: "ADD_NEW_PERSON_FAILED", message: e.message });
  }
}

function* deletePerson(action) {
  try {
    yield call(deletePersonApi, action.payload.id);
    yield put({ type: "PERSONS_FETCH_REQUESTED" });
  } catch (e) {
    yield put({ type: "DELETEPERSON_FAILED", message: e.message });
  }
}

export default function* personsSaga() {
  yield takeLatest("PERSONS_FETCH_REQUESTED", fetchPersons);
  yield takeLatest("ADD_NEW_PERSON", addPerson);
  yield takeLatest("DELETE_PERSON", deletePerson);
}
