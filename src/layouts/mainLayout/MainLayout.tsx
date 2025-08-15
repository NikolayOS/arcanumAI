import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './MainLayout.module.css';
import logo from '../../assets/logo.jpg';
import MenuToggle from '../../components/menuToggle/MenuToggle';
import MenuPage from '../../pages/menuPage/MenuPage';

const MainLayout: React.FC = () => {

const [isMenuOpen, setIsMenuOpen] = React.useState(false);

const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}

  return (
	<div className={style.main}>
	<div className={style.header}>
	<img src={logo} alt="logo"  className={style.logo}/>
	<MenuToggle {...{toggleMenu,isMenuOpen}} />
	</div>
	<MenuPage {...{toggleMenu,isMenuOpen}}/>
	  <Outlet/>
	</div>
  );
};

export default MainLayout;