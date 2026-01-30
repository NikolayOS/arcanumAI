import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './LoginPage.module.css';
import axios, { AxiosError } from 'axios';
import type { ApiError } from '@google/genai';
import { useNavigate } from 'react-router-dom';

type LoginPageProps = object;

const LoginPage: React.FC<LoginPageProps> = () => {

	const navigate = useNavigate();
	const [showErr, setShowErr] = useState<string>("");

	const { 
		register, 
		handleSubmit,
		reset,
	} = useForm<{ password: string; login: string }>();

	const onSubmit = async (data: { password: string; login: string }) => {

		try {
			const res = await axios.post('http://localhost:3000/login', {
			login: data.login,
			password: data.password
		})
				console.log(res.data);
		console.log(res.data.message);
		navigate('/three-card');
				setShowErr("");
	} catch (error) {
		const err = error as AxiosError<ApiError>;
		if (err.response?.status === 400) {
			setShowErr('Invalid login or password');
  }
		}
		reset();
		};
  return (
	<div>
	  <form action="" onSubmit={handleSubmit(onSubmit)} className={style.main}>
		{showErr && <span className={style.error}>{showErr}</span>}
		<label>
			Login
		<input {...register("login", {
			required: "Login is required",
		})}/>
		</label>
		<label>
			Password
		<input type="password" {...register("password", {
			required: "Password is required",
		})} />
		</label>
		<button type="submit" className={style.button}>Login</button>
	  </form>
	</div>
  );
};

export default LoginPage;