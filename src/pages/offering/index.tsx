import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Divide, Header, ShadowBox, SPFormGroup } from '../../components/styledComponents';
import styled from 'styled-components';
import { mobileThreshold } from '../../utils/constants';
import { Helmet } from 'react-helmet';
import CashAppLogo from '../../assets/cashAppLogo';

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
  LOVE_OFFERING = "Love Offering",
}

interface VenmoButtonProps {
  amount: string
  offeringType?: OfferingType,
  matcher: boolean
}

const VenmoButton = ({ amount, offeringType, matcher }: VenmoButtonProps): JSX.Element => {
  const [ bgColor, setBgColor ] = useState<string>('#008CFF');

  const hover = () => setBgColor('#008bee');
  const leave = () => setBgColor('#008CFF');

  const onClick = () => {
    if (matcher) {
      window.open(
        `https://venmo.com/?txn=pay&audience=private&recipients=StPhillips-BaptistChurch&amount=${amount}&note=St.%20Phillips%20MBC%20${encodeURIComponent(offeringType!.toString())}`,
        '_blank'
      );
    }
  }

  return (
    <Button
      onMouseEnter={hover}
      onMouseLeave={leave}
      type="submit"
      onClick={onClick}
      disabled={!matcher || !offeringType}
      style={{
        backgroundColor: bgColor,
        borderColor: bgColor,
        borderRadius: 4,
        width: '100%',
        height: 45,
        maxWidth: 750,
        overflow: 'hidden',
        padding: 0,
        transition: 'opacity 0s',
        marginBottom: 10,
        opacity: matcher ? 1 : 0.6
      }}>
      <img src="/venmoLogo.png" alt="Venmo" style={{ height: '38%' }} />
    </Button>
  )
}

interface CashAppButtonProps {
  amount: string,
  matcher: boolean
}

const CashAppButton = ({ amount, matcher }: CashAppButtonProps): JSX.Element => {
  const [ bgColor, setBgColor ] = useState<string>('#00D632');

  const hover = () => setBgColor('#00cf32');
  const leave = () => setBgColor('#00D632');

  const onClick = () => {
    if (matcher) {
      window.open(`https://cash.app/$pastorbb69/${amount}`, '_blank')
    }
  }

  return (
    <Button
      onMouseEnter={hover}
      onMouseLeave={leave}
      type="submit"
      onClick={onClick}
      disabled={!matcher}
      style={{
        backgroundColor: bgColor,
        borderColor: bgColor,
        borderRadius: 4,
        width: '100%',
        height: 45,
        maxWidth: 750,
        overflow: 'hidden',
        padding: 0,
        transition: 'opacity 0.3s',
        marginBottom: 10,
        opacity: matcher ? 1 : 0.6
      }}>
      <CashAppLogo style={{ height: '100%', width: '100%' }} />
    </Button>
  )
}

const Offering = () => {
  const [amount, setAmount] = useState<string>("0.00");
  const [offeringType, setOfferingType] = useState<OfferingType | undefined>(undefined);
  
  const moneyRegex = /^(?!0+\.00)([0-9]+\.{1}[0-9]{2})$/gi;

  const moneyMatch = amount.match(moneyRegex) === null;

  return (
    <Container
      fluid
      style={{
        padding: 0,
        margin: 0,
        backgroundImage: 'url(https://res.cloudinary.com/di3snrvvx/image/upload/v1666924988/spmbc/assets/deacons_yvt8n0.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '100%'
      }}
    >
      <Helmet>
        <title>Online Tithes & Offering</title>
        <meta name="description" content="An online platform to give tithes & offering to St. Phillips Missionary Baptist Church." />
      </Helmet>
      <Container fluid className="page-background" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '5em 1em 10em' }}>
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
          <OfferingBox style={{ backgroundColor: 'rgba(71, 71, 71, 0)' }}>
            <Form>
              <h2>Give Your Offering Here</h2>
              <SPFormGroup>
                <Form.Label>Offering Type</Form.Label>
                <Form.Select defaultValue={undefined} onChange={(e) => setOfferingType(e.target.value as OfferingType)}>
                  <option value={undefined}>Select an offering type...</option>
                  <option value={OfferingType.GENERAL}>{OfferingType.GENERAL}</option>
                  <option value={OfferingType.TITHES}>{OfferingType.TITHES}</option>
                  <option value={OfferingType.LOVE_OFFERING}>{OfferingType.LOVE_OFFERING}</option>
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
                  isInvalid={moneyMatch}
                />
              </SPFormGroup>
            </Form>
            {offeringType === OfferingType.LOVE_OFFERING && (
              <CashAppButton amount={amount} matcher={!moneyMatch} />
            )}
            {offeringType !== OfferingType.LOVE_OFFERING && (
              <VenmoButton amount={amount} offeringType={offeringType} matcher={!moneyMatch} />
            )}
          </OfferingBox>
        </Container>
      </Container>
    </Container>
  )
}

export default Offering;