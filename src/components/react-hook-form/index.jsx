import React from 'react';
import { useForm } from 'react-hook-form';

export const Hookform = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>username</label>

        <input
          {...register('username', {
            required: 'username is required',
          })}
        />
        <p style={{ color: 'red' }}>{errors.username?.message}</p>
        <label>email</label>

        <input
          {...register('email', {
            required: 'email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: 'Enter valid email',
            },
          })}
        />
        <p style={{ color: 'red' }}>{errors.email?.message}</p>

        <label>password</label>
        <input
          {...register('password', {
            required: 'password is required',
            minLength: {
              value: 6,
              message: 'Password at least 6 symbols',
            },
            pattern: {
              value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )$/,
              message: 'Enter valid password',
            },
          })}
        />
        <p style={{ color: 'red' }}>{errors.password?.message}</p>

        <label>passwordConfirm</label>
        <input
          {...register('passwordConfirm', {
            required: 'confirm password',

            validate: (val) => {
              if (watch('password') != val) {
                return 'Your passwords do no match';
              }
            },
          })}
        />
        <p style={{ color: 'red' }}>{errors.passwordConfirm?.message}</p>

        <label>date of birth</label>
        <input
          type="date"
          {...register('date', {
            required: 'Enter your birthday',
          })}
        />
        <p style={{ color: 'red' }}>{errors.date?.message}</p>

        <label>Пол:</label>
        <div>
          <label>
            <input
              type="radio"
              {...register('gender', { required: 'Выберите пол' })}
              value="male"
            />
            Мужской
          </label>
          <label>
            <input
              type="radio"
              {...register('gender', { required: 'Выберите пол' })}
              value="female"
            />
            Женский
          </label>
        </div>
        <p style={{ color: 'red' }}>{errors.gender?.message}</p>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};
