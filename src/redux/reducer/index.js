import { ALLVIDEO, TOGGLE_VIDEO_FETCHING_STATE, SEARCHVIDEO } from '../type';
const initialstate = {
    items: [],
    searchResult: {},
    isVideoFetching: false
}
const Reducer = (state = initialstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case ALLVIDEO:
            return {
                ...state, items: { ...payload }
            }
        case SEARCHVIDEO:
            return {
                ...state, searchResult: { ...payload }
            }
        case TOGGLE_VIDEO_FETCHING_STATE:
            return { ...state, isVideoFetching: !state.isVideoFetching }
        default:
            return state

    }
}

export default Reducer;