const variantClasses = {
    // Sytles
    file_input: "bg-blue-600 hover:bg-blue-700 text-white",
};

export function Input({
    id,
    name = id,
    type = "text",
    placeholder = "",
    value,
    required = false,
    onChange,
    accept,
}) {
    return (
        <>
            <input
                id={id}
                name={name}
                className="w-full border rounded-md border-gray-300 p-2 hover:bg-stone-50 hover:cursor-default focus:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
                type={type}
                placeholder={placeholder}
                value={value}
                required={required}
                onChange={onChange}
                accept={accept}
            />
        </>
    );
}

export function Label({ htmlFor, content, optional = false }) {
    return (
        <>
            <label
                htmlFor={htmlFor}
                className="block text-sm font-medium text-gray-700"
            >
                {content}
                {optional && (
                    <span className="ml-2 text-gray-500 text-xs">
                        (optionnel)
                    </span>
                )}
            </label>
        </>
    );
}

export function Textarea({ 
    id, 
    placeholder, 
    required = false,
    value,
    onChange
    }) {
    return (
        <>
            <textarea
                id={id}
                className="w-full min-h-[90px] rounded-md border border-gray-300 p-2 hover:bg-stone-50 focus:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={5}
                required={required}
            ></textarea>
        </>
    );
}


// export function Textarea({ id, rows = 5, ...props }) {
//   return (
//     <textarea
//       id={id}
//       rows={rows}           // 👈 ici tu forces la valeur par défaut
//       className="..."
//       {...props}
//     />
//   );
// }
