import { CURRENT_VIDEO, SET_COMMENTS, TOGGLE_CURRENT_VIDEO } from '../type';
const initialstate = {
    items: [],
    isFeatchingCurrentVideo: false,
    Comments: null
}
const currentVideoReducer = (state = initialstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case CURRENT_VIDEO:
            return {
                ...state, item: { ...payload }
            }
        case SET_COMMENTS:
            return {
                ...state, Comments: { ...payload }
            }
        case TOGGLE_CURRENT_VIDEO:
            return { ...state, isFeatchingCurrentVideo: !state.isFeatchingCurrentVideo }
        default:
            return state

    }
}

export default currentVideoReducer;