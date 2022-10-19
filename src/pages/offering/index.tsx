import React, { useEffect, useState } from 'react';
import { Container, Form, Spinner } from 'react-bootstrap';
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Divide, Header, ShadowBox, SPFormGroup } from '../../components/styledComponents';
import styled from 'styled-components';
import { mobileThreshold } from '../../utils/constants';
import { Helmet } from 'react-helmet';

const OfferingBox = styled(ShadowBox)`
  width: calc(50% - 1em);
  padding: 1em;
  margin: 0px 0.5em;

  @media(max-width: ${mobileThreshold}px) {
    width: 100%;
    margin: 0.5em 0px;
  }
`

const ScriptureText = styled.p`
  font-style: italic;
  font-size: 1.5em;

  @media(max-width: ${mobileThreshold}px) {
    font-size: 1em;
  }
`

enum OfferingType {
  GENERAL = "General Offering",
  TITHES = "Tithes",
  LOVE = "Love Offering"
}

interface VenmoButtonProps {
  amount: string
  offeringType?: OfferingType
}

const VenmoButton = ({ amount, offeringType }: VenmoButtonProps): JSX.Element => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer()
  const noChange: boolean = true

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: "USD"
      }
    })
  }, [noChange])

  return <>
    { (isPending) && <Spinner animation="border" role="status" /> }
    <PayPalButtons 
      fundingSource='venmo' 
      style={{ color: 'blue' }}
      forceReRender={[amount, offeringType]}
      disabled={offeringType === undefined || parseFloat(amount) === 0 || !amount}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: amount
              },
              description: "St. Phillips MBC " + offeringType
            }
          ]
        }).then((orderId) => {
          console.log(orderId)
          return orderId
        })
      }}
      onError={(error) => {
        console.log(error)
      }}
    >
      <h4>Error Loading Venmo Button. Try refreshing the page.</h4>
    </PayPalButtons>
  </>
}

const Offering = () => {
  const [amount, setAmount] = useState<string>("0.00")
  const [offeringType, setOfferingType] = useState<OfferingType | undefined>(undefined)

  return (
    <Container
      fluid
      style={{
        padding: 0,
        margin: 0,
        backgroundImage: 'url(https://res.cloudinary.com/zaemadethis/image/upload/v1659889407/spmbc/gallery/pexels-brett-sayles-3633711_hnwvm6.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Helmet>
        <title>Online Tithes & Offering</title>
        <meta name="description" content="An online platform to give tithes & offering to St. Phillips Missionary Baptist Church." />
      </Helmet>
      <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em' }}>
        <Header style={{ transform: 'translate(0px, 10%)' }}>Tithes & Offering</Header>
        <Divide width="5em"/>
        <Container fluid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap-reverse', justifyContent: 'center' }}>
          <OfferingBox>
            <h2>Our Reasoning For Tithes and Offering</h2>
            <h3 style={{ fontStyle: 'italic', opacity: 0.7 }}>Malachi 3:7-12 KJV</h3>
            <ScriptureText>
              <sup>7</sup>Even from the days of your fathers ye are gone away
              from mine ordinances, and have not kept them. Return unto me, and I
              will return unto you, saith the LORD of hosts. But ye said, Wherein
              shall we return? <sup>8</sup>Will a man rob God? Yet ye have robbed
              me. But ye say, Wherein have we robbed thee? In tithes and
              offerings. <sup>9</sup>Ye are cursed with a curse: for ye have
              robbed me, even this whole nation. <sup>10</sup>Bring ye all the
              tithes into the storehouse, that there may be meat in mine house,
              and prove me now herewith, saith the LORD of hosts, if I will not
              open you the windows of heaven, and pour you out a blessing, that
              there shall not be room enough to receive it. <sup>11</sup>And I
              will rebuke the devourer for your sakes, and he shall not destroy
              the fruits of your ground; neither shall your vine cast her fruit
              before the time in the field, saith the LORD of hosts. <sup>12</sup>
              And all nations shall call you blessed: for ye shall be a
              delightsome land, saith the LORD of hosts.
            </ScriptureText>
          </OfferingBox>
          <OfferingBox>
            <Form>
              <h2>Give Your Offering Here</h2>
              <SPFormGroup>
                <Form.Label>Offering Type</Form.Label>
                <Form.Select defaultValue={undefined} onChange={(e) => setOfferingType(e.target.value as OfferingType)}>
                  <option value={undefined}>Select an offering type...</option>
                  <option value={OfferingType.GENERAL}>{OfferingType.GENERAL}</option>
                  <option value={OfferingType.TITHES}>{OfferingType.TITHES}</option>
                  <option value={OfferingType.LOVE}>{OfferingType.LOVE}</option>
                </Form.Select>
              </SPFormGroup>
              <SPFormGroup>
                <Form.Label>Offering Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0.00"
                  min="0.00"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </SPFormGroup>
            </Form>
            <PayPalScriptProvider options={{
              "client-id": process.env.REACT_APP_PAYPAL_ID as string,
              components: "buttons,funding-eligibility",
              "enable-funding": "venmo"
            }}>
              <VenmoButton amount={amount} offeringType={offeringType} />
            </PayPalScriptProvider>
          </OfferingBox>
        </Container>
      </Container>
    </Container>
  )
}

export default Offering;