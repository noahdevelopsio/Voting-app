import React, { Component } from 'react';
import Product from './product';
import products from '../assets/data/product_data';

class ProductLList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({ products: products });
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  };
  render() {
    //sorting by vote count
    const products = this.state.products.sort((a, b) => b.votes - a.votes);

    //rendering all object in the product array
    const productComponent = products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));

    return <div className="">{productComponent}</div>;
  }
}

export default ProductLList;
