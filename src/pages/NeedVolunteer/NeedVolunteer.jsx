import { Button, IconButton, Input, Spinner } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { TbZoomReset } from 'react-icons/tb';
import PostCard from '../../components/PostCard/PostCard';

const NeedVolunteer = () => {
    const [text, setText] = useState("");
    const onChange = ({ target }) => setText(target.value);

    const { data: posts, isPending } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/volunteerposts");
            return res.json();
        }
    });



    return (
        <div className='my-28'>
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
                    >
                        Search
                    </Button>
                </div>
                <IconButton className='text-2xl' color="red">
                    <TbZoomReset />
                </IconButton>
            </div>
            {isPending ? <Spinner className="mt-16 m-auto h-16 w-16 text-gray-900/50" />
            :
            <div className="my-20 grid md:grid-cols-3 gap-16 mt-28 mb-10">
                {
                    posts?.map(post => <PostCard key={post._id} post={post} />)
                }
            </div>}
        </div>
    );
};

export default NeedVolunteer;