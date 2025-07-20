import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './MainLayout.module.css';

const MainLayout: React.FC = () => {
  return (
	<div className={style.main}>
	  <h2>Header</h2>
	  <Outlet/>
	</div>
  );
};

export default MainLayout;