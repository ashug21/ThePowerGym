"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../../components/AdminNavbar";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";
import Image from "next/image";

const Dashboard = () => {

  const [enquiry, setEnquiry] = useState([]);
  const [contact, setContact] = useState([]);

  const router = useRouter();

  const getEnquiries = async () => {
    try {
      const res = await fetch("/api/enquiry");
      const data = await res.json();
      setEnquiry(data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const getContactDetails = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      setContact(data || []);
    } catch (error) {
      console.log(error);
    }
  };


  const deleteUserEnquiry = async (id) => {
    if (!confirm("Are you sure you want to delete this Enquiry ?")) return;

    try {
      const res = await fetch(`/api/enquiry/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.log("Failed to delete enquiry");
        return;
      }

      alert("enquiry deleted successfully");
      getEnquiries();
    } catch (error) {
      console.log(error);
    }
  };



  const deleteUserContactInfo = async (id) => {
    if (!confirm("Are you sure you want to delete this Contact info ?")) return;

    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.log("Failed to delete Contact Info");
        return;
      }

      alert("Contact deleted successfully");
      getContactDetails();
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getEnquiries();
    getContactDetails();
  }, []);

  useEffect(() => {
    const admin = localStorage.getItem("Admin");

    if (!admin) {
      alert("Only Admin Can access this Page");
      router.push("/");
    }
  }, [router]);

  return (
    <div>
      <Navbar />

      <br/><br/>
      <br/><br/>

      <div className={styles.dashboardContainer}>

        <div className={styles.section}>
          <h2 className={styles.heading}>Enquiries List</h2>

          {enquiry.map((item) => (
            <div key={item.id} className={styles.card}>

            <Image
              src="/bin.png"
              alt="delete"
              width={18}
              height={18}
              className={styles.bin}
              onClick={() => deleteUserEnquiry(item.id)}
            />
          
            <div className={styles.cardContent}>
              <p><strong>Name:</strong> {item.fullname}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phone}</p>
              <p><strong>Goal:</strong> {item.primarygoal}</p>
              <p><strong>Message:</strong> {item.message}</p>
            </div>
          
            <div className={styles.time}>
              {new Date(item.created_at).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short"
              })}
            </div>
          
          </div>
          ))}
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Contact List</h2>

          {contact.map((item) => (
         <div key={item.id} className={styles.card}>

         <Image
           src="/bin.png"
           alt="delete"
           width={18}
           height={18}
           className={styles.bin}
           onClick={() => deleteUserContactInfo(item.id)}
         />
       
         <div className={styles.cardContent}>
           <p><strong>Name:</strong> {item.fullname}</p>
           <p><strong>Email:</strong> {item.email}</p>
           <p><strong>Phone:</strong> {item.phone}</p>
           <p><strong>Goal:</strong> {item.primarygoal}</p>
           <p><strong>Message:</strong> {item.message}</p>
         </div>
       
         <div className={styles.time}>
           {new Date(item.created_at).toLocaleString("en-IN", {
             dateStyle: "medium",
             timeStyle: "short"
           })}
         </div>
       
       </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;