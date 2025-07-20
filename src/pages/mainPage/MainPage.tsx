import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../app/router/utils';
import style from './MainPage.module.css';

const MainPage: React.FC = () => {
  return (
	<div className={style.main}>
		<div>
			<h1>Welcome to the ArcanumAI</h1>
			<p>To make a Tarot spread and get explanations powered by artificial intelligence, sign up in the app.</p>
		</div>
	  <Link to={ROUTES.auth.register}>REGISTER</Link>
	  <Link to={ROUTES.auth.login}>LOGIN</Link>
	  <Link to={ROUTES.spreads.threeCard}>Three Card</Link>
	</div>
  );
};

export default MainPage;