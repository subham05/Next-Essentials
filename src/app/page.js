'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import pic from '../../public/next.svg'
export default function Home() {
  const router= useRouter();
  const navigate= (name)=>{
    router.push(name)
  }
  return (
    <main className={styles.main}>
   <h1>Home page</h1>
   <Image src={pic} alt="demo"/>
   <Link href="/login">login</Link>
   <button onClick={()=> alert("Hello!")}>hello</button>
   <button onClick={()=> navigate("/login")}>Login page</button>
   <button onClick={()=> navigate("/productlist")}>Product list</button>
   <button onClick={()=> navigate("/about/aboutcollege")}>Nested route</button>
    </main>
  );
}
