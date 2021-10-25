import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import Slider from '../Slider';
import ReferCard from '../ReferCard';
import SocialCard from '../SocialCard';

const Detailbar = props => {
  return (
    <aside className="w-72 2xl:w-detailbar float-right align-top">
      <div className="h-full fixed overflow-y-auto pb-10 2xl:pb-0 overflow-x-hidden border-l bg-white">
        <div className="pt-5 2xl:pt-10">
          <div className="h-20">
            <div className="flex items-center justify-between px-5">
              <div className="flex items-center">
                <Image
                  src="/images/profile.jpg"
                  width={47.62}
                  height={47.62}
                  className="object-cover rounded-full"
                />
                <div className="ml-5">
                  <p className="text-sm font-bold text-font-darker relative">
                    Paul Emas
                  </p>
                  <p className="text-xs font-bold text-primary-base">
                    +234 07 5942 1153
                  </p>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faEllipsisH}
                className="text-xl text-font-muted cursor-pointer"
              />
            </div>
          </div>
          <ReferCard />
          <Slider />
          <SocialCard />
        </div>
      </div>
    </aside>
  );
};

Detailbar.propTypes = {};

export default Detailbar;
