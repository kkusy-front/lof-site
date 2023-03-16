export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="https://www.facebook.com/LightOfFreedomUD"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Facebook
              </a>
            </li>

          </ul>
          <div className="flex flex-row mb-3 mt-5 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5  sm:mt-0">
            © 2021 Company Inc. By <a href="https://kusy-web.pl/"
              className="ml-1 text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              Kusy-Web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}