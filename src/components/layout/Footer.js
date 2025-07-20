export default function Footer() {
    const year = new Date().getFullYear();
    
    return <>
        <footer className="flex justify-center items-center p-4 w-full">
            <span className="text-sm">&copy; {year} | KD - Creations</span>
        </footer>
    </>
}