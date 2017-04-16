import { combineReducers } from 'redux';
import {
        ASYNC_FETCH,
        ASYNC_SUCCESS,
        ASYNC_FAIL,
        SELECTED_VIDEO
} from './../constants';
const initialState = {
                      videos:[],
                      selectedVideo:'',
                      inprogress:false,
                      error:''};

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ASYNC_FETCH:
        return Object.assign({},state,{inprogree:true});
        case ASYNC_SUCCESS:
        return Object.assign({},state,{videos:action.payLoad,inprogree:false,selectedVideo:action.payLoad[0]});
        case ASYNC_FAIL:
        return Object.assign({},state,{videos:action.payLoad,inprogree:false});
        case SELECTED_VIDEO:
        return Object.assign({},state,{selectedVideo:action.payLoad});
        default:
        return state;
    }

}
export default reducer;