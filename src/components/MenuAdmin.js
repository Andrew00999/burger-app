import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddForm from './AddForm'
import EditBurgerForm from './EditBurgerForm'
import firebase from 'firebase/app'

class MenuAdmin extends Component {

  state = {
    photo: '',
    user: ''
  }

  static propTypes = {
    burgers: PropTypes.object,
    updateBurger: PropTypes.func,
    deleteBurger: PropTypes.func,
    addBurger: PropTypes.func,
    loadSampleBurger: PropTypes.func
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user })
      }
    })
  }

  authHandler = async authData => {
    const { email, photoURL } = authData.user
    this.setState({ user: email, photo: photoURL })
  }

  render() {
    const { user, photo } = this.state
    const avatar = photo ? photo : '/images/avatar.png'

    return (
      <div className='menu-admin'>

        {user ? (<div className='login-header'>
          <div className='avatar'>
            <img src={avatar} alt={user} />
          </div>
          <button className='buttonLogout' onClick={this.props.handleLogot}>log out</button>
        </div>) : null}

        <h2>Menu control</h2>
        {Object.keys(this.props.burgers).map(key => {
          return (
            <EditBurgerForm
              key={key}
              index={key}
              burgers={this.props.burgers[key]}
              updateBurger={this.props.updateBurger}
              deleteBurger={this.props.deleteBurger}
            />
          )
        })}
        <AddForm addBurger={this.props.addBurger} />
        <button onClick={this.props.loadSampleBurger}>Download burgers</button>
      </div>
    )
  }
}

export default MenuAdmin