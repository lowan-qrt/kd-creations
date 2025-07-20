import clsx from "clsx";
import { FiPlus } from "react-icons/fi";
import { SlArrowRight } from "react-icons/sl";

const variantClasses = {
    // Sytles
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    primary_disabled: "bg-blue-600 text-white opacity-50 cursor-not-allowed",
    outline: "bg-white hover:bg-gray-100 border border-gray-300",
    dark: "bg-stone-800 hover:bg-black text-white",
    // More elements
    more: "flex gap-2",
    arrowDown: "flex gap-2",
    // Layout
    full: "w-full",
    fit: "w-fit",
};

export default function Button({
    content,
    type = "button",
    variant = "primary",
    onClick,
    isOpen,
}) {
    const variants = [].concat(variant);
    if (!variants.includes("auto") && !variants.includes("fit")) {
        variants.push("fit");
    }
    const classes = variants.map((v) => variantClasses[v]).join(" ");
    const hasMore = variants.includes("more");
    const hasArrowDown = variants.includes("arrowDown");

    const classBases = `
        justify-center items-center px-4
        py-2 rounded-md
        text-sm font-semibold whitespace-nowrap
        cursor-default
    `;

    return (
        <>
            <button
                type={type}
                className={clsx("group", classBases, classes)}
                disabled={variant === "primary_disabled"}
                onClick={onClick}
            >
                {hasMore && <FiPlus />}
                {hasArrowDown && (
                    <SlArrowRight
                        className={clsx(
                            "transition-transform duration-300",
                            isOpen ? "rotate-90" : "", "group-hover:rotate-90"
                        )}
                    />
                )}

                {content}
            </button>
        </>
    );
}
