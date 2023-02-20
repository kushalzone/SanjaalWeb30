import React from 'react'

function SinglePool(param) { 
  return (
    <li>{param.label} : {param.name} <br/> {param.userInfo}</li>
  )
}

export default SinglePool