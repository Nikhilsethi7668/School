
'use client'
export default function Footer() {
  return (
    <footer className="relative footer bg-transparent text-white py-8">
    {/* Background image */}
      <img
        src="/images/footer_bg.jpg"
        alt="US School Calendar Background"
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="lazy"
      />
      <div className="container relative bg-transparent mx-auto px-4 z-10">
        <div className="flex flex-wrap gap-8">
          <div className="w-full lg:w-1/4">
            <a href="/" className="inline-block footer-logo">
              <img src="/images/logo.webp" alt="logo image" className="max-w-full h-auto" />
            </a>
            <p className="mt-3 text-sm">
              We are one of the largest US public school holiday calendar providers on the web.
              We cover the up-to-date public and academic school calendars for our fellow scholars.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 footer-list-container">
            <h3 className="font-bold mb-2 footer-list-heading">Important Links</h3>
            <ul className="list-none space-y-1 footer-list">
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="w-full lg:w-1/4 footer-list-container footer-list-container-2">
            <h3 className="font-bold mb-2 footer-list-heading">Subscribe Now</h3>
            <form className="flex mt-3 form-inline" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-grow border border-white  rounded-l px-3 py-2 text-white placeholder:text-white"
              />
              <button type="submit" className="bg-white text-gray-900 px-4 rounded-r hover:bg-gray-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-2 mt-8 text-sm footer-bottom ">
        © 2025 SchoolCalendar.Net
      </div>
    </footer>
  )
}
