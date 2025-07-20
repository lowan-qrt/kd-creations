import { Link as RouterLink } from "react-router-dom";

export default function Link({ href, content, blank = false }) {
    if (blank) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-[var(--bg-color)] transition-colors duration-500 ease-in-out hover:decoration-stone-600"
            >
                {content}
            </a>
        );
    }

    return (
        <RouterLink
            to={href}
            className="underline underline-offset-2 decoration-[var(--bg-color)] transition-colors duration-500 ease-in-out hover:decoration-stone-600"
        >
            {content}
        </RouterLink>
    );
}
