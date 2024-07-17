
const COUNT_DATA = {
    count: 0,
    title: "Counter #"
}

//======== TYPES Actions=============
export const COUNTER_ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    INCREMENTBYN: 'INCREMENTBYN',

}

// ==================REDUCER==============
export const counterReducer = (state = COUNT_DATA, action) => {
    const { type, payload } = action;
    switch (type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case COUNTER_ACTION_TYPES.DECREMENT:
            console.log(1);
            return {
                ...state,
                count: state.count - 1
            };;
        case COUNTER_ACTION_TYPES.RESET:
            return {
                ...state,
                count: 0
            };
        case COUNTER_ACTION_TYPES.INCREMENTBYN:
            console.log(payload.n);
            return {
                ...state,
                count: state.count+payload.n
            }
        default:
            return { ...state }
        // throw new Exeption('Invalid type actoion!!!')
    }
}


//===============ACTIONS=================
export const decrement = () => ( { type: COUNTER_ACTION_TYPES.DECREMENT } );
export const increment = () => ( { type: COUNTER_ACTION_TYPES.INCREMENT } );
export const increment_by_n = (n) => ( { type: COUNTER_ACTION_TYPES.INCREMENTBYN, payload: {n} });
export const reset = () => ( { type: COUNTER_ACTION_TYPES.RESET });

//=========SELECTORS========
export const selectCount=(store)=>store.counter.count;
export const selectTitile=(store)=>store.counter.count;