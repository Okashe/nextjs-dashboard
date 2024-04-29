import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { inter } from '@/app/ui/fonts';
import {fetchLatestInvoices, fetchCardData, getUser, fetchUsername } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
 import Image from 'next/image';
import { SessionProvider, useSession } from 'next-auth/react';
import { string } from 'zod';



 export const metadata: Metadata = {
    title: 'Dashboard',
 };


export default async function Page() {
  const User = await fetchUsername('okasha@gmail.com')

  return (
   
       <main>
      <div className='flex justify-between'>
        <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <span className='flex flex-col gap-1 items-center'>
            <Image alt='user image' width={14} height={14} src='https://tse3.mm.bing.net/th?id=OIP.lkVN1WDlcV2jQCq-9LT7-wHaIJ&pid=Api&P=0&h=180'/>
            <span>{User.name}</span>
        </span>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardSkeleton/>}>
         <CardWrapper/>
      </Suspense> 

      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
       <Suspense fallback={ <LatestInvoicesSkeleton />}>
          <LatestInvoices/>
        </Suspense> 
      </div>
    </main>
   
    
  );
}