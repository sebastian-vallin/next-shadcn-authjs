import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const middleware = auth((request) => {
  return NextResponse.next();
});
