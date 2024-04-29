'use client'
import { CustomerField } from '@/app/lib/definitions';

import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { useState } from 'react';

export default function Form({ customers }: { customers: CustomerField[] }) {
//   const initialState = { message: null, errors: {} };
//   const [state, dispatch] = useFormState(createCustomer, initialState);

const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email:'',
    image:''
  });
  const [file, setFile] = useState<File>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    // Perform any other client-side actions here
  };

  return (
    <>

<form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer First Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Enter Name
          </label>
          <div className="relative">
          <input
                id="firstName"
                name="firstname"
                type="text"
                value={formData.firstname}
                step="0.01"
                onChange={handleChange}
                placeholder="Enter First Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='customer-error'
             />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {/* Error */}
          </div>
        </div>

        {/* Customer Last Name */}
        {/* <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Last Name
          </label>
          <div className="relative">
          <input
                id="lastName"
                name="lastname"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                step="0.01"
                placeholder="Enter Last Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='customer-error'
             />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
    Error
          </div>
        </div> */}

          {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative">
          <input
                id="email"
                name="email"
                type="text"
                step="0.01"
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter Email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='customer-error'
             />
             
            
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>


          <div id="customer-error" aria-live="polite" aria-atomic="true">
          {/* Error */}
          </div>
        </div>

          {/* Customer image */}
          <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Profile Image
          </label>
          <div className="relative">
          <input
                id="profile"
                name="image_url"
                type='file'
                step="0.01"
                accept='image/*'
                onChange={handleFileChange}
                value={formData.image[0]}
                placeholder="Upload profile image"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='customer-error'
             />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
          {/* Error */}
          </div>
        </div>

        </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
        //   href="/dashboard/customers"
        href=''
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Customer</Button>
      </div>
    </form>
      <p>{formData.firstname}</p>
      <p>{formData.lastname}</p>
      <p>{formData.email}</p>
      <p>{file?.name}</p>
    </>
    
  );
}
