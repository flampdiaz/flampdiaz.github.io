import React from 'react'
import Modal from 'react-modal'

import SectionHeader from './subComponents/SectionHeader'

export default ({ portfolioData }) => {
  return (
    <section className="page-section" id="portfolio">
      <div className="container">
        <SectionHeader title="Portfolio" description="" />
        <div className="row">
          {
            portfolioData && portfolioData.map(({ title, description, imgPath, youtubeUrl }, index) =>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" data-target="#portfolioModal1" href={youtubeUrl}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">

                    </div>
                  </div>
                  <img className="img-fluid" src={imgPath} alt="" />
                </a>
                <div className="portfolio-caption bg-dark align-items-center">
                  <h4>{title} </h4>
                  {description !== "" ? <p className="text">{description}</p> : null}
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}