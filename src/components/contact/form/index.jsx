import React from "react";

import './style.scss';
import {send} from 'emailjs-com';
import {useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//service id service_rpu4rco
//template id  template_0uk9xud
//public key X7ly2ub0tEbCVkdEw

const Form = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    send(
      'service_rpu4rco',
      'template_0uk9xud',
      data,
      'X7ly2ub0tEbCVkdEw'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      formSuccess();
    }).catch((err) => {
      console.log("FAILED...", err);
    });
  };

  const formSuccess = () => {
    toast('Thanks for submitting your Query!');
    document.getElementById('queryForm').reset();
  }

  return (
    <div className={'query-form'}>
      <ToastContainer/>

      <form
        id={'queryForm'}
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className={'input-field'}>
          <input
            type={'text'}
            name={'from_name'}
            placeholder={'Name'}
            {...register('from_name', {
              required: 'Name is required'
            })}
          />
          {errors.from_name?.message && (
            <p className={'errors'}>{errors.from_name?.message}</p>
          )}
        </div>

        <div className={'input-field'}>
          <input
            type={'text'}
            name={'reply_to'}
            placeholder={'Email'}
            {...register('reply_to', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.reply_to?.message && (
            <p className={'errors'}>{errors.reply_to?.message}</p>
          )}
        </div>


        <div className={'input-field'}>
          <input
            type={'text'}
            name={'phone_number'}
            placeholder={'Phone'}
            {...register('phone_number', {
              required: 'Phone number is required',
              minLength: {
                value: 8,
                message: 'Phone number is not valid'
              }
            })}
          />
          {errors.phone_number?.message && (
            <p className={'errors'}>{errors.phone_number?.message}</p>
          )}
        </div>


        <div className={'input-field'}>
          <input
            type={'text'}
            name={'subject'}
            placeholder={'Subject'}
            {...register('subject', {
              required: 'Subject is required',
              minLength: {
                value: 10,
                message: 'Minimum 10 characters required'
              }
            })}

          />
          {errors.subject?.message && (
            <p className={'errors'}>{errors.subject?.message}</p>
          )}
        </div>

        <div className={'input-field full-width'}>
          <textarea
            className={'textarea'}
            name={'message'}
            placeholder={'your message'}
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 20,
                message: 'Minimum 20 characters required'
              },
              maxLength: {
                value: 500,
                message: 'Maximum 100 characters required'
              }
            })}

          />
          {errors.message?.message && (
            <p className={'errors'}>{errors.message?.message}</p>
          )}
        </div>

        <button type={'submit'}>Submit</button>

      </form>
    </div>
  )
}
export default Form;
