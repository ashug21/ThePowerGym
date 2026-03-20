import { NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function POST(req) {
  try {
    const { fullname, email, phone, subject, message } = await req.json();

    if (!fullname || !subject || !email || !phone || !message) {
      return NextResponse.json({
        success: false,
        message: "All Fields are required",
      });
    }

    await pool.query(
      `Insert into contact (fullname , email , phone , subject , message)
            Values ($1, $2 , $3 , $4 , $5)`,
      [fullname, email, phone, subject, message]
    );

    await pool.query(
      `Insert into contactBackup (fullname , email , phone , subject , message)
            Values ($1, $2 , $3 , $4 , $5)`,
      [fullname, email, phone, subject, message]
    );

    return NextResponse.json(
      { message: "Contact form sent successfully" },
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
    const { rows } = await pool.query('select * from contact')
    return NextResponse.json(rows);
}