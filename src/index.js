import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const APIKEY = 'AIzaSyDIX_vL4v6V3qKrVzUIya0-UHaFY2u4QG4';
              


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      videos:[],
      selectedVideo:null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: APIKEY, term:term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  };

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term),300)

    return(
    <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
         onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
         videos={this.state.videos}
         />
    </div>
    )
  }
}


ReactDOM.render(<App/>,document.getElementById('container'));