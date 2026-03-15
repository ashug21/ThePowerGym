"use client";

import React, { useEffect } from 'react'
import Navbar from '../../../components/AdminNavbar'
import { useRouter } from 'next/navigation';




const Dashboard = () => {


   

    const router = useRouter();

    useEffect(() => {
       const admin = localStorage.getItem('Admin');

       if(!admin){
            alert("Only Admin Can access this Page");
            router.push("/");
       }
    },[]);


  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Dashboard
