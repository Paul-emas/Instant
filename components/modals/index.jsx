import { useEffect } from 'react';
import PropTypes from 'prop-types';
import TimesIcon from '../../public/svgs/times.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { isMobile } from 'react-device-detect';

const Modal = ({ title, close, border = true, goBack, children }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.1,
    });

    if (!isMobile) {
      tl.fromTo(
        '.modal-overlay',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.2 },
      );
      tl.fromTo(
        '.modal-box',
        { autoAlpha: 0, scale: 0.8 },
        { autoAlpha: 1, scale: 1, duration: 0.3 },
      );
    } else {
      tl.fromTo(
        '.modal-overlay',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.2 },
      );
      tl.fromTo(
        '.modal-box',
        { autoAlpha: 0, y: '40%' },
        { autoAlpha: 1, y: 0, duration: 0.3 },
        '<',
      );
    }
  }, []);

  return (
    <div className="w-full min-h-screen top-0 left-0 fixed z-50 overflow-hidden">
      <div className="absolute w-full h-full inset-0  flex items-end sm:items-center justify-center">
        <div
          onClick={() => close()}
          className="modal-overlay w-full min-h-screen absolute bg-secondary-modal bg-opacity-70"
        ></div>
        <div className="modal-box w-full xs:w-modal pt-5 pb-10 rounded-t-2xl sm:rounded-2xl bg-white">
          <div
            className={`${border && 'border-b border-gray-100'} text-xl h-14`}
          >
            <div className="px-4 sm:px-8">
              <div className="relative">
                {goBack && (
                  <button
                    onClick={() => goBack()}
                    className="py-2 rounded-lg w-28 justify-center text-sm font-semibold bg-primary-light hover:opacity-80 flex relative items-center"
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="w-3 h-3 mr-2"
                    />
                    <span className="mt-0.5">Go back</span>
                  </button>
                )}
                {title && (
                  <div className="text-center font-bold relative top-1 ">
                    <span>{title}</span>
                  </div>
                )}
                <button
                  onClick={() => close()}
                  className={`top-0 float-right right-0 absolute`}
                >
                  <div className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-50 active:bg-gray-100">
                    <TimesIcon />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  setOpen: PropTypes.func,
  goBack: PropTypes.func,
};

export default Modal;
