import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
    const { thumbnail, post_title, category, deadline } = post;

    return (
        <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={thumbnail}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {post_title}
                </Typography>
                <div className="flex justify-between items-center gap-5">
                    <Typography>
                        {category}
                    </Typography>
                    <Typography>
                       {deadline}
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to="/postDetails"><Button fullWidth>View Details</Button></Link>
            </CardFooter>
        </Card>
    );
}
