import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import {
    Drawer,
    IconButton,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PostDetailsCard({ post }) {
    // const { thumbnail, post_title, category, location, volunteers_needed, deadline, organizer_name, organizer_email, _id } = post;
    const openModal = () => {
        alert()
    }


    const [openTop, setOpenTop] = useState(false);
    const [openRight, setOpenRight] = useState(false);
    const [openBottom, setOpenBottom] = useState(false);
    const [openLeft, setOpenLeft] = useState(false);

    const closeDrawerTop = () => setOpenTop(false);
    const closeDrawerRight = () => setOpenRight(false);
    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);
    const closeDrawerLeft = () => setOpenLeft(false);
    return (
        <Card className="mt-6">
            <React.Fragment>

                <Drawer
                    placement="top"
                    open={openTop}
                    onClose={closeDrawerTop}
                    className="p-4"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Material Tailwind
                        </Typography>
                        <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    <Typography color="gray" className="mb-8 pr-4 font-normal">
                        Material Tailwind features multiple React and HTML components, all
                        written with Tailwind CSS classes and Material Design guidelines.
                    </Typography>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outlined">
                            Documentation
                        </Button>
                        <Button size="sm">Get Started</Button>
                    </div>
                </Drawer>
                <Drawer
                    placement="right"
                    open={openRight}
                    onClose={closeDrawerRight}
                    className="p-4"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Material Tailwind
                        </Typography>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={closeDrawerRight}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    <Typography color="gray" className="mb-8 pr-4 font-normal">
                        Material Tailwind features multiple React and HTML components, all
                        written with Tailwind CSS classes and Material Design guidelines.
                    </Typography>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outlined">
                            Documentation
                        </Button>
                        <Button size="sm">Get Started</Button>
                    </div>
                </Drawer>
                <Drawer
                    placement="bottom"
                    open={openBottom}
                    onClose={closeDrawerBottom}
                    className="p-4"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Material Tailwind
                        </Typography>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={closeDrawerBottom}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    <Typography color="gray" className="mb-8 pr-4 font-normal">
                        Material Tailwind features multiple React and HTML components, all
                        written with Tailwind CSS classes and Material Design guidelines.
                    </Typography>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outlined">
                            Documentation
                        </Button>
                        <Button size="sm">Get Started</Button>
                    </div>
                </Drawer>
                <Drawer
                    placement="left"
                    open={openLeft}
                    onClose={closeDrawerLeft}
                    className="p-4"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Material Tailwind
                        </Typography>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={closeDrawerLeft}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    <Typography color="gray" className="mb-8 pr-4 font-normal">
                        Material Tailwind features multiple React and HTML components, all
                        written with Tailwind CSS classes and Material Design guidelines.
                    </Typography>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outlined">
                            Documentation
                        </Button>
                        <Button size="sm">Get Started</Button>
                    </div>
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
                            <span className="font-bold">Volunteer Needed : </span>{post?.volunteers_needed}
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            <span className="font-bold">Deadline</span>{post?.deadline}
                        </Typography>
                        <Typography>
                            <span className="font-bold">Organaizer Email : </span> {post?.organizer_email}
                        </Typography>
                        <Typography>
                            <span className="font-bold">Organaizer Name : </span> {post?.organizer_name}
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
