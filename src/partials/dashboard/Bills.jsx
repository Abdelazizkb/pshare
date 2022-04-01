import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function Bills() {

  const customers = [
    {
      id: '0',
      email: 'alexshatov@gmail.com',
      amount: '1500',
    },
    {
      id: '1',
      email: 'philip.h@gmail.com',
      amount: '1500',
    },
    {
      id: '2',
      email: 'mirkofisuk@gmail.com',
      amount: '1500',
    },
    {
      id: '3',
      email: 'olga.s@cool.design',
      amount: '1500',
    },
    {
      id: '1',
      email: 'philip.h@gmail.com',
      amount: '1500',
    },
  ];

  return (
    <div className=" h-72 col-span-full xl:w-96 bg-white shadow-lg  border border-slate-200 rounded-xl">
      <header className="px-5 py-2 flex justify-between">
        <h2 className="font-semibold text-slate-600">Bills</h2>
        <div className="font-semibold bg-bgreen text-sm text-white py-1 px-3 rounded-md hover:cursor-pointer">Browse all</div>
      </header>
      <div className="p-2">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Id</div>
                </th>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Amount</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800">{customer.id}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-bgreen">{customer.amount}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default Bills;
