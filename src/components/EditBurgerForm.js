import React, { Component } from 'react'
import PropTypes from 'prop-types'


class EditBurgerForm extends Component {

  static propTypes = {
    burger: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string
    }),
    index: PropTypes.string,
    updateBurger: PropTypes.func,
    deleteBurger: PropTypes.func
  }

  handleChange = (event) => {
    const updatedBurger = {
      ...this.props.burger,
      [event.currentTarget.name]: event.currentTarget.name === 'price'
        ? +event.currentTarget.value || 0
        : event.currentTarget.value
    }

    this.props.updateBurger(this.props.index, updatedBurger)
  }

  render() {
    return (
      <div className='burger-edit'>
        <input onChange={this.handleChange} name='name' type='text' value={this.props.burgers.name} />
        <input onChange={this.handleChange} name='price' type='text' value={this.props.burgers.price} />
        <select onChange={this.handleChange} name='status' type='text' className='status' value={this.props.burgers.status}>
          <option value='available'>Available</option>
          <option value='unavailable'>Unavailable</option>
        </select>
        <textarea onChange={this.handleChange} style={{ resize: 'none' }} name='desc' value={this.props.burgers.desc} />
        <input onChange={this.handleChange} name='image' type='text' value={this.props.burgers.image} />
        <button onClick={() => this.props.deleteBurger(this.props.index)}>Delete from list</button>
      </div>
    )
  }
}


export default EditBurgerForm