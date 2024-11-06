import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext(); // สร้าง Context

export const DataProvider = ({ children }) => { // สร้าง Provider สำหรับ Context
    // ตรวจสอบว่า localStorage มีข้อมูลหรือไม่
    const initialData = JSON.parse(localStorage.getItem("data")) || []; 

    const [data, setData] = useState(initialData); // สร้าง State เก็บข้อมูลเริ่มต้น

    useEffect(() => { // กำหนดให้ useEffect อัปเดตข้อมูลใน local storage ทุดครั้งที่ data มีการเปลี่ยนแปลง
        localStorage.setItem("data", JSON.stringify(data));
    }, [data])

    return (
        <DataContext.Provider value={{ data, setData }}>  
            {children}
        </DataContext.Provider>
    );
};

// สร้าง Hook สำหรับการใช้งาน Context
export const useData = () => useContext(DataContext);
