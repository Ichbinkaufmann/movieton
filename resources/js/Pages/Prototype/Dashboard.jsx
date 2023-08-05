import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/images/mt-icon-logo.png"
                />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity classNameName="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            key={i}
                            slug="batman-is-a-simp"
                            name={`Batman is a Simp ${i}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/id/1/300/300"
                            rating={i + 1}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity classNameName="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <MovieCard
                            key={i}
                            slug="batman-is-a-simp"
                            name={`Batman is a Simp ${i}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/id/1/300/300"
                        />
                    ))}
                    {/* Movies */}
                </Flickity>
            </div>
        </Authenticated>
    );
}
