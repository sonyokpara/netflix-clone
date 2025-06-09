import './Footer.css'
import fbIcon from '../../assets/facebook_icon.png'
import xIcon from '../../assets/twitter_icon.png'
import igIcon from '../../assets/instagram_icon.png'
import youtubeIcon from '../../assets/youtube_icon.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <img src={fbIcon} alt="" />
        <img src={youtubeIcon} alt="" />
        <img src={igIcon} alt="" />
        <img src={xIcon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">&copy; 1997-2025 Netflix, Inc.</p>
    </footer>
  )
}
export default Footer
