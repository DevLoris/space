import React, { FC } from 'react'
import cx from 'classnames'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import * as SC from './styled'

export type LayoutProps = {
  className?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  const { children, className, header = <Header />, footer = <Footer /> } = props

  return (
    <SC.Container className={cx(className)}>
      <>{header}</>
      {children}
      <>{footer}</>
    </SC.Container>
  )
}

export default Layout
