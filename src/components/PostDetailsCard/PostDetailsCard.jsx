import React, { useContext, useState } from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
    CardBody,
    CardHeader,
    CardFooter,
} from "@material-tailwind/react";
import DatePicker from 'react-datepicker';
import { Drawer, IconButton } from "@material-tailwind/react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function PostDetailsCard() {

    const id = useParams();
    console.log(id);
    const [post,setPost] = useState([]);
    axios.get(`http://localhost:3000/volunteerpost/${id?.id}`)
    .then(data => setPost(data.data))
    // const {data:post, isPending} = useQuery({
    //     queryKey: ["post"],
    //     queryFn: async()=>{
    //         const res = await fetch(`http://localhost:3000/volunteerpost/${id?.id}`);
    //         return res.json();
    //     }
    // })
    const handleRequest = (e) => {
        e.preventDefault();
        const thumbnail = e.target.thumbnail.value;
        const post_title = e.target.postTitle.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const location = e.target.location.value;
        const volunteers_needed = e.target.volunteersNeeded.value;
        const organizer_name = e.target.organizerName.value;
        const organizer_email = e.target.organizerEmail.value;
        const deadline = e.target.deadline.value;

        // Additional inputs
        const volunteer_name = e.target.volunteerName.value;
        const volunteer_email = e.target.volunteerEmail.value;
        const suggesion = e.target.suggesion.value;

        const formData = {
            thumbnail,
            post_title,
            description,
            category,
            location,
            volunteers_needed,
            organizer_name,
            organizer_email,
            deadline,
            volunteer_name,
            volunteer_email,
            suggesion,
            status: "requested"
        }
        if(volunteers_needed < 1){
            return   Swal.fire({
                icon: "error",
                title: "Bad luck !!!",
                text: "No needed any volunteer",
            });
        }
        axios.post("http://localhost:3000/requestedpost", formData)
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: "Success!!!",
                    text: "Request Sent",
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Ops!!!",
                    text: `${error.message}`,
                });
            })
        console.log(formData);
    }

    const { user } = useContext(AuthContext)

    const [openBottom, setOpenBottom] = useState(false);
    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);

    return (
        <Card className="mt-6">
            <React.Fragment>
                <Drawer
                    placement="bottom"
                    open={openBottom}
                    onClose={closeDrawerBottom}
                    className="p-4"
                >
                    <form onSubmit={handleRequest} className="mt-8 mb-2 w-[90%] lg:w-[80%] mx-auto">
                        <div className="grid overflow-hidden grid-cols-4 gap-6 mb-1">
                            <Input
                                variant="standard"
                                label="Thumbnail"
                                placeholder="Thumbnail"
                                name='thumbnail'
                                defaultValue={post?.thumbnail}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Post Title"
                                placeholder="Post Title"
                                name='postTitle'
                                defaultValue={post?.post_title}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Description"
                                placeholder="Description"
                                name='description'
                                defaultValue={post?.description}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Category"
                                placeholder="Category"
                                name='category'
                                defaultValue={post?.category}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Location"
                                placeholder="Location"
                                name='location'
                                defaultValue={post?.location}
                            />
                            <Input
                                variant="standard"
                                label="No. of Volunteers Needed"
                                placeholder="No. of Volunteers Needed"
                                name='volunteersNeeded'
                                defaultValue={post?.volunteers_needed}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Organizer Name"
                                placeholder="Organizer Name"
                                name='organizerName'
                                defaultValue={post?.organizer_name}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Organizer Email"
                                placeholder="Organizer Email"
                                name='organizerEmail'
                                defaultValue={post?.organizer_email}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Volunteer Name"
                                placeholder="Volunteer Name"
                                name='volunteerName'
                                defaultValue={user?.displayName}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Volunteer Email"
                                placeholder="Volunteer Email"
                                name='volunteerEmail'
                                defaultValue={user?.email}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Suggestion"
                                placeholder="Suggestion"
                                name='suggesion'
                            />
                            <div className=''>
                                <Input
                                    type='date'
                                    variant="standard"
                                    label="Deadline"
                                    placeholder="Deadline"
                                    name='deadline'
                                />
                            </div>
                        </div>
                        <Input className='bg-neutral my-5' color='white' type='submit' value="Request" />
                    </form>
                </Drawer>
            </React.Fragment>
            <CardHeader color="blue-gray" className="relative h-96">
                <img
                    src={post?.thumbnail}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {post?.post_title}
                </Typography>
                <div className="flex justify-between items-center gap-5">
                    <div>
                        <Typography>
                            <span className="font-bold">Category: </span>{post?.category}
                        </Typography>
                        <Typography>
                            <span className="font-bold">Location: </span>{post?.location}
                        </Typography>
                        <Typography>
                            <span className="font-bold">Volunteer Needed : </span>{post?.volunteers_needed < 1 ? " No Needded" : post?.volunteers_needed}
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            <span className="font-bold">Deadline : </span>{post?.deadline}
                        </Typography>
                        <Typography>
                            <span className="font-bold">Organizer Email : </span> {post?.organizer_email}
                        </Typography>
                        <Typography>
                            <span className="font-bold">Organizer Name : </span> {post?.organizer_name}
                        </Typography>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={openDrawerBottom} fullWidth>Be a Volunteer</Button>
            </CardFooter>
        </Card>
    );
}
