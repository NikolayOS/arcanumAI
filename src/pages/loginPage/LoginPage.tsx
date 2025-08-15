import React from 'react';
import { useForm } from 'react-hook-form';
import style from './LoginPage.module.css';

type LoginPageProps = object;

const LoginPage: React.FC<LoginPageProps> = () => {

	const { 
		register, 
		handleSubmit, 
		formState: { errors }
	} = useForm<{ password: string; login: string }>();

	const onSubmit = (data: { password: string; login: string }) => { console.log(data); };
  return (
	<div>
	  <form action="" onSubmit={handleSubmit(onSubmit)} className={style.main}>
		<label>
			Login
		<input {...register("login", {
			required: "Login is required",
			minLength: {
				value: 3,
				message: "Login must be at least 3 characters long"
			}
		})}/>
		{errors.login && <span className={style.error}>{errors.login.message}</span>}
		</label>
		<label>
			Password
		<input type="password" {...register("password", {
			required: "Password is required",
			minLength: {
				value: 6,
				message: "Password must be at least 6 characters long"
			}
		})} />
		{errors.password && <span className={style.error}>{errors.password.message}</span>}
		</label>
		<button type="submit" className={style.button}>Login</button>
	  </form>
	</div>
  );
};

export default LoginPage;