"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  return (
   <>
    <h1>Basic Routing</h1>
    <Link href="/login">Go to login</Link><br></br>
    <Link href="/about">Go to about</Link><br></br>
    <button onClick={() => router.push("/login")}>Go to loginrouter</button>
   </>
  );
}
