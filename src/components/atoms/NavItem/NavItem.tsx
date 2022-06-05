import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  to: string;
  label: string;
  isActive?: boolean
}

const NavItem: React.FunctionComponent<IProps> = ({ to, label, isActive }) => {
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>
        <span>
          <div>{label}</div>
        </span>
      </Link>
    </li>
  )
}

export default NavItem