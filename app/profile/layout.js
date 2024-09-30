import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";
import "../globals.css";

export default function Layout({ children }){
    return(
    <div className="relative">
        <Header />
        {children}
        {/* <Footer /> */}
    </div>
    )
}