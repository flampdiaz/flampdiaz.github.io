import React from 'react'

import SectionSocialButtons from './subComponents/SectionSocialButtons'

export default ({ data }) => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={data.photo} alt="" />
              <h4>{data.name}</h4>
              <p className="text">{data.headLine}</p>
              <SectionSocialButtons/>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="team-member">
              <p className="text">{data.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}