import React from 'react';
import FacebookPost from './facebookPost.js';

export default class FacebookPostsContainer extends React.Component {
  render() {
    var defaultPicture = '../img/facebook-logo.png';
    return (
      <div className="facebook-posts-container row large-6 medium-12 columns small-centered">
        <ul className="large-block-grid-2">
          {this.props.data.map(function(post) {
            return (
              <FacebookPost picture={post.full_picture}>
                {post.message}
              </FacebookPost>
            );
          })}
        </ul>
      </div>
    );
  }
}
