import { Button, IconButton, Input, Spinner } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { TbZoomReset } from 'react-icons/tb';
import PostCard from '../../components/PostCard/PostCard';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const NeedVolunteer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/volunteerposts",{
            withCredentials : true,
        })
            .then(data => setPosts(data.data))
    }, []);

    const [text, setText] = useState("");
    const onChange = ({ target }) => setText(target.value);

    const handleSearch = () => {
        axios.get(`http://localhost:3000/mypost/search?text=${text}`,{
            withCredentials:true
        })
            .then(data => setPosts(data.data))
    }


    const handleReset = () => {
        axios.get("http://localhost:3000/volunteerposts",{
            withCredentials:true
        })
            .then(data => setPosts(data.data))
    }
    return (
        <div className='my-28'>
            <Helmet>
                <title>Need volunteer page</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center">Need Volunteers</h1>
            <div className="flex justify-center items-center gap-10 my-16">
                <div className="relative flex w-full max-w-[24rem]">
                    <Input
                        type="text"
                        label="Search by title"
                        value={text}
                        onChange={onChange}
                        className="pr-20"
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                    <Button
                        size="sm"
                        color={text ? "gray" : "blue-gray"}
                        disabled={!text}
                        className="!absolute right-1 top-1 rounded"
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </div>
                <IconButton onClick={handleReset} className='text-2xl' color="red">
                    <TbZoomReset />
                </IconButton>
            </div>
            {/* {isPending ? <Spinner className="mt-16 m-auto h-16 w-16 text-gray-900/50" /> */}
            {/* : */}
            <div className="my-20 grid md:grid-cols-3 gap-16 mt-28 mb-10">
                {
                    posts?.map(post => <PostCard key={post._id} post={post} />)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;