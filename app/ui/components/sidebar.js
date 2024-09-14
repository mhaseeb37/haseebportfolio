import Link from "next/link"
export default function Sidebar(){
    return(
        <nav className="h-screen fixed top-32 right-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto">


      <div className="mt-4">
        <ul className="mt-2">
          <li>
            <Link href="#" className="text-black text-[16x] block border-l-2 border-black pl-8 py-2.5 transition-all uppercase navlink1 relative">
                01 Top
                <span className="opacity-25 bg-black absolute top-0 left-0 right-0 bottom-0 w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink2 relative">
                02 About me
                <span className="opacity-0 hover:opacity-25 hover:w-full hover:bg-black absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink3 relative">
                03 My Services
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink4 relative">
                04 Skills
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                05 Facts
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                06 Experiences
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                07 Projects
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                08 How I Work
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                09 Testimonial
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                10 Contact
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}