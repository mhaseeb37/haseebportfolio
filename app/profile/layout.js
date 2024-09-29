import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";

export default function Layout({ children }){
    return(
    <div className="relative">
        <Header />
        {children}
        {/* <Footer /> */}
    </div>
    )
}