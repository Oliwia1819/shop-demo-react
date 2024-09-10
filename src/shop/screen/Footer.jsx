import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartItemsContext } from '../Cart';
import Menu from './Menu';

export default function Footer() {
  const items = useContext(CartItemsContext);
  return (
    <footer>
      <NavLink to="/" className={'footer_button'}><Button icon='/img/catalog-active.svg' title='Catalog' active /></NavLink>
      <NavLink to="/cart"  className={'footer_button'}><Button icon='/img/cart.svg' title='Cart' badge={items.length === 0 ? undefined : items.length} /></NavLink>
      <Menu />
    </footer>
  );
}

export function Button({icon,title, badge}){
  return <React.Fragment>
    {badge && <span className="badge rounded-pill text-bg-danger">{badge}</span>}
    <img src={icon} />
    <h6>{title}</h6>
  </React.Fragment>
}