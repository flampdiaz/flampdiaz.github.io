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
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={data.photo} alt="" />
              <h4>{data.name}</h4>
              <p className="text">{data.headLine}</p>
              <SectionSocialButtons />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="team-member">
              <p className="text text-left">
                Hello there, my name is Flampeyeiry Diaz, a software engineer based in Boston, MA.
                <br />
                <br />
                Since I was a kid, I was a fanatic of Blizzard and Nintendo videogames which 
                made me inspired to make games just like they do with those great Arts, UX, 
                Stories, and ideas to run those games. While I was living in the Dominican Republic, 
                I was trying to learn how to make video games just from meetups and youtube. 
                I joined a Dominican community for game developers on Facebook, since we don’t have 
                that industry in my country. I have met a team to made a startup where we made a 
                demo named Witchpires. At the end of  2017, I decided to move to the United State 
                to find greats opportunities to grow as a Software Engineer. I enrolled at Bunker 
                Hill Community College in Boston MA to learn English. In there I met and joined Hack 
                Diversity which helped me with mentorship, coaching, networking, have my first internship 
                in the USA named Carbon Black, and joined XR Terra where I got certificated from VR &amp; 
                AR developer program.
                <br />
                <br />
                Now in 2020, I got accepted to the Oculus Launchpad and looking to connect with 
                other entrepreneurial-minded people to make amazing games that are accessible across all platforms.
                <br />
                <br />
                Here are a few technologies I've been working with recently:
              </p>
              <ul class="skills-list text text-left">
                <li>Unity</li>
                <li>XR</li>
                <li>C#</li>
                <li>NodeJS</li>
                <li>ReactJS</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}