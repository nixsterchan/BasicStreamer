import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VidList from './components/vid_list';
import VidDetail from './components/vid_detail';

// Fixed constant for YouTube API Key
const API_KEY = 'AIzaSyAiHkUeuWyzJsfFOI36bR_Z1I0G9aw_KLI';


class App extends Component{
    constructor(props) {
        super(props);
                
        // Add concept of a selected video which will be a video object that is always passed into video detail
        // To update selected video we will pass a callback from App into VidList, and from VidList into VidListItem
        // Whenever VidListItem is clicked it will run the callback with the Video that belongs to it
        this.state = { 
            videos: [],
            selectedVideo: null 
        };
        this.videoSearch('pokemon');
        
    }
    
    videoSearch(term) {
        // Sample search
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            }); 
            // this.setState( {videos: videos} )    ---> only when key and prop have the same name
        }); 
    }

    render() {
        
        // Debounce takes the inner function this.videoSearch(term) and returns a new function that can only be called once
        // every 300 milliseconds
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (<div> 
                <SearchBar onSearchTermChange={videoSearch}/> 
                <VidDetail video={this.state.selectedVideo} />
                <VidList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                 />
            </div>
        );
    }
    
}

ReactDOM.render(
    <App />, document.querySelector('.container')
); 