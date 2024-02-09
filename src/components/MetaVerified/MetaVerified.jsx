import React from 'react'
import TickVipUset from '../../img/checklist (2).png'
import './MetaVerified.css'
import { useAuth } from '../../context/AuthContextProvider'

const MetaVerified = () => {
  const {addVerified} = useAuth();
  return (
    <div className='containerMeta'>
      <div className='container-form'>
        <div className='containerImg'><img  src={TickVipUset} alt="" /></div>
        <div className='h2'><h2>Become Meta Verified</h2></div>
        <div className='containerP'><p>Расширьте свое присутствие в социальных сетях с помощью Meta Verified, нового пакета подписки, доступного для авторов и предприятий на Threads.</p></div>
        <div className='btn'><button onClick={addVerified}>Приобрести</button></div>
        <div><p className='lastP'>Возможности, доступность и цены могут различаться в зависимости от региона.</p></div>
      </div>
    </div>
  )
}

export default MetaVerified
