import React, {Component} from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetails";

class App extends Component{

    state = {
        videos: [], 
        selectedVideo: null
    }

    componentDidMount(){
        this.onSubmitChange('tourism');
    }

    onSubmitChange = async (term) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: 'AIzaSyBYqwMkB-Ed_Ly1J6bmD1tZPolfIngsfb8',
                q: term 
            }
        })
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container" style={{'marginTop':'7px'}}>
                <SearchBar onSubmit={this.onSubmitChange}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo}/></div>
                        <div className="five wide column"><VideoList videos={this.state.videos} videoSelect = {this.onVideoSelect}/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App