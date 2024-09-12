import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";
export default function Layout({ children }){
    return(
    <>
        <Header />
        <div className="bg-white flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden mt-32">
                <div className="w-full flex-none md:w-64 text-black">
                    Hello
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    { children }
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}