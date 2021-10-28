import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialCard = ({ follow = true, center = false }) => (
  <div className="mt-5 px-5">
    {follow && (
      <p className="text-base text-center">Follow us on social media</p>
    )}
    <div
      className={`${
        center ? 'justify-center' : 'justify-end'
      } flex space-x-5 mt-5`}
    >
      <a
        href=""
        className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-secondary-twitter rounded-full"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-xl w-6 h-6 mx-auto text-white mt-1 lg:mt-2"
        />
      </a>
      <a
        href=""
        className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-white lg:border rounded-full"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-2xl w-6 h-6 mx-auto mt-1 lg:mt-2"
        />
      </a>
      <a
        href=""
        className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-secondary-linkedin rounded-full"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="text-xl w-6 h-6 mx-auto text-white mt-1 lg:mt-2"
        />
      </a>
      <a
        href=""
        className="w-8 h-8 lg:w-10 lg:h-10 text-center bg-secondary-youtube rounded-full"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          className="text-xl w-6 h-6 mx-auto text-white mt-1 lg:mt-2"
        />
      </a>
    </div>
  </div>
);

export default SocialCard;
