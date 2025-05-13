'use client'

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

export default function Header(){

    return(
        <header className="mainHeader">
            <nav className="headerNav">
                <div className="mainContainer">
                    <div className="headerWrapper">
                        <div className="logoWrapper">
                            <Link href="/">
                                <Image className="invert" alt="Muhammad Haseeb" src="/assets/MH_Logo.png" />
                            </Link>
                        </div>
                        <div className="hamburgerWrapper">
                            <Bars3BottomRightIcon />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}