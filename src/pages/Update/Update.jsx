import { Input } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const id = useParams();
    const {data:post, isPending} = useQuery({
        queryKey: ["post"],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/volunteerpost/${id.id}`);
            return res.json();
        }
    })

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
        
        }

        axios.put(`http://localhost:3000/mypost/update/${post._id}`, formData,{
            withCredentials:true
        })
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: "Success!!!",
                    text: "Updated!!",
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
    return (
        <div>
            <Helmet>
                <title>Update post</title>
            </Helmet>
            <h1 className="text-2xl text-center my-28 font-bold">Update</h1>
            <div className="">
                 
            <form onSubmit={handleRequest} className="mt-8 mb-2 w-[90%] lg:w-[80%] mx-auto">
                        <div className="grid md:grid-cols-2 gap-6 mb-1">
                            <Input
                                variant="standard"
                                label="Thumbnail"
                                placeholder="Thumbnail"
                                name='thumbnail'
                                defaultValue={post?.thumbnail}
                                // readOnly
                            />
                            <Input
                                variant="standard"
                                label="Post Title"
                                placeholder="Post Title"
                                name='postTitle'
                                defaultValue={post?.post_title}
                                // readOnly
                            />
                            <Input
                                variant="standard"
                                label="Description"
                                placeholder="Description"
                                name='description'
                                defaultValue={post?.description}
                                // readOnly
                            />
                            <Input
                                variant="standard"
                                label="Category"
                                placeholder="Category"
                                name='category'
                                defaultValue={post?.category}
                                // readOnly
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
                                // readOnly
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
                            
                            <div className=''>
                                <Input
                                    type='date'
                                    variant="standard"
                                    label="Deadline"
                                    placeholder="Deadline"
                                    name='deadline'
                                    defaultValue={post?.deadline}
                                />
                            </div>
                        </div>
                        <Input className='bg-neutral my-5' color='white' type='submit' value="Update" />
                    </form>
            </div>
        </div>
    );
};

export default Update;