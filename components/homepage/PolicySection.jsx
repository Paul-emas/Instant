import { useEffect } from 'react';
import gsap from 'gsap';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useState } from 'react';

const PolicySection = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.static-nav',
        endTrigger: '.last-p',
        start: 'top top',
        end: 'top top',
        pin: true,
        pinSpacing: false,
        onEnter: () => setIsFixed(true),
        onEnterBack: () => setIsFixed(true),
        onLeave: () => setIsFixed(false),
        onLeaveBack: () => setIsFixed(false),
      },
    });
  }, []);

  console.log(isFixed);

  return (
    <div className="terms mx-auto overflow-hidden px-4 xl:container xl:px-14">
      <div className="flex py-36">
        <div className={`static-nav w-72 ${isFixed ? 'static-padding' : ''}`}>
          <div>
            <div className="flex w-full cursor-pointer items-center py-3">
              <FontAwesomeIcon icon={faChevronCircleDown} className="h-5 w-5 text-primary-base" />
              <span className="ml-4 font-bold">Introduction</span>
            </div>
            <div className="space-y-4 px-8 py-5">
              <button className="w-full text-left text-gray-400 hover:text-primary-base">
                Sub Link 1
              </button>
              <button className="w-full text-left text-gray-400 hover:text-primary-base">
                Sub Link 2
              </button>
              <button className="w-full text-left text-gray-400 hover:text-primary-base">
                Sub Link 3
              </button>
              <button className="w-full text-left text-gray-400 hover:text-primary-base">
                Sub Link 4
              </button>
            </div>
          </div>
          <div>
            <div className="flex w-full cursor-pointer items-center py-3">
              <FontAwesomeIcon icon={faChevronCircleDown} className="h-5 w-5 text-gray-400" />
              <span className="ml-4">Introduction</span>
            </div>
          </div>
          <div>
            <div className="flex w-full cursor-pointer items-center py-3">
              <FontAwesomeIcon icon={faChevronCircleDown} className="h-5 w-5 text-gray-400" />
              <span className="ml-4">Introduction</span>
            </div>
          </div>
          <div>
            <div className="flex w-full cursor-pointer items-center py-3">
              <FontAwesomeIcon icon={faChevronCircleDown} className="h-5 w-5 text-gray-400" />
              <span className="ml-4">Introduction</span>
            </div>
          </div>
          <div>
            <div className="flex w-full cursor-pointer items-center py-3">
              <FontAwesomeIcon icon={faChevronCircleDown} className="h-5 w-5 text-gray-400" />
              <span className="ml-4">Introduction</span>
            </div>
          </div>
        </div>
        <div className="ml-24 max-w-3xl">
          <h1 className="text-4.5xl font-bold">Header Text</h1>
          <p className="text-gray-400">Sub-header text</p>
          <div className="mt-16">
            <div className="text-2xl">The quick, brown fox, jumps over the lazy? DJ</div>
            <div className="my-5 text-justify leading-loose">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk
              MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
              for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
              fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick
              zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How
            </div>
            <div className="my-5 text-justify leading-loose">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk
              MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
              for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
              fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick
              zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How The quick,
              brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
              graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
              jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
              vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow,
              vexing daft Jim. Sex-charged fop blew my junk TV quiz. How
            </div>
            <div className="text-2xl">The quick, brown fox, jumps over the lazy? DJ</div>
            <div className="my-5 text-justify leading-loose">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk
              MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
              for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
              fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick
              zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How
            </div>
            <div className="my-5 text-justify leading-loose">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk
              MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
              for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
              fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick
              zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How The quick,
              brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
              graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
              jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
              vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow,
              vexing daft Jim. Sex-charged fop blew my junk TV quiz. How
            </div>
            <div className="text-2xl">The quick, brown fox, jumps over the lazy? DJ</div>
            <div className="my-5 text-justify leading-loose">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk
              MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
              for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
              fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick
              zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How
            </div>
            <div className="last-p my-5 text-justify leading-loose">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk
              MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
              for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
              fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick
              zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How The quick,
              brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
              graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
              jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
              vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow,
              vexing daft Jim. Sex-charged fop blew my junk TV quiz. How
            </div>
            <div className="my-5 text-justify leading-loose">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk
              MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
              for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
              fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick
              zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How The quick,
              brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
              graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
              jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
              vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow,
              vexing daft Jim. Sex-charged fop blew my junk TV quiz. How
            </div>
            <div className="my-5 text-justify leading-loose">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk
              MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
              for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
              fox. Bright vixens jump; dozy fowl quack. Quick wafting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicySection;
