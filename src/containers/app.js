import React, { Component } from 'react';
import {connect} from 'react-redux';

//components
import SearchBar from './../components/search-bar';
import VideoDetails from './../components/video-details';
import VideoList from './../components/video-list';
//actions
import { onVideoSelect,
        fetchData } from './../actions'
class App extends Component {
  
  componentWillMount() {
    this.props.fetchData('oneplus3');
  }
  render() {
    let video=this.props.video;
      if(this.props.videos.length>0){
        return (
            <div clas>
            <SearchBar onChangeHandler={this.props.fetchData}/>
            <VideoDetails video = {this.props.selectedVideo} />
            <VideoList videos = {this.props.videos} onVideoSelect = {this.props.onVideoSelect}/>
            </div>
            )
          }
      else{
        return(<div>Loading..</div>);


      }
  }
}
const mapStateToProps = (state,ownprops) => {

  return{
      videos:state.videos,
      selectedVideo:state.selectedVideo
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
      onVideoSelect:(video) => dispatch(onVideoSelect(video)),
      fetchData: (term) => dispatch(fetchData(term))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)