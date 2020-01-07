import React from 'react';
import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import { Container, Col, Row } from 'reactstrap';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    //default search
    this.onSearchSubmit('Learn React JS');
  }

  onSearchSubmit = async (searchTerm) => {
    //console.log(searchTerm);
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = (video) => {
    // console.log('frm App', video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <Container className="mt-4">
          <SearchBar onFormSubmit={this.onSearchSubmit}></SearchBar>
          <Row>
            <Col xs="8">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </Col>
            <Col>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              ></VideoList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
