import React from 'react'

function TipButton(params: any) {
  return (
    <div className='tip-percent text-center'>{params.tipValue}</div>
  )
}

export default TipButton