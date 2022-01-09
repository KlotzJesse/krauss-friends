import { NextResponse } from "next/server";

const trackingId = "UA-216631308-1";

export default async function middleware(request, event) {
  const res = NextResponse.next();

  if (request.url.contains(".")) {
    return res;
  }

  const lang = request.headers.get("accept-language")
    ? request.headers.get("accept-language").split(",")[0]
    : null;

  let uaData = {
    v: 1,
    tid: trackingId,
    ni: 1,
    t: "pageview",
    dl: request.url,
    dr: request.headers.get("referer"),
    ds: "web",
    // //geoid: request.headers.get("cf-ipcountry"),
    ul: lang,
    ua: request.headers.get("user-agent"),
    cid: "35009a79-1a05-49d7-b876-2b884d0f825b",
    z: Math.random(),
  };

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
