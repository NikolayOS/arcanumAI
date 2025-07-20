import React from 'react';

type RegisterPageProps = object;

const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
	<div className="RegisterPage">
	  <h2>RegisterPage</h2>
	   <form action="">
		<input type="email" placeholder="Email" />
		<input type="password" placeholder="Password" />
		<button type="submit">Register</button>
	  </form>
	</div>
  );
};

export default RegisterPage;