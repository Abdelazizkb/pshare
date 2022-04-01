import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function Appointements() {

  const customers = [
    {
      id: '0',
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      hour: '12:15',
      spent: '$2,890.66',
    },
    {
      id: '1',
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      hour: '12:30',
      spent: '$2,767.04',
    },
    {
      id: '2',
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      hour: '12:45',
      spent: '$2,996.00',
    },
    {
      id: '3',
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      hour: '13:00',
      spent: '$1,220.66',
    },
    {
      id: '1',
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      hour: '12:30',
      spent: '$2,767.04',
    },
    {
      id: '2',
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      hour: '12:45',
      spent: '$2,996.00',
    },
  ];

  return (
    <div className="h-80  xl:w-2/5 bg-white shadow-lg  border border-slate-200 rounded-xl">
      <header className="px-5 py-2 flex justify-between">
        <h2 className="font-semibold text-slate-600">Appointements</h2>
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
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-1 px-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Hour</div>
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
                          <div className="font-medium text-slate-800">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-bgreen">{customer.hour}</div>
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

export default Appointements;
