import { poppins } from "../fonts";
import Titleoverlay from "./titleoverlay";

export default function Facts() {
    return(
        <div id="myfacts" className={`${poppins.className} factsWrapper pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-white`}>
            <Titleoverlay overlayText="My Facts" subTitle="Some interesting facts about me" mainTitle="Fun Facts"  />
            <div className="grid grid-cols-12 mb-5 mt-5">
                <div className="col-span-6 md:col-span-4 col-start-1">
                    <p className="text-6xl md:text-[100px] font-bold">45</p>
                    <hr className="w-1/2 mb-4 h-[2px] bg-white border-none"/>
                    <h3>Finished Projects</h3>
                </div>
                <div className="col-span-6 md:col-span-4 col-start-7 md:col-start-5">
                    <p className="text-6xl md:text-[100px] font-bold">38</p>
                    <hr className="w-1/2 mb-4 h-[2px] bg-white border-none"/>
                    <h3>Happy Customers</h3>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-6 md:col-span-4 col-start-1 md:col-start-5">
                <p className="text-6xl md:text-[100px] font-bold">400</p>
                    <hr className="w-1/2 mb-4 h-[2px] bg-white border-none"/>
                    <h3>Working Hours</h3>
                </div>
                <div className="col-span-6 md:col-span-4 col-start-7 md:col-start-9">
                <p className="text-6xl md:text-[100px] font-bold">112</p>
                    <hr className="w-1/2 mb-4 h-[2px] bg-white border-none"/>
                    <h3>Coffee Cups</h3>
                </div>
            </div>
        </div>
        
    )
}