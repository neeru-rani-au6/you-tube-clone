import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchVideos } from '../redux/action';
class searchVideo extends Component {
    componentDidMount() {
        this.searchData();
    }
    searchData = async () => {
        await this.props.fetchSearchVideos(this.props.match.params.searchQuery, this.props.search.nextPageToken);
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.props.search.items && this.props.search.items.map((item, i) => (
                        <div key={i} className="video col-4" onClick={() => this.props.history.push('/detail/' + item.id.videoId)}>
                            <div className="card ">
                                <img src={item.snippet.thumbnails.medium.url} className="card-img-top" alt="video" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.snippet.channelTitle}</h5>
                                    <p className="card-text">{item.snippet.description.substr(0, 100)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col">
                        {this.props.search.prevPageToken &&
                            <button type="button" onClick={() => this.searchData(this.props.search.prevPageToken)} className="btn btn-primary prev-btn mt-2" >Previous</button>
                        }
                    </div>
                    <div className="col">
                        {this.props.search.nextPageToken &&
                            <button type="button" onClick={() => this.searchData(this.props.search.nextPageToken)} className="btn btn-primary next-btn" >Next</button>
                        }
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        search: state.videoReducer.searchResult
    }
}

export default connect(mapStateToProps, { fetchSearchVideos })(searchVideo);