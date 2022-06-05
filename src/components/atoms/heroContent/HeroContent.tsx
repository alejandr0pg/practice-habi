import React from 'react'

interface IProps {
  children: React.ReactNode
}

const HeroContent: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <div className='container' style={{ display: 'grid' }}>
      {children}
    </div>
  )
}

export default HeroContent