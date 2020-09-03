import React from 'react'

import SectionHeader from './subComponents/SectionHeader'

export default ({ portfolioData }) => {
  return (
    <section className="page-section" id="portfolio">
      <div className="container">
        <SectionHeader title="Portfolio" description="samples of my projects" />
        <div className="row">
          {
            portfolioData && portfolioData.map(({ title, description, imgPath }, index) =>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x">
                      </i>
                    </div>
                  </div>
                  <img className="img-fluid" src={imgPath} alt="" />
                </a>
                <div className="portfolio-caption bg-dark">
                  <h4>{title} </h4>
                  <p className="text-muted">{description}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}