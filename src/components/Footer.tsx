const Footer = () => {
    return (
      <footer className="">
        <div className="w-full mx-auto max-w-screen-xl  p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-">
            © 2023 <a href="https://samarth.art" className="hover:underline">samarth.art</a>  All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-mediumsm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">instagram</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">GitHub</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">YouTube</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  