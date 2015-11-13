import React from 'react';
import FacebookPostsContainer from './facebookPostsContainer.js';

export default class Main extends React.Component {
  getFacebookTimeline() {
    //var promise = jQuery.get('https://graph.facebook.com/ladygaga/posts?fields=link,created_time,message,story,picture&access_token=983140035061062|3b2a28567ca8eec65c34258637fb12f8');
    FB.api(
      '/ristorantepierinopenati/posts',
      'GET',
      {"fields":"link,created_time,message,story,full_picture"},
      function(response) {
          // Insert your code here
          if (this.postCounter >= response.data.length)
            this.postCounter = 0;
          console.log(response);
          this.setState({
            data: response.data
          });
          jQuery('body').css('background-image', 'url(' + response.data[this.postCounter++].full_picture + ')');
      }.bind(this)
    );
    /*promise.done(function(receivedData){
      console.log(this.state);
      this.setState({
        data: receivedData.data
      });
    }.bind(this));*/
  }

  constructor(props) {
    super(props);
    this.postCounter = 0;
    this.state = {
      data: [
        {
          picture: '../img/facebook-logo.png',
          message: 'First Post'
        },
        {
          picture: '../img/facebook-logo.png',
          message: 'Second Post'
        },
        {
          picture: '../img/facebook-logo.png',
          message: 'Third Post'
        },
        {
          picture: '../img/facebook-logo.png',
          message: 'Fourth Post'
        },
        {
          picture: '../img/facebook-logo.png',
          message: 'Fifth Post'
        },
      ]
    };

    /*Functions binding*/
    this.getFacebookTimeline = this.getFacebookTimeline.bind(this);
    /*--*/

    /*State update*/
    window.setInterval(this.getFacebookTimeline, 3000);
    /*--*/
  }

  render() {
    return(
      <div className="main">
      <FacebookPostsContainer data={this.state.data}/>
      </div>
    );
  }
}
