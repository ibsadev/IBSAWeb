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
        $.getJSON(`https://graph.instagram.com/me/media?fields=id,media_type,permalink,media_url&access_token=IGQVJXcFViLTRiakdoUTBjSUJLSm12WG41N0VhWnRqYTlSOG9Td0twRTFyMUdHanZAyMWJOZA0JMOUJRZAER6UXM3aUttbVYzV19QalJuN0tTNGtjM3QwTTh5S2c5ckttdEo0eWRlTzIwV25UN3hEMnV4cQZDZD`)
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