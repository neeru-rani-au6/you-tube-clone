import React from 'react';
const Videoplayer = ({ video }) => {
    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    title="video"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <div className="video-details">
                <div className="views">
                    <span className="text">
                        {video.statistics.viewCount}
                    </span>
                    <i className="fa fa-eye icon" aria-hidden="true"></i>
                </div>
                <div className="views">
                    <span className="text">
                        {video.statistics.likeCount}
                    </span>
                    <i className="fa fa-thumbs-up icon" aria-hidden="true"></i>
                </div>
                <div className="views">
                    <span className="text">
                        {video.statistics.dislikeCount}
                    </span>
                    <i className="fa fa-thumbs-down icon" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}


export default Videoplayer;