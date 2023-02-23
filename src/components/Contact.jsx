export const Contact = () => {
  return (
    <>
      <button className="btn">
        <div className="btn-content">
          <img
            src="../images/EmailLogo.png"
            alt="Email logo"
            style={{ width: "15px" }}
          />
          <span>Email</span>
        </div>
      </button>
      <button className="btn btn--linkedin">
        <div className="btn-content">
          <img
            src="../images/LinkedInLogo.png"
            alt="LinkedIn logo"
            style={{ width: "15px" }}
          />
          <span>LinkedIn</span>
        </div>
      </button>
    </>
  );
};
