import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/TextInput";
import Label from "@/Components/InputLabel";
import Button from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login(canResetPassword) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        btnLoading.classList.toggle("hidden");
        btnSubmit.classList.toggle("hidden");
        post(route("login"));
    };

    const btnSubmit = document.querySelector(".btn-submit");
    const btnLoading = document.querySelector(".btn-loading");

    return (
        <>
            <Head>
                <title>Sign in</title>
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
                <div className="py-10 flex laptopLg:ml-[680px] laptopXl:ml-[870px] justify-object-center">
                    <div className="justify-object-center">
                        <img
                            src="/images/movieton-white.svg"
                            alt=""
                            className="hidden laptopLg:block tablet:block  phoneSm:block phoneLg:block  laptopLg:max-w-[200px] laptopXl:max-w-[200px] tablet:max-w-[200px] phoneSm:max-w-[200px] phoneLg:max-w-[200px]"
                        />
                        <span className="text-xs text-[#767676]">
                            Member of AFK Corp.
                        </span>
                        <div className="my-[30px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        forinput="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Email Address"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
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
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex items-center space-y-[10px] justify-center">
                                    {canResetPassword && (
                                        <Link
                                            href={route("password.request")}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}
                                </div>
                                <div className="block">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="ml-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[20px]">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="btn-submit"
                                    disabled={processing}
                                >
                                    <span className="text-base  font-semibold">
                                        Start Watching
                                    </span>
                                </Button>
                                <Button
                                    type="submit"
                                    disabled
                                    variant="warning"
                                    className="btn-loading btn-disabled hidden"
                                >
                                    <span className="text-grey font-semibold">
                                        Loging In
                                    </span>
                                </Button>
                                <div className="flex items-center justify-center">
                                    <p>Don't have an account yet?</p>
                                </div>
                                <Link href={route("register")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Create a New Account
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
