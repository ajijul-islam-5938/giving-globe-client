import { Button, IconButton, Input } from '@material-tailwind/react';
import React from 'react';
import { TbZoomReset } from 'react-icons/tb';

const NeedVolunteer = () => {
    const [text, setText] = React.useState("");
    const onChange = ({ target }) => setText(target.value);
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
            <div className="my-20">
                
            </div>
        </div>
    );
};

export default NeedVolunteer;