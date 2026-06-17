// app/delete-account/page.tsx -- SERVER COMPONENT
//
// Next.js App Router rule: `export const metadata` is ONLY valid in Server
// Components. All interactive logic (useState, form, fetch) lives in
// DeleteAccountClient.tsx which is marked "use client".
import type { Metadata } from "next";
import DeleteAccountClient from "./DeleteAccountClient";

export const metadata: Metadata = {
  title: "Delete Account | SevaLink -- Account Deletion Request",
  description:
    "Permanently delete your SevaLink account and all associated personal data. No login required. Google Play compliant. Request processed within 24â€“72 hours.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.sevalinkcare.com/delete-account",
  },
  openGraph: {
    title: "Delete Account | SevaLink",
    description:
      "Request permanent deletion of your SevaLink account and personal data. Publicly accessible â€” no login required.",
    url: "https://www.sevalinkcare.com/delete-account",
    siteName: "SevaLink",
    locale: "en_IN",
    type: "website",
  },
};

export default function DeleteAccountPage() {
  return <DeleteAccountClient />;
}
