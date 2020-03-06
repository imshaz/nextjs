import React from 'react'
import Link from 'next/link'
const linkStyle ={
    marginRight:15,
    textDecoration:'none'
}
export default function Header() {
    return (
        <div>
            <Link  href="/index"><a style={linkStyle}>Home </a></Link>
            <Link href="/about"><a style={linkStyle}>About </a></Link>
            <Link href="/contact"><a style={linkStyle}> Contact us </a></Link>
        </div>
    )
}
