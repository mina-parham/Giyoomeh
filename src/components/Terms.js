import React ,{Component} from 'react'
import Navbar from './NavbarCustom';
import Footer from './Footer';
import Term from './TermsOfUsers';
export default class Terms extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Term/>
                <Footer/>

            </div>





        )
    }
}