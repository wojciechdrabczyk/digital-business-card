export const Contact = () => {
  return (
    <div className="buttons">
      <button className="EmailButton">
        <div className="btn-content-center-email">
          <img src="../images/EmailLogo.png" alt="Email logo" />
          <span>Email</span>
        </div>
      </button>
      <button className="LinkedInButton">
        <div className="btn-content-center-linkedin">
          <img src="../images/LinkedInLogo.png" alt="LinkedIn logo" />
          <span>LinkedIn</span>
        </div>
      </button>
    </div>
  );
};
