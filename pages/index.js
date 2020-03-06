import React from "react";
import Link from "next/link";
import AppLayout from '../components/AppLayout'

const PostLink =(props)=>(
<li>
  <Link href={`/p/[id]?title=${props.title}`} as={`/p/${props.title}`}>
      <a>{props.title}</a>
  </Link>
  </li>
  )

export default function index() {
  return (
    <AppLayout>
      <h1>My Blog</h1>

      <ul> 
        <PostLink title="Hello Next.js" />
        <PostLink title="Learning Next.kjs is awesome" />
        <PostLink title="Deploy apps with Zeit" />

      </ul>
    </AppLayout>
  );
}
