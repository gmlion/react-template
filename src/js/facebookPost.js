import React from 'react';

export default class FacebookPost extends React.Component {
  render() {
    return(
      <li className="facebook-post">
        <div className="card">
          <div className="image-container">
            <img src={this.props.picture} />
          </div>
          <div className="card-section">
            <p>{this.props.children}</p>
          </div>
        </div>
      </li>
    );
  }
}
