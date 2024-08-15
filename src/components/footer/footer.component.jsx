import "./footer.styles.scss"
import FooterLink from "../footer-links/footer-links.component"
const logo = require("../../Images/Logo/logo-three.png")

const FooterLinksContent = [
    {
        title:"About",
        links:[
            {
                title:"How it works",
                link:"#"
            },
            {
                title:"Featured",
                link:"#"
            },
            {
                title:"Partnership",
                link:"#"
            },
            {
                title:"Business",
                link:"#"
            }
        ]    
    },
    {
        title:"Community",
        links:[
            {
                title:"Events",
                link:"#"
            },
            {
                title:"Blog",
                link:"#"
            },
            {
                title:"Podcast",
                link:"#"
            },
            {
                title:"Invite a friend",
                link:"#"
            }
        ]
    },
    {
        title:"Socials",
        links:[
            {
                title:"Instagram",
                link:"#"
            },
            {
                title:"X",
                link:"#"
            },
            {
                title:"Facebook",
                link:"#"
            }
        ]
    }
]
const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-Links">
                <div className="Footer-Links-Left">
                    <div className="Footer-Links-Logo">
                        <img src={logo}/>
                        <h1>travacot</h1>
                    </div>
                    <div className="Footer-Links-Motto">
                        <p>Our vision is to provide convenience and help your sales business.</p>
                    </div>
                </div>
                <div className="Footer-Links-Right">
                    {
                        FooterLinksContent.map((content) => {
                            return (
                                <FooterLink title={content.title} links={content.links}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="Footer-Break"/>
            <div className="Footer-End">
                <div className="Footer-End-Left">
                   &copy;2024 TRAVACOT. All rights reserved
                </div>
                <div className="Footer-End-Right">
                    <a href="#">Privacy & Policy</a>
                    <a href="#">Terms & Condition</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;