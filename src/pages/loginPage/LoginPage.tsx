import React from 'react';

type LoginPageProps = object;

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
	<div className="LoginPage">
	  <h2>LoginPage</h2>
	  <form action="">
		<input type="email" placeholder="Email" />
		<input type="password" placeholder="Password" />
		<button type="submit">Login</button>
	  </form>
	</div>
  );
};

export default LoginPage;