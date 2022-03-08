import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Terms = () => {
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
          <h1 className="text-4.5xl font-bold">Terms of use</h1>
          <p className="text-gray-400">
            By using the instant energy services, web and mobile applications, you agree to be bound
            by the terms and conditions.
          </p>
          <div className="mt-14">
            <div className="mb-5 text-justify leading-loose">
              This website and the entire platform and mobile app are owned and operated by{' '}
              <strong>
                Instant Energy Technologies and Renewables LTD (Instant Energy) RC 1559339 and
                Instant Energy B.V. with KVK Number 73870927.
              </strong>{' '}
              Your access and use of this service is conditioned on your acceptance of and
              compliance with these terms. These terms apply to all users, visitors and other who
              access or use the service. These terms and conditions can be changed in the future
              without prior notice.
            </div>
            <div className="text-2xl font-semibold">Website and mobile app usage terms</div>
            <div className="my-5 text-justify leading-loose">
              By downloading or using our mobile app or using our web platform, these terms will
              automatically apply to you. You must therefore read carefully before using the app. We
              are offering you the app to use for your own personal use. The download and use of the
              application are free, but you should be aware that you are not allowed to copy, or
              modify the app, any part of the app, or our trademarks in any way. You are not allowed
              to attempt to extract the source code of the app, you are not permitted to translate
              the app into other languages, or make derivative versions. The app itself, and all the
              trademarks, copyright, database rights and other intellectual property rights related
              to it belong to Instant Energy.
            </div>
            <div className="text-2xl font-semibold">Information collection and use</div>
            <div className="my-5 text-justify leading-loose">
              While using our Service, we may ask you to provide us with certain personally
              identifiable information that can be used to contact or identify you. Personally,
              identifiable information may include, but is not limited to, your name, phone number,
              postal address, meter number and other information.
            </div>
            <div className="text-2xl font-semibold">Cookies</div>
            <div className="my-5 text-justify leading-loose">
              We employ the use of cookies. By using{' '}
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng/</a>
              </Link>{' '}
              website you consent to the use of cookies in accordance with Instant energy’s privacy
              policy. Most of the modern-day interactive web sites use cookies to enable us to
              retrieve user details for each visit. Cookies are used in some areas of our site to
              enable the functionality of this area and ease of use for those people visiting. Some
              of our affiliate / advertising partners may also use cookies.
            </div>
            <div className="text-2xl font-semibold">License</div>
            <div className="my-5 text-justify leading-loose">
              Unless otherwise stated,{' '}
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng/</a>
              </Link>{' '}
              and/or its licensor’s own the intellectual property rights for all material on Instant
              energy all intellectual property rights are reserved. You may view and/or print pages
              from{' '}
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng/</a>
              </Link>{' '}
              for your own personal use subject to restrictions set in these terms and conditions.
            </div>
            <div className="text-2xl font-semibold">Sales of Prepaid meter units</div>
            <div className="my-5 text-justify leading-loose">
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng/</a>
              </Link>{' '}
              offers the user the option to purchase electricity on our web and mobile application
              platform, for only distribution companies that are in partnership with Instant energy
              and have been listed on our platforms. Our services will be limited to only prepay
              meter users and upgrades can be done to accommodate certain types of meters at the
              sole discretion of Instant energy. Vending points will also be listed on our website
              for easy access of electricity units. Designated points will be added or reduced at
              the sole discretion of Instant Energy without prior notice to the user.
            </div>
            <div className="my-5 text-justify leading-loose">
              All payment and purchase of electricity made on our app or via the website is to be
              made in Nigerian naira as in accordance with the policies of the Central bank of
              Nigeria. Users must be aware that all purchases can be subject to any credit
              limitations or payment imposed by the User’s bank. will at all times do its very best
              to see that our users receive their purchased electricity units immediately, but this
              can also be subject unavoidable service interruption, error and network down time from
              the electricity distribution company. In such circumstance instant energy will not
              bare any liability for such service interruption.
            </div>
            <div className="text-2xl font-semibold">Charges</div>
            <div className="my-5 text-justify leading-loose">
              By accepting our terms and conditions you hereby acknowledge, and accept that you will
              comply with our convenience fee of ₦100 naira per transaction in purchase of
              electricity units. Other services on our platforms are free, unless due to an upgrade
              on our services. In this case instantenergy.com.ng reserves the right to change its
              fees or make new amendments to existing policies without any prior notice.
            </div>
            <div className="my-5 text-justify leading-loose">
              Other charges imposed by the electricity distribution company such as VAT or an
              increase in Tariff are the sole responsibility of the Nigerian government through the
              Nigerian electricity regulation commission.{' '}
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng/</a>
              </Link>{' '}
              shall in no way be responsible for charges on customers debit/credit card made outside
              our platform.
            </div>
            <div className="text-2xl font-semibold">Refunds</div>
            <div className="my-5 text-justify leading-loose">
              We recommend contacting us promptly for assistance if you experience any such issue.
            </div>
            <div className="text-2xl font-semibold">Links to other websites</div>
            <div className="my-5 text-justify leading-loose">
              Our Service may contain links to third-party web sites or services that are not owned
              or controlled by www.
              <Link href="/">
                <a className="text-secondary-green hover:underline">instantenergy.com.ng/</a>
              </Link>
              {', '}
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng/</a>
              </Link>{' '}
              has no control over, and assumes no responsibility for, the content, privacy policies,
              or practices of any third-party web sites or services. You further acknowledge and
              agree that instant energy shall not be responsible or liable, directly or indirectly,
              for any damage or loss caused or alleged to be caused by or in connection with use of
              or reliance on any such content, goods or services available on or through any such
              web sites or services.
            </div>
            <div className="my-5 text-justify leading-loose">
              We strongly advise you to read the terms and conditions and privacy policies of any
              third-party web sites or services that you visit.
            </div>
            <div className="text-2xl font-semibold">Hyperlinking to our content</div>
            <div className="my-5 text-justify leading-loose">
              <ol className="list-decimal pl-4">
                <li>
                  The following organizations may link to our Web site without prior written
                  approval:
                  <ul className="list-disc pl-4 text-sm leading-loose">
                    <li>Government agencies</li>
                    <li>Search engines</li>
                    <li>News organizations</li>
                    <li>
                      Online directory distributors when they list us in the directory may link to
                      our Web site in the same manner as they hyperlink to the Web sites of other
                      listed businesses
                    </li>
                    <li>
                      System wide Accredited Businesses except soliciting non-profit organizations,
                      charity shopping malls, and charity fundraising groups which may not hyperlink
                      to our website
                    </li>
                  </ul>
                </li>
                <li>
                  These organizations may link to our home page, to publications or to other Web
                  site information so long as the link:
                  <ul className="list-disc pl-4 text-sm leading-loose">
                    <li>Is not in any way misleading</li>
                    <li>
                      Does not falsely imply sponsorship, endorsement or approval of the linking
                      party and its products or services
                    </li>
                    <li>Fits within the context of the linking party’s site</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="my-5 text-justify leading-loose">
              We will approve link requests from these organizations if we determine that:
              <ul className="list-disc pl-4 text-sm leading-loose">
                <li>
                  The link would not reflect unfavorably on us or our accredited businesses (for
                  example, trade associations or other organizations representing inherently suspect
                  types of business, such as work-at-home opportunities, shall not be allowed to
                  link);
                </li>
                <li>The organization does not have an unsatisfactory record with us</li>
                <li>Fits within the context of the linking party’s site</li>
                <li>
                  The benefit to us from the visibility associated with the hyperlink outweighs the
                  absence of Instant energy; and{' '}
                </li>
                <li>
                  Where the link is in the context of general resource information or is otherwise
                  consistent with editorial content in a newsletter or similar product furthering
                  the mission of the organization.
                </li>
              </ul>
            </div>
            <div className="my-5 text-justify leading-loose">
              If you are among the organizations listed in paragraph 2 above and are interested in
              linking to our website, you must notify us by sending an e-mail to{' '}
              <a
                href="mailto:support@instantenergy.com.ng"
                className="text-secondary-green hover:underline"
              >
                support@instantenergy.com.ng
              </a>
              {'. '}
              Please include your name, your organization name, contact information (such as a phone
              number and/or e-mail address) as well as the URL of your site, a list of any URLs from
              which you intend to link to our Web site, and a list of the URL(s) on our site to
              which you would like to link. Allow 2-3 weeks for a response
            </div>
            <div className="my-5 text-justify leading-loose">
              Approved organizations may hyperlink to our Web site as follows:
              <ul className="list-disc pl-4 text-sm leading-loose">
                <li>By use of our corporate name; or</li>
                <li>By use of the uniform resource locator (Web address) being linked to; or</li>
                <li>
                  By use of any other description of our Web site or material being linked to that
                  makes sense within the context and format of content on the linking party’s site.
                </li>
              </ul>
            </div>
            <div className="text-2xl font-semibold">Security</div>
            <div className="my-5 text-justify leading-loose">
              The security of your Personal Information is important to us, but remember that no
              method of transmission over the Internet, or method of electronic storage is 100%
              secure. While we strive to use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security
            </div>
            <div className="text-2xl font-semibold">Privacy Policy</div>
            <div className="my-5 text-justify leading-loose">
              We will not use or share your information with anyone except as described in this
              Privacy Policy.
            </div>
            <div className="my-5 text-justify leading-loose">
              We use your Personal Information for providing and improving the Service. By using the
              Service, you agree to the collection and use of information in accordance with this
              policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy
              Policy have the same meanings as in our Terms and Conditions, accessible at{' '}
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng/</a>
              </Link>{' '}
            </div>
            <div className="text-2xl font-semibold">Frames</div>
            <div className="my-5 text-justify leading-loose">
              Without prior approval and express written permission, you may not create frames
              around our Web pages or use other techniques that alter in any way the visual
              presentation or appearance of our Web site.
            </div>
            <div className="text-2xl font-semibold">Content Liability</div>
            <div className="my-5 text-justify leading-loose">
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng</a>
              </Link>{' '}
              shall have no responsibility or liability for any content appearing on your Web site.
              You agree to indemnify and defend us against all claims arising out of or based upon
              your Website. No link(s) may appear on any page on your Web site or within any context
              containing content or materials that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the infringement or
              other violation of, any third-party rights.
            </div>
            <div className="text-2xl font-semibold">Reservation Rights</div>
            <div className="my-5 text-justify leading-loose">
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng</a>
              </Link>{' '}
              reserves the right at any time and in its sole discretion to request that you remove
              all links or any particular link to our Web site. You agree to immediately remove all
              links to our Web site upon such request. We also reserve the right to amend these
              terms and conditions and its linking policy at any time. By continuing to link to our
              Web site, you agree to be bound to and abide by these linking terms and conditions.
            </div>
            <div className="text-2xl font-semibold">Removal of Links from our website</div>
            <div className="my-5 text-justify leading-loose">
              If you find any link on our Web site or any linked web site objectionable for any
              reason, you may contact us about this. We will consider requests to remove links but
              will have no obligation to do so or to respond directly to you.
            </div>
            <div className="my-5 text-justify leading-loose">
              Whilst we Endeavour to ensure that the information on this website is correct, we do
              not warrant its completeness or accuracy; nor do we commit to ensuring that the
              website remains available or that the material on the website is kept up to date.
            </div>
            <div className="text-2xl font-semibold">Users Responsibility</div>
            <div className="my-5 text-justify leading-loose">
              The User is responsible for all use of the Site made by the User or anyone else using
              the User’s password and for preventing unauthorized use of the User’s password. If the
              User believes there has been any breach of security such as the disclosure, theft or
              unauthorized use of the User’s Password or any payment information, the User must
              notify us immediately
            </div>
            <div className="text-2xl font-semibold">Use by Children</div>
            <div className="my-5 text-justify leading-loose">
              Our Service does not address anyone under the age of 13 (“Children”).
            </div>
            <div className="my-5 text-justify leading-loose">
              We do not knowingly collect personally identifiable information from children under
              13. If you are a parent or guardian and you are aware that your Child has provided us
              with Personal Information, please contact us if you discover that a Child under 13 has
              provided such personal information.
            </div>
            <div className="text-2xl font-semibold">Disclaimer</div>
            <div className="my-5 text-justify leading-loose">
              To the maximum extent permitted by applicable law, we exclude all representations,
              warranties and conditions relating to our website and the use of this website
              (including, without limitation, any warranties implied by law in respect of
              satisfactory quality, fitness for purpose and/or the use of reasonable care and will).
              Nothing in this disclaimer will:
              <ol className="list-decimal pl-8 leading-loose">
                <li>
                  Limit or exclude our or your liability for death or personal injury resulting from
                  negligence
                </li>
                <li>
                  Limit or exclude our or your liability for fraud or fraudulent misrepresentation
                </li>
                <li>
                  Limit any of our or your liabilities in any way that is not permitted under
                  applicable law; or
                </li>
                <li>
                  Exclude any of our or your liabilities that may not be excluded under applicable
                  law.
                </li>
              </ol>
            </div>
            <div className="my-5 text-justify leading-loose">
              The limitations and exclusions of liability set out in this Section and elsewhere in
              this disclaimer:
              <ol className="list-decimal pl-8 leading-loose">
                <li> Are subject to the preceding paragraph; and</li>
                <li>
                  Govern all liabilities arising under the disclaimer or in relation to the subject
                  matter of this disclaimer, including liabilities arising in contract, in tort
                  (including negligence) and for breach of statutory duty.
                </li>
              </ol>
            </div>
            <div className="my-5 text-justify leading-loose">
              To the extent that the website and the information and services on the website are
              provided free of charge, we will not be liable for any loss or damage of any nature.
            </div>
            <div className="text-2xl font-semibold">Govening Law</div>
            <div className="my-5 text-justify leading-loose">
              These Terms shall be governed and construed in accordance with the laws of Nigeria,
              without regard to its conflict of law provisions.
            </div>
            <div className="my-5 text-justify leading-loose">
              Our failure to enforce any right or provision of these Terms will not be considered a
              waiver of those rights. If any provision of these Terms is held to be invalid or
              unenforceable by a court, the remaining provisions of these Terms will remain in
              effect. These Terms constitute the entire agreement between us regarding our Service,
              and supersede and replace any prior agreements we might have between us regarding the
              Service.
            </div>
            <div className="last-p text-2xl font-semibold">Termination</div>
            <div className="my-5 text-justify leading-loose">
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng</a>
              </Link>{' '}
              may terminate or suspend access to our Service immediately, without prior notice or
              liability, for any reason whatsoever, including without limitation if you breach the
              Terms. All provisions of the Terms which by their nature should survive termination
              shall survive termination, including, without limitation, ownership provisions,
              warranty disclaimers, indemnity and limitations of liability
            </div>
            <div className="text-2xl font-semibold">Changes</div>
            <div className="my-5 text-justify leading-loose">
              <Link href="/">
                <a className="text-secondary-green hover:underline">www.instantenergy.com.ng</a>
              </Link>{' '}
              reserves the right, at our sole discretion, to modify or replace these Terms at any
              time. If a revision is material we will try to provide at least 30 days’ notice prior
              to any new terms taking effect. What constitutes a material change will be determined
              at our sole discretion. By continuing to access or use our Service after those
              revisions become effective, you agree to be bound by the revised terms. If you do not
              agree to the new terms, please stop using the Service.
            </div>
            <div className="text-2xl font-semibold">Contact us</div>
            <div className="my-5 text-justify leading-loose">
              If you have any questions about these Terms, please{' '}
              <Link href="/contact">
                <a className="text-secondary-green hover:underline">Contact us</a>
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;