import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    IconButton,
} from "@material-tailwind/react";
import { useContext } from "react";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

export default function Login() {
    const { googleSignIn, githubSignIn, signInEmailPassword } = useContext(AuthContext);

    // Handle google Login
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                alert("success")
            }).catch((error) => {
                alert(error.message)
            });
    }

    // handle github SignIn
    const handleGithub = () => {
        githubSignIn()
            .then((result) => {
                alert("success")
            }).catch((error) => {
                alert(error.message)
            });
    }

    // Login with Email And Password
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInEmailPassword(email,password)
            .then((result) => {
                alert("success")
            }).catch((error) => {
                alert(error.message)
            });
    }
    return (
        <div className="my-20 md:grid grid-cols-2 items-center rounded-3xl">
            <img className=" hidden md:flex w-full h-full" src="signIn.avif" alt="" />
            <Card className="w-[95%] mx-auto md:w-full h-[75vh] border flex flex-row justify-center items-center">
                <form onSubmit={handleLogin} className="w-full">
                    <Typography color="gray" className="text-center text-2xl">
                        Sign in
                    </Typography>
                    <div className="flex justify-center my-10">
                        <IconButton onClick={handleGoogle} className="text-2xl w-full rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                            <IoLogoGoogle />
                        </IconButton>
                        <div className="divider divider-horizontal"></div>
                        <IconButton onClick={handleGithub} className="text-2xl rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                            <IoLogoGithub />
                        </IconButton>
                    </div>
                    <div className="w-[40%] mx-auto divider">OR</div>
                    <CardBody className="flex flex-col gap-4 px-16">
                        <Input name="email" variant="standard" label="Email" placeholder="Email" />
                        <Input name="password" variant="standard" label="Password" placeholder="Password" />
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