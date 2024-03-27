import cityHallLogo from "../../assets/logo.png";

const Logo = () => {
  return (
    <a
      aria-label="Bacoor City Hall Logo"
      href="/"
      className="w-[125px] h-[125px]"
    >
      <img
        src={cityHallLogo}
        alt="Bacoor City Hall Logo"
        id="main-logo"
        className="rounded-full"
      />
    </a>
  );
};

export default Logo;