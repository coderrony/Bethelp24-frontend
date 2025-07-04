'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

function LoginPage() {
  // const handleSubmit = () => {};

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800  p-2 '>
      <Tabs defaultValue='account' className='max-w-lg mx-auto  mt-20'>
        <TabsList>
          <TabsTrigger className='border border-gray-200' value='account'>
            Login
          </TabsTrigger>
          <TabsTrigger className='border border-gray-200 ml-2' value='password'>
            Forget Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value='account' >
          <form className='bg-white/90 rounded-xl shadow-2xl p-8 w-full '>
            <h1 className='text-lg font-bold text-center text-indigo-700 mb-6'>
              Login Your Account
            </h1>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2'>
                Name
              </label>
              <input
                type='text'
                required
                // value={name}
                // onChange={e => setName(e.target.value)}
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2'>
                Phone Number
              </label>
              <input
                type='tel'
                required
                // value={phone}
                // onChange={e => setPhone(e.target.value)}
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
                placeholder='Enter your phone number'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 rounded-lg transition'
            >
              Join Now
            </button>
            <div className='mt-4 text-center'>
                <span className='text-gray-600'>Have not an account? </span>
              <Link
                href='/join'
                className='text-indigo-700 font-semibold hover:underline'
              >
                Join
              </Link>
            </div>
          </form>
        </TabsContent>
        <TabsContent value='password' >
          <form className='bg-white/90 rounded-xl shadow-2xl p-8 w-full '>
            <h1 className='text-lg font-bold text-center text-indigo-700 mb-6'>
              Forget Your Password
            </h1>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2'>
                Name
              </label>
              <input
                type='text'
                required
                // value={name}
                // onChange={e => setName(e.target.value)}
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
                placeholder='Enter your name'
              />
            </div>
     
            <button
              type='submit'
              className='w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 rounded-lg transition'
            >
              Join Now
            </button>
            <div className='mt-4 text-center'>
              <span className='text-gray-600'>Have not an account? </span>
              <Link
                href='/join'
                className='text-indigo-700 font-semibold hover:underline'
              >
                Join
              </Link>
            </div>
          </form>
        </TabsContent>

      </Tabs>
    </div>
  );
}

export default LoginPage;
