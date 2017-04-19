import React,{Component} from 'react';
import debounce from 'lodash.debounce';
export default class SearchBar extends Component{
  constructor(props){
    super(props)
    this.searchInputTitle = null;
    this.handleInputChange = debounce(this.handleInputChange,500);
  }
  handleInputChange = () => {
    this.props.onChangeHandler(this.searchInputTitle.value);
    this.searchInputTitle.value='';
  }
  render(){
    return (
      <input className = 'search-bar' placeholder = 'Search...' onChange={this.handleInputChange}  ref={(el) => {this.searchInputTitle = el;}}/>
    )
  }
}
