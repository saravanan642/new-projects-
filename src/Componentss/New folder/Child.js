import React from 'react'
import Parents from './Parents'

const Child = ({BIO}) => {
  return (
    <div>
      <Parents name={"Saravanan"} age={56} />

      <p>{BIO?.fname ?? "-"}</p>
      <p>{BIO?.age || "-"}</p>
      
    </div>
  )
}

export default Child
