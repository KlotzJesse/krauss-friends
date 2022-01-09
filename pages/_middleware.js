import { NextResponse } from "next/server";

export default function middleware(req, event) {
  const country = req.geo.country?.toLowerCase() || "us";
  console.log(country);
  console.log(req);
  console.log(event);

  return NextResponse.next();
}
