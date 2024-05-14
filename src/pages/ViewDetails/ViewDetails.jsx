import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetailsCard from '../../components/PostDetailsCard/PostDetailsCard';
import { Helmet } from 'react-helmet';

const ViewDetails = () => {
    const id = useParams();
    const {data:post, isPending} = useQuery({
        queryKey: ["post"],
        queryFn: async()=>{
            const res = await fetch(`https://b9a11-server-tau.vercel.app/volunteerpost/${id.id}`);
            return res.json();
        }
    })
    return (
        <div className='my-28'>
            <Helmet>
                <title>Detail page</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center my-20">Post Details</h1>
            <div>
                <PostDetailsCard post={post}/>
            </div>
        </div>
    );
};

export default ViewDetails;