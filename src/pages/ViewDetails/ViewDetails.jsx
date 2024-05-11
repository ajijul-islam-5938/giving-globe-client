import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetailsCard from '../../components/PostDetailsCard/PostDetailsCard';

const ViewDetails = () => {
    const id = useParams();
    const {data:post, isPending} = useQuery({
        queryKey: ["post"],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/volunteerpost/${id.id}`);
            return res.json();
        }
    })
    return (
        <div className='my-28'>
            <h1 className="text-2xl font-bold text-center my-20">Post Details</h1>
            <div>
                <PostDetailsCard post={post}/>
            </div>
        </div>
    );
};

export default ViewDetails;