import React, { Component } from 'react';
import "./About.css";
import <profile_pic_name> from ;"../assets/profile_pic_name.jpg"; 
export default class About extends Component {
  render() {
    return (
      <div>
        <p><div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // src="profile_pic_niaprier.jpg"
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Nia Prier</div>
        <div className="brief_description">
        Hi! My name is Nia Prier and i'm from Georgia. I'm currently a junior majoring in Computer Science at the illustrious Albany State University.
An interesting fact about me is that I have a Bachelor's degree in Psychology and currently work as a behavioral health case manager. I graduated with my psychology degree in 2015
but wanted to take a diffrent career approach and began pursuing my current degree in 2021.
In my free time I enjoy watching horror movies, reading, listening to music, and spending time with my friends and family. 
        </div>
      </div>
    </div>
  </div></p> 
      </div>
    )
  }
}