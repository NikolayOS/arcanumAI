import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import style from './RegisterPage.module.css';
import axios from 'axios';
type RegisterPageProps = object;

const RegisterPage: React.FC<RegisterPageProps> = () => {
	const { 
		register, 
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<{ password: string; login: string; email: string }>();
	const [serverError, setServerError] = useState('');


	const onSubmit = async (data: { password: string; login: string; email: string }) => {
			try {
		const res = await axios.post('https://arcanum-ai.vercel.app/register', {
			login: data.login,
			email: data.email,
			password: data.password
		})
				console.log(res.data.message);
				setServerError('');
		 reset();
			}catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setServerError(error.response?.data?.message || 'Ошибка от сервера');
      } else if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError('Неизвестная ошибка');
      }
	  console.log(serverError);
    }
			};
  return (
	<div>
	  <form noValidate action="" onSubmit={handleSubmit(onSubmit)} className={style.main}>
		<label>
			Login
		<input {...register("login", {
			required: "Login is required",
			minLength: {
				value: 3,
				message: "Login must be at least 3 characters long"
			}
		})}/>
		{errors.login && <span className={style.error}>{errors.login.message}</span> || serverError === 'Login is already to use' && <span className={style.error}>{serverError}</span>}
		</label>
		<label>
			Email
		<input type='email' {...register("email", {
			required: "Email is required",
			pattern: {
			value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			message: 'Uncorrect email address',
    },
		})}/>
		{errors.email && <span className={style.error}>{errors.email.message}</span> || serverError === 'Email is already to use' && <span className={style.error}>{serverError}</span>}
		</label>
		<label>
			Password
		<input type="password" {...register("password", {
			required: "Password is required",
			minLength: {
				value: 6,
				message: "Minimum 6 characters"
			}
		})} />
		{errors.password && <span className={style.error}>{errors.password.message}</span>}
		</label>
		<button type="submit" className={style.button}>Register</button>
		</form>
	</div>
);
};

export default RegisterPage;

