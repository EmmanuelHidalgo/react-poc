export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_RESULTS':
            return {
                ...state,
                results: action.payload
            };
        default: 
            return state
    }
}