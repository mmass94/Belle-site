import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faSnapchat,
  faYoutube,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div class="social-icons d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start">
      <a href="https://wa.me/1234567890">
        <FontAwesomeIcon icon={faWhatsapp} color="#666" />
      </a>
      <a href="https://www.snapchat.com/add/username" className="snapchat">
        <FontAwesomeIcon icon={faSnapchat} color="#666" />
      </a>
      <a href="https://www.youtube.com/channel/channel_id">
        <FontAwesomeIcon icon={faYoutube} color="#666" />
      </a>
      <a href="https://twitter.com/username">
        <FontAwesomeIcon icon={faTwitter} color="#666" />
      </a>
      <a href="https://www.facebook.com/username">
        <FontAwesomeIcon icon={faFacebook} color="#666" />
      </a>
      <a href="https://www.instagram.com/username/">
        <FontAwesomeIcon icon={faInstagram} color="#666" />
      </a>
    </div>
  );
};
export default SocialIcons;
