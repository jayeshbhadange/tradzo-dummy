import React from 'react';

function Disclaimer() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 bg-gray-100 lg:px-8 py-10 text-black">
      <h1 className="text-3xl font-bold mb-6 text-center  sm:text-left">Disclaimer/Disclosures</h1>
      
      <div className="space-y-6 text-justify">
        {/* Research Team Section */}
        <div>
          <p className="font-semibold text-lg">RESEARCH TEAM</p>
          <ul className="space-y-1">
            <li>
              <p>Mr. Harsh Patel, CFA L2</p>
              <p>
                <a href="mailto:harsh@tradzo.in" className="text-blue-400">harsh@tradzo.in</a><br />
                +91 79 40391464
              </p>
            </li>
            <li>
              <p>Mrs. Shweta Patel, PGDM in Banking & Finance</p>
              <p>
                <a href="mailto:shweta.patel@tradzo.in" className="text-blue-400">shweta.patel@tradzo.in</a><br />
                +91 79 40391464
              </p>
            </li>
          </ul>
        </div>

        {/* Company Information */}
        <p>
          Tradzo Technologies Private Limited is a DPIIT Recognized Start-Up, incorporated in May 2023.
        </p>

        {/* SEBI Registration Details */}
        <p>
          Tradzo has applied for SEBI Registration under SEBI RA Regulation 2014 for an RA License. 
          As per SEBI guidelines, Tradzo has six months to complete registration and can operate as an RA and conduct product trial runs.
          Our services include research on financial market instruments & trends, developing investment & trading-related products, 
          software applications, and distribution services related to equity markets, primary market issues, debt markets, and 
          financial products like mutual funds, fixed deposits, and portfolio management.
        </p>

        {/* Legal Compliance */}
        <p>
          We are registered as a Research Analyst under SEBI (Research Analyst) Regulations, 2014.
        </p>

        <p>
          We declare that our activities have not been suspended, and we have not defaulted with any stock exchange authority
          with whom we are registered in the last five years. We have not been debarred from conducting business by any stock 
          exchange, SEBI, or any other authorities; nor has our SEBI registration certificate been canceled at any time.
        </p>

        {/* Liability Disclaimer */}
        <p>
          This material is for the personal information of the authorized recipient. It is not intended as an offer to sell or 
          solicit the purchase of any security in jurisdictions where such actions are illegal.
        </p>

        <p>
          While we believe the information provided is reliable, neither Tradzo Technologies Private Limited nor any person connected 
          with it accepts liability for its use. Recipients should perform their own investigations and seek professional advice.
        </p>

        {/* Investment Risk Information */}
        <p>
          Investments may go up or down in value. Past performance is not indicative of future results. Transactions involving 
          futures, options, or other derivatives entail substantial risks and may not be suitable for all investors.
        </p>

        <p>
          Opinions expressed herein are current as of the date of publication. Although we strive to update the information, 
          regulatory or other reasons may prevent us from doing so in real-time.
        </p>

        {/* Compensation & Conflict of Interest */}
        <p>
          We may have received compensation from the subject companies in the past 12 months. Our proprietary trading and 
          investment businesses may make decisions inconsistent with the views expressed herein.
        </p>

        {/* Research Analyst Certification */}
        <p>
          <strong>Research Analyst Certification:</strong> The analyst certifies that the views in this report accurately reflect 
          their personal views and that no part of their compensation is related to specific recommendations or opinions expressed.
        </p>

        {/* Copyright & Contact Information */}
        <p>
          No part of this material may be duplicated or redistributed without the prior written consent of Tradzo Technologies Private Limited.
        </p>

        <p>
          For clarifications or queries, contact us at <a href="mailto:care@tradzo.in" className="text-blue-400">care@tradzo.in</a>. 
          For grievances, contact <a href="mailto:shweta.patel@tradzo.in" className="text-blue-400">shweta.patel@tradzo.in</a>. 
          For escalation, contact <a href="mailto:harsh@tradzo.in" className="text-blue-400">harsh@tradzo.in</a>.
        </p>

        {/* Investor Complaints */}
        <p>
          Investor complaints can be lodged with SEBI at <a href="https://scores.gov.in/scores/Welcome.html" className="text-blue-400">SCORES</a> 
          or through the Exchange at 
          <a href="https://investorhelpline.nseindia.com/NICEPLUS/" className="text-blue-400"> NSE Helpdesk</a>, 
          <a href="https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx" className="text-blue-400"> BSE Helpdesk</a>.
        </p>
      </div>
    </div>
  );
}

export default Disclaimer;
