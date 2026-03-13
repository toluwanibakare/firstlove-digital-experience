const LOGO_URL = "https://firstloveassembly.org.ng/img/FLA_LOGO_MAIN.png";

const PageLoader = () => {
  return (
    <div className="page-loader" aria-hidden="true">
      <div className="page-loader__glow" />
      <img
        src={LOGO_URL}
        alt="FirstLove Assembly logo"
        className="page-loader__logo"
      />
    </div>
  );
};

export default PageLoader;
