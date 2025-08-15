import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../app/router/utils';
import style from './MenuPage.module.css';
import { useEffect } from "react";


interface MenuPageProps {
	  isMenuOpen: boolean;
	  toggleMenu: () => void;
}


const MenuPage = (props: MenuPageProps ) => {

  useEffect(() => {
    if (props.isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [props.isMenuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
  if ((e.target as HTMLElement).tagName === 'A') {
    props.toggleMenu();
  }
}

  return (
	<div className={props.isMenuOpen ? style.open : style.close}>
	  <ul className={style.menu} onClick={handleClick}>
		<li><Link to={ROUTES.main}>Home Page</Link></li>
		<li><Link to={ROUTES.auth.login}>LOGIN</Link></li>
		<li><Link to={ROUTES.auth.register}>REGISTER</Link></li>
		<li><Link to={ROUTES.spreads.threeCard}>Spred</Link></li>
	  </ul>
	</div>
  );
};

export default MenuPage;