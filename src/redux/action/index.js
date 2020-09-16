import { ALLVIDEO, TOGGLE_VIDEO_FETCHING_STATE, SEARCHVIDEO } from '../type';
import config from '../../config'
import axios from 'axios';
export const Allvideo = () => async dispatch => {
    const data = await axios(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${config.API_KEY}&chart=mostPopular&maxResults=30`);
    const allVideo = data.data;
    dispatch({
        type: ALLVIDEO,
        payload: allVideo
    })
}


export const fetchSearchVideos = (searchQuery, pageToken = "") => async (dispatch, getState) => {
    try {
        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });
        const { data } = await axios(
            `${config.BASE_URL}/search?part=snippet&maxResults=20&pageToken=${pageToken}&q=${searchQuery}&key=${config.API_KEY}`,
        )
        dispatch({ type: SEARCHVIDEO, payload: data })
    } catch (err) {
        console.error(err)
    } finally {
        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE })
    }
}




