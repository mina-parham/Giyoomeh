import React ,{Component} from 'react'
import Navbar from './NavbarCustom';
import Footer from './Footer';
import Privacy from './Privacy';
export default class Pri extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Privacy/>
                <Footer/>

            </div>





        )
    }
}