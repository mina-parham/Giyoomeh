import React ,{Component} from 'react'
import Home from './Home';
import Footer from './Footer';
import Navbar from './NavbarCustom';
export default class MainHome extends Component{
    render(){

        return(
            <div>
                <Navbar/>
                <Home/>
                <Footer/>
            </div>





        )
    }
}