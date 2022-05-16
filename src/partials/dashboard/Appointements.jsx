import React,{useEffect,useState} from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';


const test =[new Date('May 14, 2022 08:45:30'),  new Date('May 14, 2022 08:30:30'),
new Date('May 19, 2022 08:15:30'),new Date('August 19, 2022 08:30:30'),new Date('August 19, 2022 23:15:30'),
new Date('August 19, 2022 23:15:30'),new Date('May 17, 2022 23:15:30'),new Date('August 19, 2022 23:15:30'),
new Date('August 19, 2022 23:15:30'),new Date('August 19, 2022 23:15:30'),new Date('May 16, 2022 23:15:30'),
new Date('August 19, 2022 23:15:30'),new Date('May 19, 2022 16:30:30'),new Date('August 19, 2022 23:15:30'),
new Date('May 15, 2022 23:15:30'),new Date('August 19, 2022 23:15:30'),new Date('August 19, 2022 23:15:30'),
]


function Appointements() {
  const [today, setToday] = useState()
  const [monthDays, setMonthDays] = useState()
  const [lastWeek, setlastWeek] = useState([])

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

  const getAppointment=(day, month,year,days)=>{
    console.log(day,month,year,days)
    let filtered = days.filter(item=>{
        return item.getDate()===day && item.getMonth()===month && item.getFullYear()===year 
    })

    console.log("len",filtered.length);
    return filtered
  }

  useEffect(() => {
    let lWeek=[]
    for (let i = 0; i < 7; i++) {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate()+i);
      lWeek=[...lWeek,tomorrow]
    }
    setlastWeek(lWeek)
  }, [])


  return (
    <div className="h-72  w-11/12 bg-white shadow-lg  border border-slate-200 rounded-xl">
      <header className="px-5 py-2 flex justify-between">
        <h2 className="font-semibold text-slate-600">Rendez-vous</h2>
        <div className="font-semibold bg-bgreen text-sm text-white py-1 px-3 rounded-md hover:cursor-pointer">Browse all</div>
      </header>
      <div className="p-2">

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="table-auto w-full">
            {/* Table header */}
            <div className="text-xs font-semibold uppercase text-slate-400 ">
              <div className="w-full flex mb-3">
                {lastWeek.map((day,i)=>{
                  return (<th className=" px-2 flex-1">
                            <div className="font-semibold text-left text-center bg-slate-50 rounded-lg py-1 cursor-pointer">{day.getDate()}</div>
                          </th>)
                })}
              </div>
            </div>
            {/* Table body */}
            <div className="text-sm  flex">
                {lastWeek.map((day,i)=>{
                  let list= getAppointment(day.getDate(),day.getMonth(),day.getFullYear(),test)
                  return (
                    <div className="flex-1 flex flex-col items-center">
                      {list.map((day,i)=>{
                        return (
                          <div  className="w-5/6 text-center border-2 border-bgreen rounded-lg mb-1 cursor-pointer">
                              {day.getHours()+":"+day.getMinutes()}
                          </div>)})}

                    </div>)})}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Appointements;
