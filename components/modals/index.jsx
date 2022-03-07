import { useEffect } from 'react';
import PropTypes from 'prop-types';
import TimesIcon from '../../public/svgs/times.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { isMobile } from 'react-device-detect';

const Modal = ({ isAuth, title, close, border = true, successMessage, goBack, children }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.1,
    });

    if (!isMobile) {
      tl.fromTo('#modal-overlay', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 });
      tl.fromTo(
        '.modal-box',
        { autoAlpha: 0, scale: 0.8 },
        { autoAlpha: 1, scale: 1, duration: 0.3 },
      );
    } else if (isMobile && isAuth) {
      tl.fromTo('#modal-overlay', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 });
      tl.fromTo(
        '.modal-box',
        { autoAlpha: 0, scaleX: 0.9 },
        { autoAlpha: 1, scaleX: 1, duration: 0.3 },
      );
    } else {
      tl.fromTo('#modal-overlay', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 });
      tl.fromTo(
        '.modal-box',
        { autoAlpha: 0, y: '40%' },
        { autoAlpha: 1, y: 0, duration: 0.3 },
        '<',
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (successMessage && !isMobile) {
      gsap.from('.successAlert', {
        y: '1000%',
        autoAlpha: 0,
        duration: 0.5,
      });
    } else {
      gsap.from('.successAlert', {
        y: '-1000%',
        autoAlpha: 0,
        duration: 0.5,
      });
    }
  }, [successMessage]);

  return (
    <div className="fixed top-0 left-0 z-50 min-h-full w-full overflow-hidden">
      <div
        className={`${
          isAuth ? 'sm:flex' : 'flex items-end'
        } absolute inset-0 h-full w-full justify-center sm:items-center`}
      >
        <div
          onClick={() => close()}
          id="modal-overlay"
          className={`${
            isAuth
              ? 'bg-white lg:bg-secondary-modal lg:bg-opacity-80'
              : 'bg-secondary-modal bg-opacity-80'
          } modal-overlay absolute min-h-screen w-full`}
        ></div>
        <div className={`${isAuth ? 'px-3 pt-10 sm:px-0 sm:pt-0' : ''} w-full xs:w-modal`}>
          <div
            className={`${
              isAuth ? 'rounded-2xl' : 'modal-card rounded-t-2xl sm:rounded-2xl'
            } modal-box shadow-soft w-full overflow-y-auto bg-white pt-5 pb-12`}
          >
            <div className={`${border && 'border-b border-gray-100'} h-14 text-xl`}>
              <div className="px-4 sm:px-8">
                <div className="relative">
                  {goBack && (
                    <button
                      onClick={() => goBack()}
                      className="relative flex w-28 items-center justify-center rounded-lg bg-primary-light py-2 text-sm font-semibold hover:opacity-80"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-3 w-3" />
                      <span className="mt-0.5">Go back</span>
                    </button>
                  )}
                  {title && (
                    <div className="relative top-1 text-center font-bold">
                      <span>{title}</span>
                    </div>
                  )}
                  <button onClick={() => close()} className={`absolute top-0 right-0 float-right`}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-50 active:bg-gray-100">
                      <TimesIcon />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>

        {successMessage && (
          <>
            <div className="successAlert absolute z-10 hidden rounded-lg bg-secondary-green py-2.5 px-6 text-sm text-white sm:bottom-5 sm:block 2xl:bottom-10">
              {successMessage}
            </div>
            <div className="successAlert absolute top-0 z-10 block w-full bg-secondary-green py-2.5 px-4 text-center text-sm text-white sm:hidden">
              {successMessage}
            </div>
          </>
        )}
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
