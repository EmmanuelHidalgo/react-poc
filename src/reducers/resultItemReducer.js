export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_RESULT_ITEM':
            return {
                ...state,
                item: action.payload
            };
        default: 
            return state
    }
}