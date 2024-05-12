import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Typography } from "@material-tailwind/react";
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const ManageMyPost = () => {
    const { user } = useContext(AuthContext);
    // const [TABLE_ROWS, setTABLE_ROWS] = useState();

    const { data: TABLE_ROWS, isPending, error } = useQuery({
        queryKey: ["TABLE_ROWS"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/myposts?email=${user.email}`);
            return res.json();
        }
    })

    console.log(TABLE_ROWS);
    const TABLE_HEAD = ["Title", "Category", "Location", "DeadLine", ""];
    return (
        <div className='my-28'>
            <h1 className="text-2xl font-bold text-center my-16"> My Need Volunteer Post</h1>
            <div className="">
                <Card className="h-full w-full overflow-scroll">
                    {
                        TABLE_ROWS < 1 ? <p className="text-xl text-center">Not added yet any post</p> :
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th
                                                key={head}
                                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                            >
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70t"
                                                >
                                                    {head}
                                                </Typography>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {TABLE_ROWS?.map(({ post_title, category, location, deadline }, index) => {
                                        const isLast = index === TABLE_ROWS.length - 1;
                                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={name}>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {post_title}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {category}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {location}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {deadline}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        as="a"
                                                        href="#"
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-medium"
                                                    >
                                                        <div className="flex items-center justify-end gap-5">
                                                            <Button>Update</Button>
                                                            <Button>Delete</Button>
                                                        </div>
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                    }
                </Card>
            </div>

            <h1 className="text-2xl font-bold text-center my-16"> My Volunteer Request Post</h1>
            <div className="">
                <Card className="h-full w-full overflow-scroll">
                    {
                        TABLE_ROWS < 1 ? <p className="text-xl text-center">Not added yet any post</p> :
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th
                                                key={head}
                                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                            >
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70t"
                                                >
                                                    {head}
                                                </Typography>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {TABLE_ROWS?.map(({ post_title, category, location, deadline }, index) => {
                                        const isLast = index === TABLE_ROWS.length - 1;
                                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={name}>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {post_title}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {category}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {location}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {deadline}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        as="a"
                                                        href="#"
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-medium"
                                                    >
                                                            <Button>Cancel</Button>
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                    }
                </Card>
            </div>
        </div>
    );
};

export default ManageMyPost;