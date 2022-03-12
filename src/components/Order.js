import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shipment from './Shipment'


class Order extends Component {

  static propTypes = {
    burgers: PropTypes.object,
    order: PropTypes.object,
    deleteFromOrder: PropTypes.func
  }


  renderOrder = (key) => {
    const burger = this.props.burgers[key]
    const count = this.props.order[key]

    const isAvailable = burger && burger.status === 'available'

    if (!burger) return null

    if (!isAvailable) {
      return <li className='unavailable' key={key}>
        Sorry, {burger ? burger.name : 'burger'} is not available
      </li>
    }

    return (
      <li key={key}>
        <span>
          <span>{count} </span>
          things. {burger.name}
          <span> {count * burger.price} ₴</span>
          <button onClick={() => this.props.deleteFromOrder(key)} className='cancellTime'>&times;</button>
        </span>
      </li>
    )
  }



  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key]
      const count = this.props.order[key]

      const isAvailable = burger && burger.status === 'available'
      if (isAvailable) {
        return prevTotal + burger.price * count
      }
      return prevTotal
    }, 0)

    return (
      <div style={{ overflowY: 'scroll' }} className='order-wrap'>
        <h2>Your order</h2>
        <ul className='order'>
          {orderIds.map(this.renderOrder)}
        </ul>

        {total > 0
          ? <Shipment total={total} />
          : (
            <div style={{ color: 'red' }} className='nothingSelected'>
              you haven't ordered <br /> anything yet
            </div>
          )}
      </div>
    )
  }
}

export default Order