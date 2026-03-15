import { NextResponse } from "next/server";
import pool from "../../../../lib/db";


export async function DELETE(req,{params}){

    try {

    const {id} = await params;

    const enquiry = await pool.query("Select * from enquiry where id = $1",[id]);
    

    if(enquiry.rows.length === 0){
        return NextResponse.json({success : false , message : "No Enquiry Found"},{status : 404});
    }

    await pool.query("Delete from enquiry where id = $1", [id]);

    return NextResponse.json({success : true , message : "Enquiry Deleted Successfully"},{status : 200});

    } catch (error) {
        return NextResponse.json({success : false , message : "Internal Server error" + error},{status : 500});
    }

}

