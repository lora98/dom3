import React, { useEffect, useState } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'
import Layout from '../components/Layout'
import ZaposlenostTabela from '../components/ZaposlenostTabela';
import { ZaposlenostProps } from '../tipovi';
import { setFormNumberState } from '../util';

export default function ZaposlenostPage() {
    const [zaposlenostData, setZaposlenostData] = useState<ZaposlenostProps[]>([]);

    const [nezaposleni, setNezaposleni] = useState(0);
    const [bez, setBez] = useState(0);
    const [srednja, setSrednja] = useState(0);
    const [fax, setFax] = useState(0);

    const [dugmeError, setDugmeError] = useState('');


    return (
        <Layout title='Stopa zaposlenosti' >
            <Grid.Row>
                <Grid.Column width='10'>
                    {
                        zaposlenostData.map(element => {
                            return (
                                <ZaposlenostTabela zaposlenost={element} />
                            )
                        })
                    }
                </Grid.Column>
                <Grid.Column width='6'>
                    <Header>Kreiraj uzorak</Header>
                    <Form onSubmit={() => {
                        if ((bez + fax + nezaposleni + srednja) === 0) {
                            setDugmeError('Zbir unetih vrednosti mora biti veci od nule')
                            return;
                        }
                        setDugmeError('')
                        setZaposlenostData(prev => {
                            return [...prev, {
                                bezSkole: bez,
                                fakultet: fax,
                                nezaposleni: nezaposleni,
                                srednja: srednja
                            }]
                        })
                        setBez(0);
                        setFax(0);
                        setNezaposleni(0);
                        setSrednja(0);
                    }}>
                        <Form.Input type='number' value={nezaposleni} label='Nezaposleni' required onChange={setFormNumberState(setNezaposleni)} />
                        <Form.Input type='number' value={bez} label='Bez skole' required onChange={setFormNumberState(setBez)} />
                        <Form.Input type='number' value={srednja} label='Srednja strucna sprema' required onChange={setFormNumberState(setSrednja)} />
                        <Form.Input type='number' value={fax} label='Fakultet' required onChange={setFormNumberState(setFax)} />
                        <Form.Button error={dugmeError || undefined} fluid primary>Kreiraj</Form.Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Layout>
    )
}
