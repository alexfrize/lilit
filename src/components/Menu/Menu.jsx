import React, { Component } from 'react';
import logo from './images/logo.jpg';
import MenuIcons from './MenuIcons';
import menuItems from './menu-items';
import { loadGallery } from '../../redux/actions/imagesDataActions';
import { connect } from 'react-redux';

import './Menu.scss';

class Menu extends Component {
  state = {
    activeMenuItemIndex: 0,
    galleries: []
  };

  /* ************************************************** */

  constructor(props) {
    super(props);
    this.setActiveMenuIndex = this.setActiveMenuIndex.bind(this);
  }

  /* ************************************************** */

  setActiveMenuIndex(index) {
    this.props.loadGallery(menuItems[index]);

    this.setState({
      activeMenuItemIndex: index
    });
  }

  /* ************************************************** */

  renderMenuItems() {
    const getCSSClassName = index => {
      return index === this.state.activeMenuItemIndex ? 'active' : '';
    };

    let menuItemsJSX = menuItems.map((menuItem, index) => (
      <li key={`li-${menuItem}`}>
        <p
          onClick={() => this.setActiveMenuIndex(index)}
          className={getCSSClassName(index)}
        >
          {menuItem}
        </p>
      </li>
    ));

    return menuItemsJSX;
  }

  /* ************************************************** */

  render() {
    return (
      <div className="Menu">
        <div className="logo-container">
          <img src={logo} className="logo-img" alt="Lilit Grigoryants" />
        </div>
        <h1 className="menu-title">
          Lilit
          <span>Grigoryants</span>
        </h1>
        <nav className="menu-items">
          <ul>{this.renderMenuItems()}</ul>
        </nav>
        <MenuIcons />
      </div>
    );
  }
}

/* ************************************************** */

export default connect(
  null,
  { loadGallery }
)(Menu);
