import React, { Component } from 'react';
import logo from './images/logo.jpg';
import MenuIcons from './MenuIcons';
import menuItems from './menu-items';
import { loadGallery } from '../../redux/actions/imagesDataActions';
import { connect } from 'react-redux';

import './Menu.scss';

interface IMenu {
  loadGallery(loadGallery: string): any;
}

class Menu extends Component<IMenu> {
  state = {
    activeMenuItemIndex: 0,
    galleries: []
  };

  /* ************************************************** */

  constructor(props: IMenu) {
    super(props);
    this.setActiveMenuIndex = this.setActiveMenuIndex.bind(this);
  }

  /* ************************************************** */

  setActiveMenuIndex(index: number) {
    this.props.loadGallery(menuItems[index].fileName);

    this.setState({
      activeMenuItemIndex: index
    });
  }

  /* ************************************************** */

  renderMenuItems() {
    const getCSSClassName = (index: number) => {
      return index === this.state.activeMenuItemIndex ? 'active' : '';
    };

    let menuItemsJSX = menuItems.map((menuItem, index) => (
      <li key={`li-${menuItem.name}`}>
        <p
          onClick={() => this.setActiveMenuIndex(index)}
          className={getCSSClassName(index)}
        >
          {menuItem.name}
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
