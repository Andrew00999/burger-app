import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Burger extends Component {

  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
    }),
    index: PropTypes.string,
    addToOrder: PropTypes.func
  }

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available'

    return (
      <li className='menu-burger'>
        <div className='image-container'>
          <img src={image || 'https://beyondburger.com.ua/wp-content/uploads/2020/10/dsc_7552-scaled.jpg'} alt={name} />
        </div>

        <div className='burger-details'>
          <h3 className='burger-name'>
            {name}
            <span className='price'>{price} ₴</span>
          </h3>
          <p>{desc}</p>
          <button
            className='buttonOrder'
            disabled={!isAvailable}
            onClick={() => this.props.addToOrder(this.props.index)}
          >
            {isAvailable ? 'make an order' : 'temporarily absent'}
          </button>
        </div>
      </li>
    )
  }
}

export default Burger