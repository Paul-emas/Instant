import FacebookIcon from '../public/svgs/social/facebook.svg';
import WhatsappIcon from '../public/svgs/social/whatsapp.svg';
import InstagramIcon from '../public/svgs/social/instagram.svg';
import TwitterIcon from '../public/svgs/social/twitter.svg';

const SocialCard = ({ follow = true, center = true }) => (
  <div className="mt-5 px-5">
    {follow && (
      <p className="text-sm text-center">Join our community on social media</p>
    )}
    <div className="flex justify-center items-center mt-4 space-x-4">
      <FacebookIcon />
      <WhatsappIcon />
      <InstagramIcon />
      <TwitterIcon />
    </div>
  </div>
);

export default SocialCard;
