

import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

interface Props {
    title: string,
    children: React.ReactNode
}

export default function Layout(props: Props) {
    return (
        <Grid padded container columns='16'>
            <Grid.Row>
                <Grid.Column width='16'>
                    <Header  style={{textAlign:'center', fontSize:'30px', color:'#8b0000', textDecoration:'underline'}} >{props.title}</Header>
                </Grid.Column>
            </Grid.Row>
            {
                props.children
            }
        </Grid>
    )
}
