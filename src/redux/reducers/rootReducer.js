const SET_DATA = 'SET_DATA'
const TOGGLE_LIKE = 'TOGGLE_LIKE'


const initialState = {
    flats: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                flats: [...action.payload].map(obj => {
                    return {
                        ...obj,
                        isLiked: false
                    }
                })
            };
        case TOGGLE_LIKE:
            return {
                ...state,
                flats: state.flats.map(obj => {
                    if(obj.id === action.payload) {
                        return {
                            ...obj,
                            isLiked: !obj.isLiked
                        }
                    }
                    return obj
                })
            }
        default:
            return state

    }
}


export const setData = (payload) => ({type: SET_DATA, payload})

export const getData = () => dispatch => {
    fetch('http://localhost:3000/entities.json').then(response => response.json()).then(response => dispatch(setData(response.response)))
}

export const toggleLike = (payload) => ({type: TOGGLE_LIKE, payload})
