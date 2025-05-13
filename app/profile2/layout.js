import Header from "../ui/layout2/header";
import "../global.css"

export default function Layout({children}){
    return(
        <main className="main">
            <Header />
            {children}
        </main>
        
    )
}
