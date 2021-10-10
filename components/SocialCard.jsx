import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialCard = () => (
  <div className="mt-5 px-5">
    <p className="text-base text-center">Follow us on social media</p>
    <div className="flex justify-center space-x-5 mt-5">
      <a
        href=""
        className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-secondary-twitter rounded-full"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-xl text-white mt-1.5 lg:mt-2.5"
        />
      </a>
      <a
        href=""
        className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-white lg:border rounded-full"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-2xl mt-1.5 lg:mt-2"
        />
      </a>
      <a
        href=""
        className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-secondary-linkedin rounded-full"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="text-xl text-white mt-1.5 lg:mt-2.5"
        />
      </a>
      <a
        href=""
        className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-secondary-youtube rounded-full"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          className="text-xl text-white mt-1.5 lg:mt-2.5"
        />
      </a>
    </div>
  </div>
);

export default SocialCard;
