import React  from 'react';
import ReactDom from 'react-dom';


const VideoListItem = ({video, onVideoSelect}) => {
    const ImgUrl = video.snippet.thumbnails.default.url
    return (
        <li className='listGroupItem' onClick={() => onVideoSelect(video)}>
            <div className='videoList media'>
                <div className='mediaLeft'>
                    <img className='mediaObject'src={ImgUrl} />
                </div>
                <div className='mediaBody'>
                    <div className='mediaHeading'>
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;