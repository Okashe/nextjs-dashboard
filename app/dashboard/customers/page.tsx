import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateCustomer } from '@/app/ui/invoices/buttons';
import { inter } from '@/app/ui/fonts';
import { CustomersTableSkeleton, InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import {fetchCustomersPages } from '@/app/lib/data';
import { Metadata } from 'next';
 
 export const metadata: Metadata = {
    title: 'Customers',
 };

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);


  return (
    <div className="w-full">
      <Suspense key={query + currentPage}  fallback={<CustomersTableSkeleton/>}>
           <Table query={query} currentPage = { currentPage } />
      </Suspense>
     
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}