import { NextResponse } from "next/server";

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"

// /api/search-address?q=155%20Kallie%20Loop
export async function GET(request:any) {

    const {searchParams} = new URL(request.url);
    const searchText = searchParams.get('q');
    const res = await fetch(BASE_URL+'?q='+searchText+'language=en&limit=8&session_token='+process.env.MAPBOX_SESSION_TOKEN+'&country=IN'+'&access_token='+process.env.MAPBOX_ACCESS_TOKEN,
    {
        headers:{ "content-Type":"application/json"}   
    })

    const searchResult = await res.json();
    console.log(searchResult); 

    return NextResponse.json(searchResult)
}