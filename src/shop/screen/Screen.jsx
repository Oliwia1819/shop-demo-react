import Footer from "./Footer";
import Header from "./Header";

export default function Screen({className='', children, back}){
    return <div className={"screen "+className}>
        <Header 
        back={back}
         />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
}