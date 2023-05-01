import React, { useState } from 'react'

import { useRouter } from 'next/router';
import { useLazyQuery, useMutation } from '@apollo/client';
import Link from '@/components/shared/Link';
import { Select, Option } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { GUEST_BY_TOKEN, GUEST_BY_TOKEN_AWS } from '@/graphql/viewer/queries';
import useGuest from '@/store/hooks/useGuest'
import * as Yup from 'yup';

function Authentication() {
  const router = useRouter()
  const { state: { token }, setGuest } = useGuest()
  const [GuestByToken, { data, loading, error }] = useLazyQuery(GUEST_BY_TOKEN);


  const [verifCaptcha,] = useState(true)
  /*   const setVerifCaptchaHandler = (token: string) => {
      console.log({ token })
      setVerifCaptcha(token)
    } */
  const formik = useFormik({
    initialValues: {
      viewer: '',
      token: '',
    },
    validationSchema: Yup.object().shape({
      viewer: Yup.string().email('Enter a valid email').required('Email is required'),
      teoken: Yup.string().min(5, 'Password should be of minimum 5 characters length').required('Password is required'),
    }),
    onSubmit: async (values) => {
      const { viewer, token } = values;
      if (verifCaptcha) {
        try {
          GuestByToken({
            variables: { token, viewer }
          })

        } catch (error: unknown) {
          toast.error(`Error SignIn With email ${error}`);
        }
      } else {
        toast.info('please check recaptcha to proceed')
      }
    }
  })
  return (
    <form method='POST' onSubmit={formik.handleSubmit} >
      <div className="w-72">
        <Select
          size="lg"
          label="Select Country"
          selected={(element) =>
            element &&
            React.cloneElement(element, {
              className: "flex items-center px-0 gap-2 pointer-events-none",
            })
          }
        >
          {countries.map(({ name, flags }) => (
            <Option key={name} value={name} className="flex items-center gap-2">
              <img
                src={flags.svg}
                alt={name}
                className="h-5 w-5 rounded-full object-cover"
              />
              {name}
            </Option>
          ))}
        </Select>
      </div>
      <div className='flex justify-center  rounded-md  space-x-5'  >
        <label htmlFor='token' className=' p-2 '> Token</label>
        <input type='text' id='token'
          onChange={formik.handleChange} name='token' className='border border-primary  rounded-md p-2  ' />
      </div>
      <div className=' flex justify-center  rounded-md space-x-5 '>
        <label htmlFor='viewer' className='mr-10'> Viewer</label>
        <input type='text'
          id='viewer'
          name='viewer' onChange={formik.handleChange}
          className='border border-primary rounded-md p-2 ' />
      </div>
      <div className=' flex justify-end  rounded-md space-x-5 '>
        <button className='bg-primary rounded text-white  px-7 py-3 font-thin text-xl  '> signin For free</button>
      </div>
      <hr />
    </form>
  )
}

export default Authentication