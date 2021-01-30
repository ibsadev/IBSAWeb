import React, { Component} from 'react';

export default class Instagram extends Component {

    render() {
        let { images } = this.props
        const imgList = images.filter(function(img, i) {
            if((img.media_type != "IMAGE" && img.media_type != "CAROUSEL_ALBUM") || (i > 12)) {
                return false;
            }
            return true;
        }).map((item, i) => (
            <div className="square" key={i}>
                <a href={ item.permalink }><img src={ item.media_url }></img></a>
            </div>
        ));
    
        return (
            <div id="instagram">
                <h1>FOLLOW US ON INSTAGRAM!</h1>
                <div className="igImages">{ imgList }</div>
            </div>
        );
    }
}