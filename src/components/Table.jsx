import React from 'react'
import { useData } from '../context/DataTableContext'

function Table({ isEditable }) { // สร้าง components ที่รับค่า prop เพื่อกำหนดให้มีสิทธิ์เข้าถึงการ ลบ ข้อมูล table ได้

    const { data, setData } = useData(); // รับข้อมูลมาจาก context

    const styleTable = 'border-b-2 p-5 text-center'; // เก็บค่าสำหรับปรับแต่ง style ให้แถวในตาราง

    const handleDelete = (index) => { // ฟังก์ชั่นปุ่มลบ
        setData([
            ...data.slice(0, index), 
            ...data.slice(index + 1)
        ]);
    };

    return (
        <div className='flex justify-center'>
        {data.length === 0? (<table className='hidden'></table>) : (
        <table className='border-collapse border border-gray-200 my-20 w-3/4 '>
            <thead>
                <tr>
                    <th className={styleTable}>Name</th>
                    <th className={styleTable}>Last Name</th>
                    <th className={styleTable}>Position</th>
                    {isEditable && (
                    <th className={styleTable}></th>
                    )}
                </tr>
            </thead>
            <tbody>
                 {data.map((item, index) =>
                    <tr key={index}>
                        <td className={styleTable}>{item.name}</td>
                        <td className={styleTable}>{item.lastName}</td>
                        <td className={styleTable}>{item.position}</td>
                        {isEditable && (
                        <td className={styleTable}><button onClick={() => handleDelete(index)} className='text-red-500'><i class="fa-solid fa-trash-can"></i></button></td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
        )}
        </div>
    )
}

export default Table
