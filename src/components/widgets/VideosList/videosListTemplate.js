import React from 'react';
import {Link} from 'react-router-dom';
import style from './videosListTemplate.module.css';
import CardInfo from '../CardInfo/cardInfo';

const VideosListTemplate = (props) => {
    return props.data.map( (item,i) => {
        return(
        <Link to={`/videos/${item.id}`} key={i}>
            <div className={style.videoListItem_wrapper}>
                <div className={style.left} style={{
                    background: `url(/images/videos/${item.image})`
                }}>
                    <div></div>
                </div>
                <div className={style.right}>
                    <CardInfo teams={props.teams} team={item.team} date={item.date}/>
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link> 
        )
    })
    // return props.data.map((item,i) => {
    //     return(
    //         <div>
    //             {item.title}
    //         </div>
    //     // <Link to={`/videos/${item.id}`} key={i}>
    //     //     <div className={style.videoListItem_wrapper}>
    //     //         <div className={style.left} style={{
    //     //             background: `url(/images/videos/${item.image})`
    //     //         }}>
    //     //             <div></div>
    //     //         </div>
    //     //         <div className={style.right}>
    //     //             <h2>{item.title}</h2>
    //     //         </div>
    //     //     </div>
    //     // </Link> 
    // )})
}

export default VideosListTemplate;