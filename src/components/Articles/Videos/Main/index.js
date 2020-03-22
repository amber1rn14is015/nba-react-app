import React from 'react';
import VideosList from '../../../widgets/VideosList/videosList';

const VideosMain = () => {
    return(
        <VideosList type="card"
                    loadmore={true}
                    title={false}
                    start={0}
                    amount={10}
        />
    )
}

export default VideosMain;