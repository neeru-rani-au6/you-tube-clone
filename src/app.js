import React, { Component } from 'react';
import Videodetail from './components/videoDetail';
import Header from './components/header';
import Video from './components/video';
import Search from './components/search';
import searchVideo from './components/searchvideo';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Search />

                    <div className="container">
                        <Route path="/" component={Video} exact />
                        <Route path="/detail/:videoid" component={Videodetail} />
                        <Route path="/search/:searchQuery" component={searchVideo} />
                        {/* //<Redirect to="/"/> */}
                    </div>
                </BrowserRouter>
            </>
        )
    }
}

export default App;