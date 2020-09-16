import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Allvideo } from '../redux/action/index';
// import { Link } from 'react-router-dom';
class Video extends Component {
  async componentDidMount() {
    await this.props.Allvideo();
  }
  render() {
    return (
      <div className="row video">
        {this.props.video.items && this.props.video.items.length > 0 && this.props.video.items.map((item) => (
          <div className="card col-4 " key={item.id} onClick={() => this.props.history.push('/detail/' + item.id)}>
             <img src={item.snippet.thumbnails.medium.url} className="card-img-top" alt="video" />
            <div className="card-body">
              <h5 className="card-title">{item.snippet.channelTitle}</h5>
              <p className="card-text">{item.snippet.description.substr(0, 100)}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.videoReducer.items
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    { Allvideo }, dispatch
  )
)
export default connect(mapStateToProps, mapDispatchToProps)(Video);