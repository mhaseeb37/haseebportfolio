'use client'

import { Bars2Icon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

export default function Header(){

    return(
        <header className="mainHeader">
            <nav className="headerNav">
                <div className="mainContainer">
                    <div className="headerWrapper flex justify-between align-middle items-center w-full">
                        <div className="logoWrapper">
                            <Link href="/">
                                <Image className="invert" alt="Muhammad Haseeb" src="/assets/MH_Logo.png" width={200} height={100}/>
                            </Link>
                        </div>
                        <div className="hamburgerWrapper w-full max-w-8">
                            <Bars2Icon />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}