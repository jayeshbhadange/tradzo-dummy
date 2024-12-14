import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Only Logo/Logo-01.svg";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = () => {
    navigate("/terms");
    setTimeout(() => {
      const section = document.querySelector("refund");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-slate-50 text-gunmetal py-16">
      <div className="container sm:text-sm md:text-md text-xs mx-auto px-6 lg:px-1">
        {/* Intro */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center text-center mb-8 lg:px-32">
          {/* Left Text Section */}
          <div className="md:flex-1">
            <p className="text-[13px] leading-6 text-justify">
              Tradzo Technologies creates platforms & investment products to
              invest in Indian Equities with more Transparency & Professional
              Approach. Our strategies are curated to provide actionable
              research and trades in Equities & Derivatives.
            </p>
          </div>

          {/* Logo Section */}
          <div className="md:flex-1 flex flex-col items-center gap-2">
            <Link to="/" className="flex justify-center">
              <img
                src={logo}
                className="md:h-32 sm:h-16 h-12 w-auto"
                alt="Logo"
              />
            </Link>

            {/* Center Section with Love */}
            <div className="md:py-5">
              <p className="text-[12px] flex justify-center items-center">
                Building in India with{" "}
                <span className="ml-1">
                  <FaHeart className="text-red-500" />
                </span>
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:flex-1 grid grid-cols-3 gap-4">
            {/* Company */}
            <div>
              <h2 className="text-md font-semibold mb-4">Company</h2>
              <ul className="space-y-1 text-[13px]">
                <li>
                  <Link to="/contact" className="hover:text-gray-400">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:careers@tradzo.in"
                    className="hover:text-gray-400"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-md font-semibold mb-4">Resources</h2>
              <ul className="space-y-1 text-[13px]">
                <li>
                  <a
                    href="https://www.nseindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    NSE
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.bseindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    BSE
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sebi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    SEBI
                  </a>
                </li>
                <li>
                  <a
                    href="https://scores.sebi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    SCORES
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-md font-semibold mb-4">Legal</h2>
              <ul className="space-y-1 text-[13px]">
                <li>
                  <Link to="/privacy-policy" className="hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="/terms" className="hover:text-gray-400">
                    Terms & Uses Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Disclaimer Section */}

        <div className="mx-auto px-2 pb-10 lg:px-32">
          <div className="my-2">
            <p className="text-[10px] sm:text-xs md:text-sm">
              "Investment in securities are subject to market risk. Read all the
              investment related documents carefully & consult your financial
              advisor before investing"
            </p>
          </div>
          <div
            className="xl:px-10 sm:px-5 px-2 py-1 rounded-lg border border-gray-300 cursor-pointer transition-all text-gunmetal bg-slate-50 hover:shadow-md"
            onClick={() => setIsOpen(!isOpen)} // Toggle the content
          >
            {/* Entire Card as One Block */}
            <div className="flex justify-between items-center">
              <h3 className="text-sm md:text-md lg:text-lg font-bold">
                Disclaimer:
              </h3>

              <span
                className={`text-md md:text-lg font-bold transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowDropdownCircle />
              </span>
            </div>

            {/* Collapsible Content */}
            <div
              className={`overflow-hidden transition-all text-[10px] md:text-[11px] ease-in-out ${
                isOpen ? "mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-2 text-justify break-words">
                {/* Company Information */}
                <div className="font-semibold space-y-2">
                  <p>
                    Tradzo Technologies Private Limited is a DPIIT Recognized
                    Start-Up, incorporated in May 2023.
                  </p>
                  {/* SEBI Registration Details */}
                  <p>
                    Tradzo is in process to apply for SEBI registrastion under
                    SEBI RA Regulation 2014 for RA License. Our businesses
                    include Research on Financial Market Instruments & Financial
                    Market Trend, Providing and developing Investment & trading
                    related products, software applications & distribution
                    services rendered in connection with Equities Market,
                    primary market issues, Debt Market and financial products
                    like mutual funds and fixed deposits, Portfolio Management.
                  </p>
                </div>
                {/* Legal Compliance */}
                <p>
                  We hereby declare that our activities were neither suspended
                  nor we have defaulted with any stock exchange authority with
                  whom we are registered in last five years. We have not been
                  debarred from doing business by any Stock Exchange / SEBI or
                  any other authorities; nor has our certificate of registration
                  been cancelled by SEBI at any point of time.
                </p>

                <p>
                  We await SEBI approval to offer our research services to
                  clients as well as our prospects. This document is not for
                  public distribution and has been furnished to you solely for
                  your information and must not be reproduced or redistributed
                  to any other person. Persons into whose possession this
                  document may come are required to observe these restrictions.
                </p>
                {/* Liability Disclaimer */}
                <p>
                  This material is for the personal information of the
                  authorized recipient, and we are not soliciting any action
                  based upon it. This report is not to be construed as an offer
                  to sell or the solicitation of an offer to buy any security in
                  any jurisdiction where such an offer or solicitation would be
                  illegal. It is for the general information of clients of
                  Tradzo Technologies Private Limited. It does not constitute a
                  personal recommendation or consider the particular investment
                  objectives, financial situations, or needs of individual
                  clients.
                </p>

                <p className="text-night">
                  Tradzo uses charts powered by{" "}
                  <a
                    href="http://tradingview.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-all"
                  >
                    TradingView
                  </a>
                  , under free licencing agreement with
                  https://www.tradingview.com website.
                </p>

                <div className="py-2">
                  <p className="font-semibold text-sm mb-2">Research Team</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="p-2 border text-[11px] border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                      <p className="font-medium text-night">
                        Mr. Harsh Patel, CFA L2
                      </p>
                      <p className="mt-1">
                        <a
                          href="mailto:harsh@tradzo.in"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          harsh@tradzo.in
                        </a>
                        <br />
                        <span className="">+91 79 40391464</span>
                      </p>
                    </li>
                    <li className="p-2 border border-gray-200 text-[11px] rounded-lg hover:shadow-lg transition-shadow">
                      <p className="font-medium text-night">
                        Mrs. Shweta Patel, PGDM in Banking & Finance
                      </p>
                      <p className="mt-1">
                        <a
                          href="mailto:shweta.patel@tradzo.in"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          shweta.patel@tradzo.in
                        </a>
                        <br />
                        <span className="">+91 79 40391464</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <h2 className="text-xs font-semibold pt-2">About Research</h2>
                <p>
                  Reports may include current or historical information, it is
                  believed to be reliable though its accuracy or completeness
                  cannot be guaranteed. Neither Tradzo Technologies Private
                  Limited, nor any person connected with it, accepts any
                  liability arising from the use of this document. The
                  recipients of this material should rely on their own
                  investigations and take their own professional advice. The
                  price and value of the investments referred to in this
                  material may go up or down. Past performance is not a guide
                  for future performance. Certain transactions -including those
                  involving futures, options and other derivatives as well as
                  non-investment grade securities - involve substantial risk and
                  are not suitable for all investors. Reports based on technical
                  analysis centers on studying charts of a stock's price
                  movement and trading volume and are short-term in nature, as
                  opposed to focusing on a company's fundamentals and as such,
                  may not match with a report on a company's fundamentals & in
                  long-term.
                </p>
                <p>
                  Opinions expressed are our current opinions as of the date
                  appearing in this material only. While we endeavor to update
                  on a reasonable basis the information discussed in this
                  material, there may be regulatory, compliance or other reasons
                  that prevent us from doing so. Prospective investors and
                  others are cautioned that any forward-looking statements are
                  not predictions and may be subject to change without notice.
                  Our proprietary trading and investment businesses may make
                  investment decisions that are inconsistent with the
                  recommendations expressed herein. Tradzo Technologies Private
                  Limited has independent equity research. This report has been
                  prepared by Tradzo Technologies Private Limited.
                </p>
                <p>
                  We and our affiliates/associates, officers, directors, and
                  employees, Research Analyst(including relatives) worldwide
                  may: (a) from time to time, have long or short positions in,
                  and buy or sell the securities thereof, of company (ies)
                  mentioned herein or (b) be engaged in any other transaction
                  involving such securities and earn brokerage or other
                  compensation or act as a market maker in the financial
                  instruments of the subject company/companies discussed herein
                  or act as advisor or lender / borrower to such company (ies)
                  or have other potential/material conflict of interest with
                  respect to any recommendation and related information and
                  opinions at the time of publication of Research Report or at
                  the time of public appearance. Tradzo Technologies Private
                  Limited may have a proprietary long/short position in the
                  above-mentioned scrip(s) and therefore may be considered as
                  interested. The views provided herein are general in nature
                  and do not consider the risk appetite or investment objective
                  of particular investor; readers are requested to take
                  independent professional advice before investing. This should
                  not be construed as an invitation or solicitation to do
                  business with Tradzo. Tradzo Technologies Private Limited does
                  not provide any promise or assurance of favorable view for a
                  particular industry or sector or business group in any manner.
                  The investor is requested to take into consideration all the
                  risk factors including their financial condition, suitability
                  to risk return profile and take professional advice before
                  investing, our research recommendations are standardized based
                  on back-tested strategies and given with Stop-loss. All these
                  recommendations are based on the probability of success. Every
                  recommendation has a somewhat probability of failure, thus
                  investor must follow stop-loss to avoid uncomfortable loss
                  scenarios.
                </p>
                <p>
                  The analyst for this report certifies that all the views
                  expressed in this report accurately reflect his or her
                  personal views about the subject company or companies and its
                  or their securities, and no part of his or her compensation
                  was, is or will be, directly or indirectly related to specific
                  recommendations or views expressed in this report.
                </p>
                <p>
                  No part of this material may be duplicated in any form and/or
                  redistributed without Tradzo Technologies Private Limited’s
                  prior written consent.
                </p>
                <p>
                  We may have received compensation from the subject
                  company(ies) in the past 12 months. No
                </p>
                <p>
                  We may have managed or co-managed public offering of
                  securities for the subject company(ies) in the past 12 months:
                  No
                </p>
                <p>
                  We may have received compensation for investment banking or
                  merchant banking or brokerage services from the subject
                  company(ies) in the past 12 months. We or our associates may
                  have received any compensation for products or services other
                  than investment banking or merchant banking or brokerage
                  services from the subject company(ies) in the past 12 months.
                  We or our associates may have received compensation or other
                  benefits from the subject company(ies) or third party in
                  connection with the research report. Our associates may have
                  financial interest in the subject company(ies).
                </p>
                <p>
                  Research Analyst or his/her relative's financial interest in
                  the subject company(ies): No
                </p>
                <p>
                  Tradzo Technologies Private Limited has financial interest in
                  the subject company(ies) at the end of the month immediately
                  preceding the date of publication of Research Report: No
                </p>
                <p>
                  "However, Tradzo Technologies Private Limited Prop/Arbitrage
                  team could have exposure/financial interest to the subject
                  company/companies during the ongoing month." Nature of
                  financial interest is holding of equity shares or derivatives
                  of the subject company.
                </p>
                <p>
                  Our associates may have actual/beneficial ownership of less
                  than 1% securities of the subject company(ies) at the end of
                  the month immediately preceding the date of publication of
                  Research Report.
                </p>
                <p>
                  Research Analyst or his/her relatives has actual/beneficial
                  ownership of 1% or more securities of the subject company(ies)
                  at the end of the month immediately preceding the date of
                  publication of Research Report: No.
                </p>
                <p>
                  Tradzo Technologies Private Limited has actual/beneficial
                  ownership of 1% or more securities of the subject company(ies)
                  at the end of the month immediately preceding the date of
                  publication of Research Report: No
                </p>
                <p>
                  By referring to any particular sector, Tradzo Technologies
                  Private Limited does not provide any promise or assurance of
                  favorable view for a particular industry or sector or business
                  group in any manner. The investor is requested to take into
                  consideration all the risk factors including their financial
                  condition, suitability to risk return profile and take
                  professional advice before investing. Such representations are
                  not indicative of future results.
                </p>
                <p>
                  Subject company(ies) may have been client during twelve months
                  preceding the date of distribution of the research report.
                </p>
                <p>
                  "A graph of daily closing prices of securities is available at{" "}
                  <a
                    href="https://www.nseindia.com/ChartApp/install/charts/mainpage.jsp"
                    className="text-blue-700"
                  >
                    https://www.nseindia.com/ChartApp/install/charts/mainpage.jsp
                  </a>
                  {""} and{" "}
                  <a
                    href="http://economictimes.indiatimes.com/markets/stocks/stock-quotes"
                    className="text-blue-700"
                  >
                    http://economictimes.indiatimes.com/markets/stocks/stock-quotes
                  </a>
                  . Choose a company from the list on the browser and select the
                  "three years" icon in the price chart."
                </p>
                <p>
                  Our research should not be considered as an advertisement or
                  personal advice, it is professional & thus follow a standard
                  approach. The investor is requested to take into consideration
                  all the risk factors including their financial condition,
                  suitability to risk return profile and the like and take
                  professional advice before investing.
                </p>
                <p>
                  Investments in the securities market are subject to market
                  risks. Read all the related documents carefully before
                  investing.
                </p>
                <p>
                  Registration granted by SEBI and certification from NISM in no
                  way guarantee performance of the intermediary or provide any
                  assurance of returns to investors.
                </p>
                <p>
                  Derivatives are a sophisticated investment device. The
                  investor is requested to take into consideration all the risk
                  factors before actually trading in derivative contracts.
                  Compliance Officer Details: Mrs. Shweta Patel. Call: 079 -
                  4039 1464, or Email:{" "}
                  <a href="mailto:care@tradzo.in" className="text-blue-700">
                    care@tradzo.in
                  </a>
                  .
                </p>
                <p>Tradzo Technologies Private Limited.</p>
                <p>
                  Registered Office: A-416 SUMEL11, NAMASTE CIRCLE, SHAHIBAUG,
                  AHMEDABAD, GUJARAT 380004. CIN: , Telephone No.: +079
                  40391464. Website:{" "}
                  <a href="www.tradzo.in" className="text-blue-700">
                    www.tradzo.in {"."}
                  </a>
                </p>
                <p>
                  Correspondence Address: A-416 SUMEL11, NAMASTE CIRCLE,
                  SHAHIBAUG, AHMEDABAD, GUJARAT 380004. Telephone No: 42856825.
                  SEBI Registration No: (_)
                </p>
                <p>
                  In case you require any clarification or have any
                  query/concern, kindly write to us at{" "}
                  <a href="mailto:care@tradzo.in" className="text-blue-700">
                    care@tradzo.in
                  </a>
                  . For grievances, contact{" "}
                  <a
                    href="mailto:shweta.patel@tradzo.in"
                    className="text-blue-700"
                  >
                    shweta.patel@tradzo.in
                  </a>
                  . For escalation, contact{" "}
                  <a href="mailto:harsh@tradzo.in" className="text-blue-700">
                    harsh@tradzo.in
                  </a>
                  .
                </p>
                {/* Investor Complaints */}
                <p>
                  In absence of response/complaint not addressed to your
                  satisfaction, you may lodge a complaint with SEBI at {""}
                  <a
                    href="https://scores.gov.in/scores/Welcome.html"
                    className="text-blue-700"
                  >
                    https://scores.gov.in/scores/Welcome.html
                  </a>
                  {""} or Exchange at {""}
                  <a
                    href="https://investorhelpline.nseindia.com/NICEPLUS/"
                    className="text-blue-700"
                  >
                    https://investorhelpline.nseindia.com/NICEPLUS/
                  </a>
                  , {""}
                  <a
                    href="https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx"
                    className="text-blue-700"
                  >
                    https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx
                  </a>
                  . Investor Service Centre | National Commodity & Derivatives
                  Exchange Limited (ncdex.com), {""}
                  <a
                    href="https://igrs.mcxindia.com/"
                    className="text-blue-700"
                  >
                    https://igrs.mcxindia.com/
                  </a>
                  . Please quote your Service Ticket/Complaint Ref No. while
                  raising your complaint at SEBI SCORES/Exchange portal or
                  Depository at {""}
                  <a
                    href="https://www.epass.nsdl.com/complaints/websitecomplaints.aspx"
                    className="text-blue-700"
                  >
                    https://www.epass.nsdl.com/complaints/websitecomplaints.aspx
                  </a>
                  {""} and {""}
                  <a
                    href="https://www.cdslindia.com/Footer/grievances"
                    className="text-blue-700"
                  >
                    https://www.cdslindia.com/Footer/grievances
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="flex text-night justify-center space-x-4 text-2xl">
          <li>
            <a
              href="https://x.com/hitradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hitradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://m.facebook.com/HiTradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@hitradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://in.linkedin.com/company/tradzo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <div className="py-6 bg-gray-100 mt-8">
        <div className="container mx-auto px-6 lg:px-32 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            {/* Left Section */}
            <div className="text-center lg:left-0">
              <p className="text-[12px]">
                Copyright © 2024 Tradzo Technologies Pvt Ltd. All rights
                reserved.
              </p>
            </div>
            {/* Right Section */}
            <div className="text-center items-center lg:text-right">
              <p className="text-[12px] flex items-center justify-center">
                Charts are powered by&nbsp;
                <a
                  href="https://tradingview.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-all"
                >
                  TradingView
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-6 bg-gray-100 mt-8">
        <div className="container mx-auto px-6 lg:px-32 relative">
          <div className="flex items-center justify-between relative">
            Left Section
            <div className="text-center xl:text-left">
              <p className="text-[12px]">
                Copyright © 2024 Tradzo Technologies Pvt Ltd. All rights
                reserved.
              </p>
            </div>

            Right Section
            <div className="text-center xl:text-right">
              <p className="text-[12px] flex items-center justify-center">
                Charts are powered by
                <a
                  href="https://tradingview.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-all"
                >
                  {"  "}TradingView
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
