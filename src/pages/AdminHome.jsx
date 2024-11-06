import React, { useState } from 'react'
import { useData } from "../context/DataTableContext";
import Table from "../components/Table";
import Main from '../components/Main';

function AdminHome() {
  // เก็บข้อความจากกล่อง input
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  // เก็บข้อมูลทั้งหมดในไว้ใน state data และ ส่งไปที่ context 
  const { data, setData } = useData();

  // set ค่า state data 
  const handleChange = (e) => {  // รับค่าจาก input
    const { name, value } = e.target; // เก็บค่า name, value จาก tag input
    if (name === "lastName") setLastName(value); // ดูเงื่อนไข ชื่อว่าตรงกับเงื่อนไขไหนให้ set ค่า state ตามเงื่อนไขของมัน
    else if (name === "name") setName(value);
    else if (name === "position") setPosition(value);
  };

  // เมื่อกดปุ่ม Save ข้อมูลใน state (name, lastName, position) จะถูกเพิ่มลงใน data เป็น object ใหม่
  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชเมื่อกดปุ่ม submit
    if (name && lastName && position) { // ตรวจสอบค่าว่าง
      setData([...data, { name, lastName, position }]); // เพิ่ม object ใหม่ลงใน data
      setName("");
      setLastName("");
      setPosition("");
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div>
      <Main prop='Home - Admin Sector'/>
      <h1 className="flex justify-center text-3xl font-bold mb-10">
        Create User Here
      </h1>

      {/* Input Section */}
      <form onSubmit={handleSubmit} className='flex justify-center gap-32'>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          className="border-2 p-3"
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          className="border-2 p-3"
        />
        <input
          onChange={handleChange}
          type="text"
          name="position"
          placeholder="Position"
          value={position}
          className="border-2 p-3"
        />
        <button type="submit" className="bg-green-400 px-5 shadow-md text-white rounded-lg transition-all duration-500 hover:bg-green-800">
          Save
        </button>
      </form>

      <Table isEditable={true}/>
    </div>
  );
}

export default AdminHome;
