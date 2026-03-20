import { NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function POST(req) {
  try {
    const { fullname, email, phone, primarygoal, message } = await req.json();

    if (!fullname || !primarygoal || !email || !phone || !message) {
      return NextResponse.json({
        success: false,
        message: "All Fields are required",
      });
    }

    await pool.query(
      `Insert into enquiry (fullname , email , phone , primarygoal , message)
            Values ($1, $2 , $3 , $4 , $5)`,
      [fullname, email, phone, primarygoal, message]
    );


    await pool.query(
      `Insert into enquiryBackup (fullname , email , phone , primarygoal , message)
            Values ($1, $2 , $3 , $4 , $5)`,
      [fullname, email, phone, primarygoal, message]
    );

    return NextResponse.json(
      { message: "Enquiry sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function GET(){
    const { rows } = await pool.query('select * from enquiry')
    return NextResponse.json(rows);
}