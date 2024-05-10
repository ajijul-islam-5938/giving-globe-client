import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="my-20 md:grid grid-cols-2 items-center rounded-3xl">
            <img className=" hidden md:flex w-full h-full" src="signIn.avif" alt="" />
            <Card className="w-[95%] mx-auto md:w-full h-[75vh] border flex flex-row justify-center items-center">
                <form className="w-full">
                    <Typography color="gray" className="text-center text-2xl">
                        Sign in
                    </Typography>
                    <div className="flex justify-center my-10">
                        <IconButton className="text-2xl w-full rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                            <IoLogoGoogle />
                        </IconButton>
                        <div className="divider divider-horizontal"></div>
                        <IconButton className="text-2xl rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                            <IoLogoGithub />
                        </IconButton>
                    </div>
                    <div className="w-[40%] mx-auto divider">OR</div>
                    <CardBody className="flex flex-col gap-4 px-16">
                        <Input variant="standard" label="Email" placeholder="Email" />
                        <Input variant="standard" label="Password" placeholder="Password" />
                    </CardBody>
                    <CardFooter className="pt-0 mx-9">
                        <input className="btn w-full mx-auto btn-neutral " type="submit" value="Sign in" />
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don&apos;t have an account?
                            <Link
                                to="/register"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                            >
                                Sign up
                            </Link>
                        </Typography>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}