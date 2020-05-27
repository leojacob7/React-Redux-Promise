import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, API_LIST } from '../constant'

export function fetchData() {
    return {
        type: FETCH_DATA,
        loading: true,
    }
}

export function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        loading: false,
        payload: data
    }
}

export function fetchDataFailure(error) {
    return {
        type: FETCH_DATA_FAILURE,
        loading: false,
        payload: error,
        error:error,
    }
}


export const fetchDataFromAPI = () => {
	return dispatch =>
		// dispatch(fetchData());
		Promise.all(
			API_LIST.map((url) =>
				fetch(url)
					.then((response) => response.json())
					.catch((error) => ({error, type:'error'}))
			)
		).then((data) => {
            data.forEach(element => {
                element.type === 'error' ? dispatch(fetchDataFailure({ error: "An error occured while loading data"}))
                : dispatch(fetchDataSuccess(element))
            });
        });
};



//   axios
//         .get('https://another-user-session.herokuapp.com/members')
//         .then(response => {
//           // response.data is the users
//           const users = response.data
//           dispatch(fetchUserSuccess(users))
//         })
//         .catch(error => {
//           // error.message is the error message
//           dispatch(fetchUserFailure(error.message))
//         })