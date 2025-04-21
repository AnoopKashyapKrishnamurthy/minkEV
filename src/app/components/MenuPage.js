import Link from 'next/link';
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';

export default function MenuPage({ onClose }) {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-white px-6 sm:px-10 py-16 overflow-hidden">
      {/* Main Content */}
      <main className="flex flex-col space-y-16">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row justify-between w-full gap-20">
            {/* Left Section - Navigation */}
            <div className="space-y-14">
              <nav className="space-y-14">
                <div>
                  <Link href="/" className="group flex items-center text-4xl font-semibold" onClick={onClose}>
                    <span className="group-hover:text-lime-400 transition-colors">Home</span>
                  </Link>
                </div>

                <div>
                  <Link href="/product" className="group flex items-center text-4xl font-semibold mb-2" onClick={onClose}>
                    <span className="group-hover:text-lime-400 transition-colors">Product</span>
                  </Link>
                  <div className="ml-1 space-x-6 text-base text-gray-400">
                    <Link href="/product#features" onClick={onClose} className="hover:text-white transition-colors">Features</Link>
                    <Link href="/product#faq" onClick={onClose} className="hover:text-white transition-colors">FAQ</Link>
                  </div>
                </div>

                <div>
                  <Link href="/about-us" className="group flex items-center text-4xl font-semibold mb-2" onClick={onClose}>
                    <span className="group-hover:text-lime-400 transition-colors">About us</span>
                  </Link>
                  <div className="ml-1 space-x-6 text-base text-gray-400">
                    <Link href="/about-us#team" onClick={onClose} className="hover:text-white transition-colors">Team</Link>
                    <Link href="/about-us#careers" onClick={onClose} className="hover:text-white transition-colors">Careers</Link>
                    <Link href="/about-us#contact" onClick={onClose} className="hover:text-white transition-colors">Contact</Link>
                    <Link href="/about-us#vision" onClick={onClose} className="hover:text-white transition-colors">Vision</Link>
                    <Link href="/about-us#mission" onClick={onClose} className="hover:text-white transition-colors">Mission</Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <Link href="/reserve" className="group flex items-center text-4xl font-semibold" onClick={onClose}>
                    <span className="group-hover:text-lime-400 transition-colors">Reserve</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg" className="ml-2 transform -rotate-45">
                      <path d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  <Link href="/about-us#contact" className="group flex items-center text-4xl font-semibold" onClick={onClose}>
                    <span className="group-hover:text-lime-400 transition-colors">Invest</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg" className="ml-2 transform -rotate-45">
                      <path d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </nav>
            </div>

            {/* Right Section - Socials + Newsletter */}
            <div className="w-full max-w-md space-y-10 lg:mt-auto lg:self-end">
              <div>
                <h3 className="text-base font-medium mb-3">Follow us on</h3>
                <div className="flex flex-wrap gap-4 text-white text-lg">
                  {[
                    { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61566290847127" },
                    { icon: <FaXTwitter />, href: "https://x.com/MinkElectric" },
                    { icon: <FaInstagram />, href: "https://www.instagram.com/ev.mink/" },
                    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/minkev/" },
                    { icon: <FaWhatsapp />, href: "" },
                    { icon: <FaYoutube />, href: "https://www.youtube.com/@MinkEV" },
                  ].map(({ icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-400 transition-colors duration-200"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex items-center border-b border-gray-600 pb-1"
              >
                {/* Hidden Web3Forms fields */}
                <input type="hidden" name="access_key" value="d0a6e82b-70fd-42bc-bcf0-4911ece9ee97" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                <input type="hidden" name="subject" value="New Newsletter Subscription" />

                {/* Newsletter input */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your e-mail address"
                  required
                  className="bg-transparent outline-none w-full text-base placeholder-gray-400"
                />

                <button type="submit" className="ml-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5L21 12M21 12L14 19M21 12H3"
                      stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
