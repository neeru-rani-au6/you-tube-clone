import { CURRENT_VIDEO, SET_COMMENTS, TOGGLE_CURRENT_VIDEO } from '../type';
import config from '../../config';
import axios from 'axios';
export const currentVideo = (Videoid) => async dispatch => {
    try {
        dispatch({type:TOGGLE_CURRENT_VIDEO})
        const {data} = await axios(`${config.BASE_URL}/videos?part=snippet,contentDetails,statistics&key=${config.API_KEY}&id=${Videoid}`);
        dispatch({
            type: CURRENT_VIDEO,
            payload: data
        })
    } catch (error) {
         console.log(error)
    }finally{
        dispatch({
            type:TOGGLE_CURRENT_VIDEO
        })
    }

}
export const currentVideoComment = (Videoid) => async dispatch => {
    try {
        dispatch({type:TOGGLE_CURRENT_VIDEO})
        const {data} = await axios(`${config.BASE_URL}/commentThreads?part=snippet,replies&key=${config.API_KEY}&videoId=${Videoid}`);
        dispatch({
            type: SET_COMMENTS,
            payload: data
        })
    } catch (error) {
         console.log(error)
    }finally{
        dispatch({
            type:TOGGLE_CURRENT_VIDEO
        })
    }

}




