import { Link } from "@inertiajs/react";

export default function MenuItem({
    link,
    icon,
    text,
    isActive,
    method = "get",
}) {
    return (
        <Link
            href={link ? route(link) : null}
            method={method}
            className={`side-link ${isActive && "active"}`}
            as="button"
        >
            {icon}
            {text}
        </Link>
    );
}
