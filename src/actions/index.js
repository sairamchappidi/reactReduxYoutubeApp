import {
        ASYNC_FETCH,
        ASYNC_SUCCESS,
        ASYNC_FAIL,
        SELECTED_VIDEO
} from './../constants';
import YTSearch from 'youtube-api-search';
const API_KEY ='AIzaSyDYj_9CAEc9MBdBBbSxDJznH2qbU9oa7OY';
export const fetchData = (term) => {
	return ((dispatch)=>{
			dispatch(asyncFethc());
		 	YTSearch({key:API_KEY,term:term},(videos)=>{
		      dispatch(asyncSuccess(videos));
		      //dispatch(onVideoSelect(videos[0]));
		    })
	})
}
export const asyncFethc = () =>{
	return {
		type:ASYNC_FETCH
	}
}
export const asyncSuccess = (data) =>{
	return {
		type:ASYNC_SUCCESS,
		payLoad:data
	}
}
export const asyncFail = (error) =>{
	return {
		type:ASYNC_FAIL,
		payLoad:error
	}
}
export const onVideoSelect = (video)=>{
	return{
		type:SELECTED_VIDEO,
		payLoad:video
	}
}