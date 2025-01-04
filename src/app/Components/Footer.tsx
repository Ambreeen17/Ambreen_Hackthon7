import React from 'react';

const Footer: React.FC = () => {
  return (

        <footer className="text-gray-600 body-font">
  <div className="container px-4 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto  text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src='/logo.png' alt="Logo"/>
      </a>
      <p className="mt-2 text-sm text-gray-500">Our vision is to provide convenience and help increase your sales business.</p>

      </div>
      
      <div className="flex-grow flex flex-wrap gap-10  my-4md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="flex-grow flex flex-wrap  md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/how-it-works" className="text-gray-600 hover:text-blue-800">How it works</a>
              </li>
              <li>
                <a href="/featured" className="text-gray-600 hover:text-blue-800">Featured</a>
              </li>
              <li>
                <a href="/partnership" className="text-gray-600 hover:text-blue-800">Partnership</a>
              </li>
              <li>
                <a href="/business-relation" className="text-gray-600 hover:text-blue-800">Business Relation</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Community</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/events" className="text-gray-600 hover:text-blue-800">Events</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-blue-800">Blog</a>
              </li>
              <li>
                <a href="/podcast" className="text-gray-600 hover:text-blue-800">Podcast</a>
              </li>
              <li>
                <a href="/invite-friend" className="text-gray-600 hover:text-blue-800">Invite a Friend</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Socials</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="https://discord.com" className="text-gray-600 hover:text-blue-800">Discord</a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-gray-600 hover:text-blue-800">Instagram</a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-gray-600 hover:text-blue-800">Twitter</a>
              </li>
              <li>
                <a href="https://facebook.com" className="text-gray-600 hover:text-blue-800">Facebook</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2022 MORENT — All rights reserved
          </p>
          <div className="text-sm sm:text-right">
            <a href="/privacy-policy" className="text-gray-600 hover:text-blue-800 mr-6">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-gray-600 hover:text-blue-800">Terms & Conditions</a>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
