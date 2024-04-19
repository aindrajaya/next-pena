'use client'

import React from 'react'
import APIReference from "../../components/APIReference"
import { apiReferenceConfig } from '../../pena.config'

const Page = () => {
  return (
    <div className='w-full overflow-y-hidden'>
      <APIReference config={apiReferenceConfig}/>
    </div>
  )
}

export default Page