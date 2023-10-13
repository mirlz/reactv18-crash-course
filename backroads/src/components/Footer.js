import { socialLinks, pageLinks } from "../data";

const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map(page => {
                    return (
                        <li>
                            <a id={page.id} href={page.href} className="footer-link"> {page.text} </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="footer-icons">
                {socialLinks.map(link => {
                    return (
                        <li>
                            <a id={link.id} href={link.href} target="_blank" className="footer-icon" rel="noreferrer"
                            ><i className={link.icon}></i
                            ></a>
                        </li>
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
};

export default Footer;