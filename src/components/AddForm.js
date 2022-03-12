import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'


class AddForm extends Component {

  static propTypes = {
    addBurger: PropTypes.func
  }


  nameRef = createRef()
  priceRef = createRef()
  statusRef = createRef()
  descRef = createRef()
  imageRef = createRef()

  createBurger = (e) => {
    e.preventDefault()

    const burger = {
      name: this.nameRef.current.value,
      price: +this.priceRef.current.value || 0,
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    }
    this.props.addBurger(burger)
    e.currentTarget.reset()
  }

  render() {
    return (
      <form className='burger-edit' onSubmit={this.createBurger}>
        <input ref={this.nameRef} name='name' type='text' placeholder='Name' autoComplete='off' />
        <input ref={this.priceRef} name='price' type='text' placeholder='Price' autoComplete='off' />

        <select ref={this.statusRef} name='status' className='status'>
          <option value='available'>Available</option>
          <option value='unavailable'>Remove from list</option>
        </select>

        <textarea ref={this.descRef} style={{ resize: 'none' }} name='desc' placeholder='Description' />
        <input ref={this.imageRef} name='image' type='text' placeholder='Image' autoComplete='off' />

        <button type='submit'>Add in List</button>
      </form>
    )
  }
}

export default AddForm