

import React from 'react'
import { Table } from 'semantic-ui-react'
import { ZaposlenostProps } from '../tipovi'
interface Props {
    zaposlenost: ZaposlenostProps
}
export default function ZaposlenostTabela(props: Props) {

    const ukupnoZap = props.zaposlenost.bezSkole + props.zaposlenost.fakultet + props.zaposlenost.srednja;
    const ukupno = ukupnoZap + props.zaposlenost.nezaposleni;

    return (
        <Table >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>Bez skole</Table.HeaderCell>
                    <Table.HeaderCell>Srednja strucna sprema</Table.HeaderCell>
                    <Table.HeaderCell>Fakultetsk</Table.HeaderCell>
                    <Table.HeaderCell>Ukupna zaposlenost</Table.HeaderCell>
                    <Table.HeaderCell>Nezaposleni</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>#</Table.Cell>

                    <Table.Cell>{props.zaposlenost.bezSkole}</Table.Cell>
                    <Table.Cell>{props.zaposlenost.srednja}</Table.Cell>
                    <Table.Cell>{props.zaposlenost.fakultet}</Table.Cell>
                    <Table.Cell>{ukupnoZap}</Table.Cell>
                    <Table.Cell>{props.zaposlenost.nezaposleni}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>%</Table.Cell>

                    <Table.Cell>{(props.zaposlenost.bezSkole / ukupno).toFixed(2)}</Table.Cell>
                    <Table.Cell>{(props.zaposlenost.srednja / ukupno).toFixed(2)}</Table.Cell>
                    <Table.Cell>{(props.zaposlenost.fakultet / ukupno).toFixed(2)}</Table.Cell>
                    <Table.Cell>{(ukupnoZap / ukupno).toFixed(2)}</Table.Cell>
                    <Table.Cell>{(props.zaposlenost.nezaposleni / ukupno).toFixed(2)}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}
