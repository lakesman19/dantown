import React from 'react'
import { BsDot } from 'react-icons/bs'
import { FaCrown } from 'react-icons/fa'

const BottomMain = () => {
  const data = [
    {
      id: '1',
      name: 'Mamang Ironmen',
      category: 'skaters',
      points: '2.140',
      color: '#D9EDFF',
      icon : <FaCrown/>
    },
    {
      id: '2',
      name: 'Ariana Grande',
      category: 'cyclist',
      points: '1.814',
      color: '#FFDAD9',
    },
    {
      id: '3',
      name: 'Trent Alexander Arnold',
      points: '1.620',
      category: 'skaters',
      color: '#D9DAFF',
    },
    {
      id: '4',
      name: 'Shakira Wakawaka',
      category: 'yogas',
      points: '1.280',
      color: '#FFDAD9',
    },
  ]
  return (
    <div className='w-[100%] bg-[white] rounded-[15px] p-[10px] mb-5 md:mb-0'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[#0F3F62]'>Friends Rank</h1>
        <div className='flex text-[#0F3F62] text-xl'>
          <BsDot />
          <BsDot />
        </div>
      </div>
      <div className='overflow-auto w-[100%] '>
        <div className='overflow-x-scroll w-[90%]'>
          <table className=' w-[100%] table-auto border-separate border-spacing-y-4'>
            <thead className='text-light text-[#8695A0] capitalize text-sm'>
              <tr>
                <th className='p-2 '>Rank</th>
                <th className='p-2 w-[200px]'>Name</th>
                <th className='p-2'>category</th>
                <th>points</th>
              </tr>
            </thead>
            {data.map((item, index) => (
              <tbody>
                <tr className=''>
                  <td className='p-4'>{item.id}</td>
                  <td className='border-b p-2 flex items-center gap-x-2 w-[300px] '>
                    <div
                      className='h-[40px] w-[40px] rounded-full'
                      style={{ backgroundColor: item.color }}
                      key={index}
                    ></div>
                    <p>{item.name}</p>
                    <p>{item.icon}</p>
                  </td>
                  <td className='border-b p-2'>
                    <p
                      className='p-2 rounded-full flex items-center justify-center capitalize w-[100px] '
                      style={{
                        backgroundColor:
                          item.category === 'skaters'
                            ? '#E7F7F8'
                            : item.category === 'cyclist'
                            ? '#DAFDFF'
                            : item.category === 'yogas'
                            ? '#FFECE8'
                            : '#D9EDFF',
                      }}
                    >
                      <BsDot
                        className='text-[1rem]'
                        style={{
                          color:
                            item.category === 'skaters'
                              ? '#54BCBD'
                              : item.category === 'cyclist'
                              ? '#3DEBF6'
                              : item.category === 'yogas'
                              ? '#F4694C'
                              : '#D9EDFF',
                        }}
                      />

                      {item.category}
                    </p>
                  </td>
                  <td className='border-b p-2'>{item.points}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}

export default BottomMain
