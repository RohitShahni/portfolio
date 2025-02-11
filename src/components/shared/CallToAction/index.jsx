import React from 'react';
import './style.scss'
import Arrow from '../../shared/arrow/index'

const CallToAction = ({text, icon, action, content,styles}) => {
    return (
        <a href={content ? content : ''} download>
            <div className="call-to-action" style={styles} onClick={action}>
                <span className="text">{text}</span>
                {icon ? <div className={'icon'}>{icon}</div> : <Arrow/>}
            </div>
        </a>
    )
}

export default CallToAction;
