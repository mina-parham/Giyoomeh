import React ,{Component} from 'react'
import Navbar from './NavbarCustom';
import Footer from './Footer';
import Giyoomeh_style from './Giyoomeh_style';
export default class Style extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Giyoomeh_style/>
                <Footer/>

            </div>





        )
    }
}