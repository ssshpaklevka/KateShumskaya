'use client';

import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { sendEmail } from '@/src/shared/lib/resend';

type FormInputs = {
  name: string;
  email: string;
  description: string;
};

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const result = await sendEmail(data.name, data.email, data.description);

      if (result.success) {
        toast.success('Успешно отправлено!', {
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        });
        reset();
      } else {
        toast.error(result.error || 'Ошибка при отправке', {
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        });
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Произошла ошибка при отправке',
      );
    }
  };

  return (
    <>
      <form
        className="flex flex-col xl:flex-row w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col xl:w-1/4">
          <div className="relative w-full h-full xl:h-1/2">
            <input
              {...register('name', {
                required: 'Имя обязательно для заполнения',
                minLength: {
                  value: 2,
                  message: 'Имя должно содержать минимум 2 символа',
                },
                maxLength: {
                  value: 50,
                  message: 'Имя не должно превышать 50 символов',
                },
              })}
              type="text"
              placeholder="Name"
              className={`text-center bg-black border-l border-r border-t xl:border-r-0 xl:border-b text-white text-[16px] sm:text-[24px] sm:leading-[33px] lg:text-[40px] lg:leading-[55px] xl:text-[24px] xl:leading-[33px] 3xl:text-[30px] 3xl:leading-[42px] font-light placeholder:text-white/50 border-white w-full h-[160px] lg:h-[430px] xl:h-full outline-none appearance-none ${
                errors.name ? 'border-red-500' : 'border-white'
              }`}
              style={{ borderRadius: 0 }}
            />
            {errors.name && (
              <span className="absolute bottom-2 left-0 right-0 text-red-500 text-sm text-center">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="relative w-full h-full xl:h-1/2">
            <input
              {...register('email', {
                required: 'Email обязателен для заполнения',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Пожалуйста, введите корректный email адрес',
                },
              })}
              type="email"
              placeholder="Mail"
              className={`text-center bg-black text-white text-[16px] sm:text-[24px] sm:leading-[33px] lg:text-[40px] lg:leading-[55px] xl:text-[24px] xl:leading-[33px] 3xl:text-[30px] 3xl:leading-[42px] font-light placeholder:text-white/50 border xl:border-r-0 xl:border-t-0 xl:border-b w-full h-[160px] lg:h-[430px] xl:h-full outline-none appearance-none ${
                errors.email ? 'border-red-500' : 'border-white'
              }`}
              style={{ borderRadius: 0 }}
            />
            {errors.email && (
              <span className="absolute bottom-2 left-0 right-0 text-red-500 text-sm text-center">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="relative w-full xl:w-2/4 flex">
          <textarea
            {...register('description', {
              required: 'Description обязателен для заполнения',
            })}
            placeholder="Application Description"
            className={`
    flex items-center pt-5 pl-5
    text-left bg-black text-white 
    text-[16px] sm:text-[24px] sm:leading-[33px] 
    lg:text-[40px] lg:leading-[55px] 
    xl:text-[24px] xl:leading-[33px] 
    3xl:text-[30px] 3xl:leading-[42px] 
    font-light 
    placeholder:absolute placeholder:top-1/2 placeholder:left-1/2 
    placeholder:-translate-x-1/2 placeholder:-translate-y-1/2
    placeholder:w-full placeholder:text-center
    placeholder:text-white/50
    border w-full 
    h-[160px] lg:h-[430px] xl:h-[275px] 2xl:h-[330px] 3xl:h-[423px] 
    outline-none appearance-none resize-none
    ${errors.description ? 'border-red-500' : 'border-white'}
  `}
            style={{ borderRadius: 0 }}
          />
          {errors.description && (
            <span className="absolute bottom-2 left-0 right-0 text-red-500 text-sm text-center">
              {errors.description.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-center bg-white text-[16px] sm:text-[24px] sm:leading-[33px] lg:text-[40px] lg:leading-[55px] xl:text-[24px] xl:leading-[33px] 3xl:text-[30px] 3xl:leading-[42px] font-light placeholder:text-white/50 border border-white w-full xl:w-1/4 h-[160px] lg:h-[430px] xl:h-[275px] 2xl:h-[330px] 3xl:h-[423px] outline-none text-black appearance-none transition-opacity hover:opacity-90 disabled:opacity-70"
          style={{ borderRadius: 0 }}
        >
          {isSubmitting ? 'Отправка...' : 'Send'}
        </button>
      </form>
    </>
  );
};

export default Form;
