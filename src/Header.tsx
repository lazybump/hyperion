const Header = () => {
  return (
    <header className="bg-white py-3 lg:px-6">
      <nav className="flex items-center justify-around">
        <img src="/assets/images/url.png" alt="/" className="h-4" />
        <h3 className="lg:hidden text-sm font-bold">Get mentor support</h3>
        <h3 className="hidden lg:block flex-grow ml-12 text-primary font-bold">
          Full Stack Web Developer Bootcamp
        </h3>
        <div className="bg-white relative lg:w-32 group cursor-pointer lg:pr-4 lg:pl-2">
          <div className="flex justify-between space-x-2">
            <img
              src="/assets/images/student.png"
              alt="profile"
              className="h-5 rounded-full inline"
            />
            <span className="font-bold">Profile</span>
          </div>
          <ul className="hidden group-hover:block group-hover:bg-white absolute right-0 left-0 p-4 font-bold space-y-1">
            <li>
              <a href="/">Edit Profile</a>
            </li>
            <li>
              <a href="/">Log out</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
