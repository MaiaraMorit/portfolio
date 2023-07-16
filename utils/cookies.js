'use server'

import {cookies} from "next/headers";

export async function setCookie(name, value) {
  cookies().set(name, value)
}

export async function getCookie(name) {
  return cookies().get(name)
}