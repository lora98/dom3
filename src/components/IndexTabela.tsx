
import React from 'react'
import { Table } from 'semantic-ui-react'
import { IndexCene } from '../tipovi'
interface Props {
    indeksi: IndexCene[]
}
export default function IndexTabela(props: Props) {
    return (
        <Table>
            <Table.Header >
                <Table.Row >
                    <Table.HeaderCell >Godina</Table.HeaderCell>
                    <Table.HeaderCell>Index cene</Table.HeaderCell>
                    <Table.HeaderCell>Inflacija</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    props.indeksi.map((element, ind) => {
                        return (
                            <Table.Row key={ind}>
                                <Table.Cell>{element.godina}</Table.Cell>
                                <Table.Cell>{element.vrednost}</Table.Cell>
                                <Table.Cell>{element.inflacija?.toFixed(4) || '0'}%</Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    )
}
