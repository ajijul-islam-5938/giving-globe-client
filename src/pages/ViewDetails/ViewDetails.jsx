import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostDetailsCard from '../../components/PostDetailsCard/PostDetailsCard';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const ViewDetails = () => {
    const id = useParams();
    console.log(id);

    // const {data:post, isPending} = useQuery({
    //     queryKey: ["post"],
    //     queryFn: async()=>{
    //         const res = await fetch(`https://b9a11-server-tau.vercel.app/volunteerpost/${id?.id}`);
    //         return res.json();
    //     }
    // })
    return (
        <div className='my-28'>
            <Helmet>
                <title>Detail page</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center my-20">Post Details</h1>
            <div>
                <PostDetailsCard/>
            </div>
        </div>
    );
};

export default ViewDetails;