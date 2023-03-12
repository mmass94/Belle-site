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
      <a href="https://wa.me/+966552126699" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} color="#666" />
      </a>
      <a
        href="https://www.snapchat.com/add/belle_saudi?share_id=CnbdeHlvAKE&locale=en-US"
        className="snapchat"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSnapchat} color="#666" />
      </a>
      <a href="https://www.youtube.com/@belle_saudi" target="_blank">
        <FontAwesomeIcon icon={faYoutube} color="#666" />
      </a>
      <a
        href="https://twitter.com/belle_saudi?s=11&t=msld0ZcICLviFreOdBQH_A"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} color="#666" />
      </a>
      <a
        href="https://m.facebook.com/story.php?story_fbid=1617802041982752&substory_index=1617802041982752&id=100089267318886&mibextid=Nif5oz"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} color="#666" />
      </a>
      <a
        href="https://instagram.com/belle_saudi?igshid=YmMyMTA2M2Y="
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} color="#666" />
      </a>
    </div>
  );
};
export default SocialIcons;
