import { NextResponse } from "next/server";
import pool from "../../../../lib/db";


export async function DELETE(req,{params}){

    try {

    const {id} = await params;

    const enquiry = await pool.query("Select * from contact where id = $1",[id]);

    if(enquiry.rows.length === 0){
        return NextResponse.json({success : false , message : "No Contact info Found"},{status : 404});
    }

    await pool.query("Delete from contact where id = $1", [id]);

    return NextResponse.json({success : true , message : "Contact info Deleted Successfully"},{status : 200});

    } catch (error) {
        return NextResponse.json({success : false , message : "Internal Server error" + error},{status : 500});
    }
    
}

