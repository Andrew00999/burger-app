import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Shipment extends Component {

  static propTypes = {
    total: PropTypes.number
  }

  render() {
    const { total } = this.props
    const shipping = total > 0 && total < 500 ? 40 : 0
    const shippingNeon = shipping === 40
      ? <span className='font-effect-neon total_wrap-cheap'>{shipping} ₴</span>
      : <span>{shipping} ₴</span>

    return (
      <div className='total'>
        <div className='total_wrap'>
          <div>
            <div>Delivery: {total > 0 ? shippingNeon : null}</div>
            <div className='total_wrap-free'>
              {total < 500 ? `order more on ${500 - total} ₴ for free shipping` : null}
            </div>
          </div>
          <div className='total_wrap-final'>Total: {total} ₴</div>
        </div>
      </div>
    )
  }
}

export default Shipment