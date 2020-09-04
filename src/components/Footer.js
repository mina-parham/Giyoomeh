import React ,{Component} from 'react'
import './Footer.css';
import './Pri';
import './Terms';
export default class Footer extends Component{
    render(){
        return(
            <div>

                <footer id="myFooter">
                    <div className="social-networks">
                        <a href="https://twitter.com//giyoomeh" className="twitter"><i className="fa fa-twitter"/></a>
                        <a href="https://facebook.com/giyoomeh" className="facebook"><i className="fa fa-facebook-official"/></a>
                        <a href="https://plus.google.com/giyoomeh" className="google"><i className="fa fa-google-plus"/></a>
                        <a href="https://www.linkedin.com/company/giyoomeh/" className="linkedin"><i className="fa fa-linkedin"/></a>
                        <a href="https://instagram.com/giyoomeh" className="instagram"><i className="fa fa-instagram"/></a>
                    </div>
                    <div className="footer-copyright">
                        <a className="a-left" href="/privacy">PRIVACY</a>
                        <a className="a-left" href="/terms">TERMS</a>
                        <a className="a-right" href="/">CAREERS</a>
                        <a className="a-right" href="/">BLOG</a>
                        <p>© 2018 Giyoomeh lnc. <br/>PHONE SUPPORT:+989366710119</p>

                    </div>
                </footer>
            </div>





        )
    }
}