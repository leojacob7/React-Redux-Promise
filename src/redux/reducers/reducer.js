import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../constant';

const initialState = {
    loading: true,
    data: [],
    error: ''
}


export const apiCallReducer = (state = [initialState], action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, loading: state.loading }
            
        case FETCH_DATA_SUCCESS:
            return state.concat({ data: action.payload, loading: action.loading })

        case FETCH_DATA_FAILURE:
            return state.concat({ loading: action.loading, data: action.payload, error:action.error })
    
        default:
            return state;;
    }
};