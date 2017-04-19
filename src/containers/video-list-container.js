import React from 'react';
import {connect} from 'react-redux';

// actions
import { onVideoSelect,
        fetchData } from './../actions';
// component
import VideoList from './../components/video-list';

const mapStateToProps = (state, ownprops) => {
	return {
		videos:state.videos,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onVideoSelect:(video) => dispatch(onVideoSelect(video)),
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoList)