import React, { Component } from 'react';
import Videoplayer from './videoplayer';
import { connect } from 'react-redux';
import {Allvideo} from '../redux/action/index';
import { currentVideo, currentVideoComment } from '../redux/action/detailVideo';
class Videodetail extends Component {
    async componentDidMount() {
        await this.props.currentVideo(this.props.match.params.videoid)
        await this.props.currentVideoComment(this.props.match.params.videoid);
        await this.props.Allvideo();
        //console.log('this.props.comments', this.props.currentvideo);
        //console.log('videooooo',this.props.video.items)
    }
    render() {
        return (
            <div>
                <div style={{ background: '#222' }}>
                    {this.props.currentvideo ?
                        <>
                            <Videoplayer video={this.props.currentvideo.items[0]} />
                        </>
                        : <h1>loading video...</h1>
                    }
                    {this.props.comments ?
                        <>
                            {this.props.comments.items.map(comment => (
                                <div key={comment.id} className="author">
                                    <img className="come" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user"/>
                                    <div>
                                        <h6> {comment.snippet.topLevelComment.snippet.authorDisplayName}</h6>
                                        <p>{comment.snippet.topLevelComment.snippet.textOriginal.substr(0, 100)}</p>
                                    </div>

                                </div>

                            ))}
                        </>
                        : <h1>loading comment...</h1>
                    }
                </div>
                <div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log('state.currentVideoReducer.Comments', state.videoReducer.items);
    return {
        video: state.videoReducer.items,
        currentvideo: state.currentVideoReducer.item,
        comments: state.currentVideoReducer.Comments
    }
}
export default connect(mapStateToProps, { currentVideo, currentVideoComment,Allvideo })(Videodetail);