import { useCallback } from "react";
import "./MainDashboard.css";
const MainDashboard = () => {
  const onFluentinfo16RegularIcon1Click = useCallback(() => {
    // Please sync "Main dashboard" to the project
  }, []);

  const onFrameContainer7Click = useCallback(() => {
    // Please sync "Main dashboard" to the project
  }, []);

  return (
    <div className="main-dashboard">
      <img className="status-bar-icon" alt="" src="/status-bar.svg" />
      <div className="home-indicator">
        <div className="rect" />
      </div>
      <div className="image-35-parent">
        <img className="image-35-icon" alt="" src="/image-35@2x.png" />
        <div className="hi-richie-wrapper">
          <div className="hi-richie">
            <span className="hi">{`Hi  `}</span>
            <span className="richie">Richie</span>
          </div>
        </div>
      </div>
      <div className="credit-report-summary">
        <b className="credit-report-summary1">Credit Report Summary</b>
      </div>
      <div className="we-are-unable">
        We are unable to offer loan to you due to Low Credit score!
      </div>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="reduce-your-credit-card-utiliz-parent">
            <div className="reduce-your-credit-container">
              <ul className="reduce-your-credit">
                Reduce your credit card utilization from 50% to 10%
              </ul>
            </div>
            <img
              className="fluentinfo-16-regular-icon"
              alt=""
              src="/fluentinfo16regular.svg"
            />
          </div>
          <div className="frame-child" />
          <div className="reduce-your-credit-card-utiliz-parent">
            <div className="reduce-your-credit-container">
              <ul className="reduce-your-credit">
                Close account that is unused in last 4 months
              </ul>
            </div>
            <img
              className="fluentinfo-16-regular-icon1"
              alt=""
              src="/fluentinfo16regular.svg"
              onClick={onFluentinfo16RegularIcon1Click}
            />
          </div>
          <div className="frame-child" />
          <div className="pay-bills-on-time-parent">
            <div className="reduce-your-credit-container">
              <ul className="reduce-your-credit">{`Pay bills on time `}</ul>
            </div>
            <img
              className="fluentinfo-16-regular-icon2"
              alt=""
              src="/fluentinfo16regular.svg"
            />
          </div>
          <div className="frame-child" />
          <div className="avoid-opening-unnecessary-cred-parent">
            <div className="reduce-your-credit-container">
              <ul className="reduce-your-credit">
                Avoid opening unnecessary credit accounts
              </ul>
            </div>
            <img
              className="fluentinfo-16-regular-icon"
              alt=""
              src="/fluentinfo16regular.svg"
            />
          </div>
        </div>
        <div className="view-more-wrapper" onClick={onFrameContainer7Click}>
          <div className="view-more">View More</div>
        </div>
      </div>
      <b className="how-to-get">{`How to get Instant Loan? `}</b>
      <div className="frame-container">
        <div className="semi-circle-container">
          <div className="semi-circle"></div>
        </div>
        <div className="very-poor-parent">
          <div className="very-poor1">Very Poor</div>
          <div className="div3">300-579</div>
        </div>
        <div className="group">
          <div className="div4">670-739</div>
          <div className="good">Good</div>
        </div>
        <div className="container">
          <div className="div4">580-669</div>
          <div className="fair">Fair</div>
        </div>
        <div className="frame-div">
          <div className="div6">740-850</div>
          <div className="excellent">Excellent</div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
