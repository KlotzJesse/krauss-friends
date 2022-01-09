import { NextResponse } from "next/server";

const trackingId = "UA-216631308-1";

export default async function middleware(request, event) {
  const res = NextResponse.next();
  console.log(res);
  console.log(request);
  console.log(event);

  let uaData = {
    v: 1,
    tid: trackingId,
    ni: 1,
    t: "event",
    ec: "cf_worker",
    ea: "request",
    el: res.status + ": " + request.url,
    dl: request.url,
    dr: request.headers.get("referer"),
    //geoid: request.headers.get("cf-ipcountry"),
    //ul: lang,
    ua: request.headers.get("user-agent"),
    cd2: request.url,
    cd1: request.headers.get("user-agent"),
    cd4: "cf_worker",
    z: Math.random(),
  }; // Object with data for GA Universal Analytics

  // ... here we'll combine all the data we need into our uaData object

  const payload = Object.keys(uaData)
    .map((k) => {
      return `${k}=${encodeURI(uaData[k])}`;
    })
    .join("&");

  console.log(
    await fetch("https://www.google-analytics.com/collect?" + payload)
  );

  return NextResponse.next();
}
