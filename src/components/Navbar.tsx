

import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Navbar() {
    return (
        <Menu fluid borderless >
            <Menu.Item as={Link} to='/'>
                Stopa zaposlenisti
            </Menu.Item>
            <Menu.Item as={Link} to='/inflation'>
                Stopa inflacije
            </Menu.Item>
        </Menu>
    )
}
