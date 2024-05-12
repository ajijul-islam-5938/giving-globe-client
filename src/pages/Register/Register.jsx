import {
    Card,
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import auth from "../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

export default function Register() {
    const { createUser } = useContext(AuthContext);

    const handleCreateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;

        createUser(email, password, name, photoUrl)
            .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome!!!",
                        text: "Created Successfully",
                    });
                }).catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Ops!!!",
                        text: `${error.message}`,
                    });
                });
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Ops!!!",
                    text: `${error.message}`,
                });
            });
    }
    return (
        <div className="md:grid md:grid-cols-2 md:gap-20 md:items-center items-center">
            <img className="hidden md:flex w-full h-auto" src="register.avif" alt="" />
            <Card className="w-[95%] md:w-full my-32 mx-auto border py-5" color="transparent">
                <Typography className="text-center pt-3" variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <form onSubmit={handleCreateUser} className="mt-8 mb-2 px-14">
                    <div className="mb-1 flex flex-col gap-6">
                        <Input name="name" type="text" variant="standard" label="Name" placeholder="Email" />
                        <Input name="email" type="email" variant="standard" label="Email" placeholder="Email" />
                        <Input name="photoUrl" type="text" variant="standard" label="Photo URL" placeholder="Email" />
                        <Input name="password" type="password" variant="standard" label="Password" placeholder="Email" />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <input className="btn w-full mx-auto btn-neutral " type="submit" value="Sign up" />
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium text-gray-900">
                            Sign In
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}