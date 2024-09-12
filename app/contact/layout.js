import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";
export default function Layout({ children }){
    return(
    <>
        <Header />
        <div className="bg-white flex h-screen flex-col md:flex-row md:overflow-hidden">
            {children}
        </div>
        <Footer />
    </>
    )
}