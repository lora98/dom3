
import React, { useState } from 'react'
import { Form, Grid } from 'semantic-ui-react'
import IndexTabela from '../components/IndexTabela'
import Layout from '../components/Layout'
import { IndexCene } from '../tipovi'
import { setFormNumberState } from '../util'

export default function InflacijaPage() {
    const [indeksi, setIndeksi] = useState<IndexCene[]>([{
        godina: 2000,
        vrednost: 100,
        inflacija: undefined
    }])
    const [godina, setGodina] = useState(2001);
    const [index, setIndex] = useState(0);
    return (
        <Layout title='Stopa inflacije'>
            <Grid.Row>
                <Grid.Column width='10'>
                    <IndexTabela indeksi={indeksi} />
                </Grid.Column>
                <Grid.Column width='6'>
                    <Form onSubmit={() => {
                        setIndeksi(prev => {
                            return [
                                ...prev, {
                                    godina,
                                    vrednost: Number(index),
                                    inflacija: (prev.length === 0) ? undefined : ((Number(index) - prev[prev.length - 1].vrednost) / prev[prev.length - 1].vrednost) * 100
                                }
                            ]
                        })
                        setGodina(prev => prev + 1);
                    }}>
                        <Form.Input label='Godina' readOnly value={godina} />
                        <Form.Input type='number' required label='Index cene' value={index} onChange={setFormNumberState(setIndex)} />
                        <Form.Button>Dodaj</Form.Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Layout>
    )
}
