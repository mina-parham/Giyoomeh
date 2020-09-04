import React ,{Component} from 'react'
import './NavbarCustom.css';

export default class CustomNavbar extends Component{
    render(){
        return(
            <div>
                <nav className="nav">
                    <div className="nav-1">
                        <ul className="nav-2">
                            <i  ><a  href="/"><div className="logo"/></a></i>
                            <li className="nav-li"><a href="/"><span>Core</span></a></li>
                            <li className="nav-li"><a href="/"><span>Studio</span></a></li>
                            <li className="nav-li"><a href="/style"><span>Style</span></a></li>
                            <li className="nav-li"><a href="/"><span>Business</span></a></li>
                            <li className="nav-li"><a href="/"><span>ideas</span></a></li>
                            

                        </ul>
                    </div>
                </nav>
                <span className="logo"/>
            </div>
        )
    }
}