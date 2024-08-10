"use client"
import Link from "next/link"
import './about.css'
import { usePathname } from "next/navigation"
export default function Layout({children}){
    const pathname = usePathname();
    console.log("---",pathname);
return(
    <div>
        <ul className="login-menu">
            {
                pathname !=='/login' && <li>
                <Link href="/login">Login</Link>
            </li>
            }
            
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/about/aboutcollege">About College</Link>
            </li>
        </ul>
        {children}
    </div>
)

}