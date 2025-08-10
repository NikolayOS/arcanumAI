import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './MainLayout.module.css';
import logo from '../../assets/logo.jpg'

const MainLayout: React.FC = () => {
  return (
	<div className={style.main}>
	<div className={style.header}>
	<img src={logo} alt="logo"  className={style.logo}/>
	<h2>ArcanumAI</h2>
	</div>
		
	  <Outlet/>
	</div>
  );
};

export default MainLayout;