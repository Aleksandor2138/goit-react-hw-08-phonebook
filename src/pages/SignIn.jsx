import { useDispatch} from 'react-redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/authorization/requestAPI';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = async data => dispatch(logIn(data));

    return (
        <section>
            <h2>Sign in to PhoneBook</h2>
            <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        {...register('email')}
                        required
                        placeholder="NickName@gmail.com"
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        {...register('password')}
                        required
                    />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </section>
    )
}
export default SignIn;