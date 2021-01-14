import React, { Component, useState } from 'react';
import $ from 'jquery';

import styled from 'styled-components';

export default class Instagram extends Component {
    constructor(props) {
        super(props);
    
        this.state = {imgs: []};
    }
    
    componentDidMount() {
        this.UserList();
    }
    
    UserList() {
        $.getJSON(`https://graph.instagram.com/me/media?fields=id,media_type,permalink,media_url&access_token=${process.env.IG_ACC_TOKEN}`)
            .then(({ data }) => {
                this.setState({imgs: data})
            });
    }
    
    render() {
        const imgList = this.state.imgs.filter(function(img, i) {
            if((img.media_type != "IMAGE" && img.media_type != "CAROUSEL_ALBUM") || (i > 12)) {
                return false;
            }
            return true;
        }).map((item, i) => (
            <div class="square">
                <a href={ item.permalink }><img src={ item.media_url }></img></a>
            </div>
        ));
    
        return (
            <div id="instagram">
                <h2>Follow Us on Instagram!</h2>
                <div className="igImages">{ imgList }</div>
            </div>
        );
    }
}