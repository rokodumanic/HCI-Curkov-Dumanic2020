import React from 'react';
import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'

const RightNav = () => {
  return (
    <div>
        {navTabs.map(({ tab, to }) => (
            <Link to={to}>
                <span>{tab}</span>
            </Link>)
        )}
    </div>
  )
}

export default RightNav