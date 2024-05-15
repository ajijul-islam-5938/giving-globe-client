import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Typography,Input } from "@material-tailwind/react";
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ManageMyPost = () => {
    const { user } = useContext(AuthContext);
    // const [TABLE_ROWS, setTABLE_ROWS] = useState();
    const [TABLE_ROWS,setTABLE_ROWS] = useState([]);


    axios.get(`http://localhost:3000/myposts?email=${user.email}`)
    .then(data => setTABLE_ROWS(data.data));
    // const { data: TABLE_ROWS, isPending, error } = useQuery({
    //     queryKey: ["TABLE_ROWS"],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:3000/myposts?email=${user.email}`);
    //         return res.json();
    //     }
    // })


    console.log(TABLE_ROWS);
    const TABLE_HEAD = ["Title", "Category", "Location", "DeadLine", ""];

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const remaining = TABLE_ROWS.filter( table => table._id !==id);
                setTABLE_ROWS(remaining)
                axios.delete(`http://localhost:3000/mypost/${id}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Ops!!!",
                            text: `${error.message}`,
                        });
                    })
            }
        });
    }

    return (
        <div className='my-28'>
            <Helmet>
                <title>Mange post</title>
            </Helmet>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button> */}
  
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
                                    {TABLE_ROWS?.map(({ post_title, category, location, deadline, _id }, index) => {
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
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-medium"
                                                    >
                                                        <div className="flex items-center justify-end gap-5">
                                                            <Link to={`/mypost/update/${_id}`}><Button  color='blue' variant="small">Update</Button></Link>
                                                            <Button onClick={() => handleDelete(_id)} color='red' variant="small">Delete</Button>
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
        </div>
    );
};

export default ManageMyPost;