import React from 'react'

const CopyrightNotice = () => {

  const getYear = () => {
    const datum = new Date();
    return datum.getFullYear()
  }
  

  return (
    <div>
      ©{getYear()} Josef Reichelt
    </div>
  )
}

export default CopyrightNotice
