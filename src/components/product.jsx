import React, { Component } from 'react';
import '../assets/styles/product.css';
import * as Mui from '@mui/icons-material';

class Product extends Component {
  state = {};
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  };
  render() {
    return (
      <div className="blaa">
        <div className="item">
          <div className="image">
            <img
              className="p-img"
              src={this.props.productImageUrl}
              alt="main img"
            />
          </div>
          <div className="centered-card">
            <div className="header">
              <button onClick={this.handleUpVote}>
                Vote
                <i>
                  <Mui.ArrowDropUp />
                </i>
              </button>
              {this.props.votes}
            </div>

            <div className="description">
              <a href={this.props.url}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
            <div className="extra">
              <span>Submitted by:</span>
              <img
                className="avatar-img"
                src={this.props.submitterAvatarUrl}
                alt="main img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
