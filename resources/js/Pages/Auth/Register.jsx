import { useEffect } from "react";
import Input from "@/Components/TextInput";
import Label from "@/Components/InputLabel";
import Button from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const btnSubmit = document.querySelector(".btn-submit");
    const btnLoading = document.querySelector(".btn-loading");
    const submit = (e) => {
        e.preventDefault();
        btnLoading.classList.toggle("hidden");
        btnSubmit.classList.toggle("hidden");
        post(route("register"));
    };
    return (
        <>
            <Head>
                <title>Sign Up</title>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/images/mt-icon-logo.png"
                />
            </Head>
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-4 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div className="block items-center justify-center">
                        <img
                            src="/images/movieton-white.svg"
                            alt=""
                            className="hidden laptopLg:block tablet:block  phoneSm:block phoneLg:block  laptopLg:max-w-[200px] laptopXl:max-w-[200px] tablet:max-w-[200px] phoneSm:max-w-[200px] phoneLg:max-w-[200px]"
                        />
                        <span className="text-xs text-[#767676]">
                            Member of AFK Corp.
                        </span>
                        <div className="my-[25px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label forinput="name" value="Full Name" />
                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your full name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label
                                        forinput="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Your Email Address"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label
                                        forinput="password"
                                        value="Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Your Password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label
                                        forinput="password"
                                        value="Confirm Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        placeholder="Confirm Your Password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="btn-submit"
                                    disabled={processing}
                                >
                                    <span className="text-base  font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Button
                                    type="submit"
                                    disabled
                                    variant="warning"
                                    className="btn-loading btn-disabled hidden"
                                >
                                    <span className="text-grey font-semibold">
                                        Processing
                                    </span>
                                </Button>
                                <div className="flex items-center justify-center">
                                    <p>Already have an account?</p>
                                </div>
                                <Link href={route("login")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Sign In to an Existing Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
