import React from 'react'

export default function TraitsListLabels({ traits, className = "" }) {
    return (
        <div className={"text-muted " + className}>
            {traits.join(" - ")}
        </div>
    )
}
