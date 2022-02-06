import PropTypes from 'prop-types';

import FacebookIcon from '../public/svgs/social/facebook.svg';
import WhatsappIcon from '../public/svgs/social/whatsapp.svg';
import InstagramIcon from '../public/svgs/social/instagram.svg';
import TwitterIcon from '../public/svgs/social/twitter.svg';

const SocialCard = ({ follow, center }) => (
  <div className="mt-5 px-5">
    {follow && <p className="text-center text-sm">Join our community on social media</p>}
    <div
      className={`${center ? 'justify-center' : 'justify-end'} mt-4 flex items-center space-x-4`}
    >
      <FacebookIcon />
      <WhatsappIcon />
      <InstagramIcon />
      <TwitterIcon />
    </div>
  </div>
);

SocialCard.defaultProps = {
  follow: true,
  center: true,
};

SocialCard.propTypes = {
  follow: PropTypes.bool,
  center: PropTypes.bool,
};

export default SocialCard;
