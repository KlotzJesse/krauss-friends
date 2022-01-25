const trackingId = process.env.TRACKING_ID;

export default async function middleware(request, event) {
  const res = NextResponse.next();
  /*

  if (request.url.includes("favicon")) {
    return res;
  }

  const lang = request.headers.get("accept-language")
    ? request.headers.get("accept-language").split(",")[0]
    : null;

  var id;

  const gaCookie = request.cookies["_rId"];
  if (gaCookie) {
    id = gaCookie;
  } else {
    id = crypto.randomUUID();
    res.cookie("_rId", id);
  }

  let uaData = {
    v: 1,
    tid: trackingId,
    ni: 1,
    t: "pageview",
    dl: request.url,
    dr: request.headers.get("referer"),
    ds: "web",
    ul: lang,
    ua: request.ua.ua,
    cid: id,
    ni: 1,
    z: Math.random(),
  };

  const payload = Object.keys(uaData)
    .map((k) => {
      return `${k}=${encodeURI(uaData[k])}`;
    })
    .join("&");

  const result = await fetch(
    "https://www.google-analytics.com/collect?" + payload
  );*/

  return res;
}
