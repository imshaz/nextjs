// import React from 'react'
import {useRouter} from 'next/router'
import AppLayout from '../../components/AppLayout'

 function Post() {

    const router = useRouter()

    return (
        <AppLayout>
            <h1>{router.query.title}</h1>        
            <p>this is post content.</p>
        </AppLayout>
    )
}


export default Post