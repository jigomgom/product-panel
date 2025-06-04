import { NextRequest, NextResponse } from "next/server";

const COOKIE_KEY = "render";
// const TTL_SECONDS = 60 * 60 * 24;
const TTL_SECONDS = 10;

export const middleware = (request: NextRequest) => {
  const cookie = request.cookies.get(COOKIE_KEY);
  const now = Date.now();

  let shouldReplace = false;

  if (!cookie) {
    shouldReplace = true;
  } else {
    const decoded = decodeURIComponent(cookie.value);
    const timestamp = decoded.split("|")[1];

    const createdAt = Number(timestamp);

    if (
      !createdAt ||
      isNaN(createdAt) ||
      now - createdAt > TTL_SECONDS * 1000
    ) {
      shouldReplace = true;
    }
  }

  if (shouldReplace) {
    const randomValue = Math.random() < 0.5 ? "grid" : "list";
    const newValue = `${randomValue}|${now}`;

    const res = NextResponse.next();

    res.cookies.set(COOKIE_KEY, newValue, {
      path: "/",
      maxAge: TTL_SECONDS,
    });

    return res;
  }

  return NextResponse.next();
};
