import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../hoc/config';
import style from '../../articles.module.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated';

class VideoArticle extends Component {

    state = {
        article:[],
        team:[],
        related:[]
    }

    UNSAFE_componentWillMount() {
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then( response => {
            let article = response.data[0];

            axios.get(`${URL}/teams?id=${article.team}`)
            .then( response => {
                this.setState({
                    article,
                    team: response.data
                })
                this.getRelated()
            })
        })
    }

    getRelated = () => {
        axios.get(`${URL}/teams`)
        .then( response => {
            let team = response.data

            axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
            .then( response => {
                this.setState({
                    team,
                    related: response.data
                })
            })
        })
    }

    render(){
        const article = this.state.article;
        const team = this.state.team;
        return(
            <div>
                <Header teamData={team[0]}/>
                <div className={style.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}
                    >

                    </iframe>
                </div>
                <div className="videosRelated">
                    <VideosRelated data={this.state.related} teams={this.state.team}/>
                </div>
                
            </div>
        )
    }
}

export default VideoArticle;