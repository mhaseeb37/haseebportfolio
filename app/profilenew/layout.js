import Header from "../ui/layout2/header";
import "../globals.css"

export default function Layout({children}){
    return(
        <main className="main container m-auto">
            <Header />
            {children}
        </main>
        
    )
}
