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

interface LoginFormProps {
	onComplete?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onComplete }) => {
	const dispatch = useAppDispatch();
	const {
		setError,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormSchema>({
		resolver: yupResolver(loginFormSchema),
	});

	const onSubmit = (data: LoginFormSchema) => {
		dispatch(loginAsync(data))
			.unwrap()
			.then(() => {
				if (onComplete) onComplete();
			})
			.catch((error: { message: string }) => {
				setError("password", {
					message: error.message,
				});
			});
	};

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
