export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_FACETS':
            return {
                ...state,
                facets: action.payload
            };
        default: 
            return state
    }
}
