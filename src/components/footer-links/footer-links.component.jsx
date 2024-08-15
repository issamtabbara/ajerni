import "./footer-links.styles.scss"
const FooterLinks = ({title,links}) => {
  return (
    <div className="FooterLinks">
        <h1>{title}</h1>
        {
            links.map((link) => {
                return (
                    <div>
                        <a href={link.link}>{link.title}</a>
                    </div>
                )
            })
        }
    </div>
  );
}

export  default FooterLinks;