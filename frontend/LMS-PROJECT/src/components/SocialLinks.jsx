import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";

function social(props) {
    return (
        <>
        <FaFacebook />
        <FaSquareXTwitter />
        <FaLinkedin />
        </>
    )
}

function SocialLinks() {
    return (
        <>
            <div className=" flex flex-col items-center bg-slate-100 p-4 rounded-xl text-lg text-slate-600 font-semibold h-25 w-60">
                <MdOutlineEmail />
                <p>example@gc.com</p>
            </div>
            <div className="flex flex-col items-center bg-slate-100 p-4 rounded-xl text-lg text-slate-600 font-semibold h-25 w-60">
                <FaPhoneAlt />
                <p>(+91) 0000000000</p>
            </div>
            <div className="flex flex-col items-center bg-slate-100 p-4 rounded-xl text-lg text-slate-600 font-semibold h-25 w-60">
                <FaLocationDot />
                <p>some where in the world</p>
            </div>
            <div className="flex flex-col items-center bg-slate-100 p-4 rounded-xl text-lg text-slate-600 font-semibold h-25 w-60">
                <div className="flex gap-4 text-2xl mb-2">
                <FaFacebook />
                <FaSquareXTwitter />
                <FaLinkedin />
                </div>
                <p>Social Profiles</p>
            </div>
        </>
    )
}

export {social, SocialLinks};