import React from 'react'

export default ({title, description}) => {
    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">{title}</h2>
                <h3 className="section-subheading text-muted">{description}</h3>
            </div>
        </div>
    )
}