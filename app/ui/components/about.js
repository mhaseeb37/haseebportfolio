import { poppins } from "../fonts";
import Titleoverlay from "./titleoverlay";
import OutlineNumber from "./outlinenumber";

export default function About() {
  return (
    <div className={`${poppins.className} aboutwrapper pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-black`}>
      <div className="mainWrapper">
        <Titleoverlay overlayText="About Me" subTitle="Some Words About Me" mainTitle="Know Me More"/>
        <div className="grid grid-cols-12 mt-8 gap-4 py-4">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-4xl font-semibold leading-none mb-3">
              {'I\'m Muhammad Haseeb, a Web Developer'}
            </h2>
            <p className="text-xl font-normal">
              {'I\'m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client\'s requirements is our moto.'}
            </p>
            <div className="infoGrids grid grid-cols-3 mt-5 text-[14px]">
              <div>
                <p>Email:</p>
                <a href="mailto:info@muhammadhaseeb.site">
                  info@muhammadhaseeb.site
                </a>
              </div>
              <div>
                <p>Phone:</p>
                <a href="tel:+923224225997">+92 322 4225997</a>
              </div>
              <div>
                <p>Address:</p>
                <a
                  href="https://maps.app.goo.gl/NvRZgVvwQUTE9Lzo9"
                  target="_blank"
                >
                  Lahore, Pakistan
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 relative border bg-[#ffdb67] p-10 border-[#000000] before:block before:absolute before:-inset-0 before:rotate-2 before:w-full before:border before:border-[#000000] before:z-[-1] before:transition-transform before:duration-300 after:block after:absolute after:-inset-0 after:-rotate-2 after:w-full after:border after:border-[#000000] after:z-[-1] after:transition-transform after:duration-300 hover:before:rotate-0 hover:after:rotate-0">
            <OutlineNumber number="7" fontsize={200}/>
          </div>
        </div>
      </div>
    </div>
  );
}
