import { Button, Card, Typography } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useContext } from 'react';

const MyVolunteerRequest = () => {
    const { user } = useContext(AuthContext)
    const TABLE_HEAD = ["Title", "Category", "Location", "DeadLine", ""];
    const handleCancel = (id) => {
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
                axios.delete(`http://localhost:3000/requestedpost/${id}`)
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

    const { data: requested } = useQuery({
        queryKey: ["requested"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/requestedpost?email=${user.email}`);
            return res.json();
        }
    })

    return (
        <div className='my-28'>
            <h1 className="text-2xl font-bold text-center my-16"> My Volunteer Request Post</h1>
            <div className="">
                <Card className="h-full w-full overflow-scroll">
                    {
                        requested < 1 ? <p className="text-xl text-center">Not added yet any post</p> :
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
                                    {requested?.map(({ post_title, category, location, deadline, _id }, index) => {
                                        const isLast = index === requested.length - 1;
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
                                                        <Button variant="small" onClick={() => handleCancel(_id)} color="red">Cancel</Button>
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

export default MyVolunteerRequest;