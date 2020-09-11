import React from 'react'


import { socialButtonsData } from '../../util';

export default () => {
  return (
    <ul className="list-inline social-buttons">
      {
        socialButtonsData && socialButtonsData.map(({ url, icon }, index) =>
          <li className="list-inline-item">
            <a href={url}>
              <img className="icons" src={icon} alt="" />
            </a>
          </li>
        )
      }
    </ul>
  )
}