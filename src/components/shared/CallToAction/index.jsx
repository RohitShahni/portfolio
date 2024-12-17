import React from 'react';
import './style.scss'
import Arrow from '../../shared/arrow/index'

const CallToAction = ({text, icon, action}) => {
  return (
    <div className="call-to-action" onClick={action}>
      <span className="text">{text}</span>
      {icon ? <div className={'icon'}>{icon}</div> : <Arrow/>}

    </div>
  )
}

export default CallToAction;
