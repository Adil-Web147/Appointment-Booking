// lib/actions.ts
"use server";

import { signOut as authSignOut } from "../lib/auth"; // Assuming you have auth logic here

export async function signOutAction() {
  await authSignOut();
  // You may handle any additional logout logic here if needed
}
