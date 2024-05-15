import React, { useContext, useState } from 'react';
import {
    Card,
    Input,
    Button,
} from "@material-tailwind/react";
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddVolunteerRequest = () => {

    const { user } = useContext(AuthContext);
    // const [formData, setFormData] = useState({
    //     thumbnail: '',
    //     post_title: '',
    //     description: '',
    //     category: '',
    //     location: '',
    //     volunteers_needed: '',
    //     organizer_name: '',
    //     organizer_email: '',
    //     deadline: ""

    // });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    const handleAdd = (e) => {
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
        console.log(formData);
        axios.post("http://localhost:3000/addvolunteerpost", formData,{
            withCredentials:true
        })
            .then(res =>
                Swal.fire({
                    icon: "success",
                    title: "Posted Success!!!",
                    text: "Added to Database",
                }))
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Ops!!!",
                    text: `${error.message}`,
                });
            })

    };

    return (
        <div className='my-28'>
            <Helmet>
                <title>Add Volunteer Request</title>
            </Helmet>

            <h1 className="text-2xl text-center font-bold">Add Post</h1>
            <div>
                <Card color="transparent" shadow={false}>
                    <form onSubmit={handleAdd} className="mt-8 mb-2 w-[90%] lg:w-[80%] mx-auto">
                        <div className="grid md:grid-cols-2 gap-6 mb-1">
                            <Input
                                variant="standard"
                                label="Thumbnail"
                                placeholder="Thumbnail"
                                name='thumbnail'
                            // onChange={handleInputChange}
                            />
                            <Input
                                variant="standard"
                                label="Post Title"
                                placeholder="Post Title"
                                name='postTitle'
                            // onChange={handleInputChange}
                            />
                            <Input
                                variant="standard"
                                label="Description"
                                placeholder="Description"
                                name='description'
                            // onChange={handleInputChange}
                            />
                            <Input
                                variant="standard"
                                label="Category"
                                placeholder="Category"
                                name='category'
                            // onChange={handleInputChange}
                            />
                            <Input
                                variant="standard"
                                label="Location"
                                placeholder="Location"
                                name='location'
                            // onChange={handleInputChange}
                            />
                            <Input
                                variant="standard"
                                label="No. of Volunteers Needed"
                                placeholder="No. of Volunteers Needed"
                                name='volunteersNeeded'
                            // onChange={handleInputChange}
                            />
                            <Input
                                variant="standard"
                                label="Organizer Name"
                                placeholder="Organizer Name"
                                name='organizerName'
                                // onChange={handleInputChange}
                                defaultValue={user?.displayName}
                                readOnly
                            />
                            <Input
                                variant="standard"
                                label="Organizer Email"
                                placeholder="Organizer Email"
                                name='organizerEmail'
                                // onChange={handleInputChange}
                                defaultValue={user?.email}
                                readOnly
                            />
                            <div className='md:col-span-2'>
                                <Input
                                    type='date'
                                    variant="standard"
                                    label="Deadline"
                                    placeholder="Deadline"
                                    name='deadline'
                                // onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <Input className='bg-neutral my-5' color='white' type='submit' value="Add Post" />
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddVolunteerRequest;
