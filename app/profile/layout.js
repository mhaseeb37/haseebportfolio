import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";

export default function Layout({ children }){
    return(
    <div className="relative bg-black">
        <Header />
        {children}
        {/* <Footer /> */}
    </div>
    )
}