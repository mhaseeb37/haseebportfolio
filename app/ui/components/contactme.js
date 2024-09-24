import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";
import IconBox from "./iconbox";
import { socialLinks } from "@/app/common/constant";
import Icon from "./icon";
import ContactForm from "./contactForm";

export default function ContactMe() {
    return(
        <div className={`${poppins.className} expWrapper pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-black`}>
            <Titleoverlay overlayText="Contact" subTitle="Let's get in touch" mainTitle="Contact Me"/>
            <div className="flex justify-start items-center space-x-8 p-4">
                <IconBox iconname="phone" url={`tel:${socialLinks.phone}`} data={socialLinks.phone}/>
                <IconBox iconname="envelope" url={`mailto:${socialLinks.email}`} data={socialLinks.email}/>
                <IconBox iconname="location" url={`${socialLinks.location}`} data="Lahore, Pakistan"/>
                <div className="flex space-x-4 p-4">
                    <Icon iconname="facebook" url={`${socialLinks.facebook}`}/>
                    <Icon iconname="instagram" url={`${socialLinks.instagram}`}/>
                    <Icon iconname="linkedin" url={`${socialLinks.linkedin}`}/>
                    <Icon iconname="upwork" url={`${socialLinks.upwork}`}/>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}