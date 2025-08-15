import React from 'react';
import style from './MainPage.module.css';
import PageForSeo from '../pageForSEO/PageForSeo';

const MainPage: React.FC = () => {
  return (
	<div className={style.main}>
		<PageForSeo />
	</div>
  );
};

export default MainPage;