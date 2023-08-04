import Input from "@/Components/TextInput";
import Label from "@/Components/InputLabel";
import Button from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";

export default function Register() {
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-10 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div className="object-center">
                        <img
                            src="/images/movieton-white.svg"
                            alt=""
                            className="hidden laptopLg:block tablet:block  phoneSm:block phoneLg:block  laptopLg:max-w-[200px] laptopXl:max-w-[200px] tablet:max-w-[200px] phoneSm:max-w-[200px] phoneLg:max-w-[200px]"
                        />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label forinput="email" value="Full Name" />
                                    <Input
                                        type="text"
                                        name="fullname"
                                        placeholder="Your full name"
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
                                        placeholder="Your Email Address"
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
                                        placeholder="Your Password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <a
                                    href="/"
                                    className="rounded-2xl bg-mtcolor py-[13px] text-center"
                                >
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </a>
                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Sign in to My Account
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
