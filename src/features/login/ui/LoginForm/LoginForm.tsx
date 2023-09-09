import css from "./LoginForm.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "shared/ui";
import {
	type LoginFormSchema,
	loginFormSchema,
} from "../../model/loginFormSchema";
import { useAppDispatch } from "shared/model";
import { loginAsync } from "entities/user";

export const LoginForm = () => {
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormSchema>({
		resolver: yupResolver(loginFormSchema),
	});

	const onSubmit = (data: LoginFormSchema) => dispatch(loginAsync(data));

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={css.form}>
			<div className={css.formblock}>
				<label htmlFor="login">Login</label>
				<input
					{...register("login")}
					id="login"
					type="text"
					className={css.input}
				/>
				<p className={css.error}>{errors.login?.message}</p>
			</div>
			<div className={css.formblock}>
				<label htmlFor="password">Password</label>
				<input
					{...register("password")}
					id="password"
					type="text"
					className={css.input}
				/>
				<p className={css.error}>{errors.password?.message}</p>
			</div>
			<Button type="submit" className={css.button} variant="blackWhite">
				Login
			</Button>
		</form>
	);
};
