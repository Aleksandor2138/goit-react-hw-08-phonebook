import { useDispatch} from 'react-redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from 'redux/authorization/requestAPI';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = async data => dispatch(signUp(data));

    return (
        <section>
            <h2>Would you like to register?</h2>
            <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>Name</p>
                    <input
                        type="name"
                        {...register('name')}
                        required
                        placeholder="NickName"
                    />
                </label>
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
                        minLength="5"
                        maxLength="12"
                    />
                </label>
                <button type="submit">register</button>
            </form>
        </section>
    )
}
export default SignUp;