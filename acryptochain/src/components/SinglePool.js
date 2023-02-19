import React from 'react'

function SinglePool(param) { 
  return (
    <div>{param.label} : {param.name} | {param.userInfo}</div>
  )
}

export default SinglePool