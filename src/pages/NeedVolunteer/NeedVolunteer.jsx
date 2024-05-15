import { Button, IconButton, Input, Spinner } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { TbZoomReset } from 'react-icons/tb';
import PostCard from '../../components/PostCard/PostCard';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { MdOutlineGridView } from 'react-icons/md';
import { FaThList } from 'react-icons/fa';
import Table from '../../components/Table/Table';

const NeedVolunteer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://b9a11-server-tau.vercel.app/volunteerposts", {
            withCredentials: true,
        })
            .then(data => setPosts(data.data))
    }, []);

    const [text, setText] = useState("");
    const [grid, setGrid] = useState(true)
    const onChange = ({ target }) => setText(target.value);

    const handleSearch = () => {
        axios.get(`https://b9a11-server-tau.vercel.app/mypost/search?text=${text}`, {
            withCredentials: true
        })
            .then(data => setPosts(data.data))
    }


    const handleReset = () => {
        axios.get("https://b9a11-server-tau.vercel.app/volunteerposts", {
            withCredentials: true
        })
            .then(data => setPosts(data.data))
    }
    return (
        <div className='my-28'>
            <Helmet>
                <title>Need volunteer page</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center">Need Volunteers</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-16">
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
                <div role="tablist" className="tabs tabs-boxed">
                    <input className='hidden' onChange={(e) => setGrid(!grid)} id="check" type="checkbox" />
                    <label role='tab' className={`tab ${grid && "tab-active"} text-2xl`} htmlFor="check"><MdOutlineGridView /></label>
                    <label role='tab' className={`tab ${!grid && "tab-active"} text-2xl`} htmlFor="check"><FaThList /></label>
                </div>
            </div>
            {grid && <div className="my-20 grid md:grid-cols-3 gap-16 mt-28 mb-10">
                {
                    posts?.map(post => <PostCard key={post._id} post={post} />)

                }
            </div>}
            {!grid && <div className="my-20">
                {
                    <Table posts={posts}/>

                }
            </div>}
        </div>
    );
};

export default NeedVolunteer;