import { useNavigate } from "react-router-dom";
export function Button({text, link}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(link);
    }
    return (
        <>
            <button onClick={handleClick} class="relative px-6 py-2 text-[15px] font-bold  text-white bg-[#082A3A] border-[0.25em] border-[#0F7D85] rounded-full outline-none transition-all duration-300 hover:shadow-[0_0_1em_0.25em_#0F7D85,0_0_4em_1em_rgba(15,125,133,0.781),inset_0_0_0.75em_0.25em_#0F7D85] hover:text-shadow-[0_0_0.5em_#0F7D85]">
                {text}
            </button>
        </>
    )
}