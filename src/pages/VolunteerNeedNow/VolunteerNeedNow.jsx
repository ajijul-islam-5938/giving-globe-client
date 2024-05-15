import { useQuery } from "@tanstack/react-query";
import PostCard from "../../components/PostCard/PostCard";
import { Link } from "react-router-dom";
import { Button, Spinner } from "@material-tailwind/react";
import { GrFormNextLink } from "react-icons/gr";

const VolunteerNeedNow = () => {
    const { data: posts , isPending} = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch("https://b9a11-server-tau.vercel.app/volunteerneednow")
            return res.json();
        }
    })
    if(isPending){
        return <Spinner className="mt-16 m-auto h-16 w-16 text-gray-900/50" />
    }
    return (
        <div className="my-20 relative">
            <h1 className="text-3xl font-bold text-center">Volunteer Need Now</h1>
            {
                // isPending &&  <Spinner className="absolute inset-0 m-auto h-16 w-16 text-gray-900/50" />
            }
            <div className="grid md:grid-cols-3 gap-16 mt-28 mb-10">
                {
                    posts?.map(post => <PostCard key={post._id} post={post} />)
                }
            </div>
            {
                posts && <div className="text-center">
                    <Link className="text-center mx-auto" to="/needvolunteer">
                        <Button color="blue">
                            <span className="flex items-center justify-center">See More <span className="text-2xl"><GrFormNextLink /></span></span>
                        </Button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default VolunteerNeedNow;