import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { SPButton } from '../../components/button';
import { Divide, Header, ShadowBox } from '../../components/styledComponents';

const Home = () => {
  return (
    <Container fluid className="home-background">
      <Container fluid style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse', justifyContent: 'center', height: '100vh', maxHeight: 1080, alignItems: 'center', padding: 120 }}>
        <iframe
          src="https://www.youtube.com/embed/live_stream?channel=UChKql4EVoCgSpWNSwqhxOsA"
          style={{ border: 0, width: '45%', height: 'calc(100vh * .50)' }}
          allowFullScreen />
        <Container style={{
          display: 'flex',
          width: '45%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '4em' }}>Welcome to St. Phillips Missionary Baptist Church</h1>
          <h3 style={{ fontStyle: 'italic' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          <Divide width="10%" />
          <h2>Sunday Morning Worship - 11:00 AM</h2>
          <h2>Sunday School - 10:00 AM</h2>
          <h2>Wednesday Night Bible Study - 7:00 PM</h2>
          <SPButton text="Watch Service Live" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} style={{ margin: '1% 0px' }} />
        </Container>
      </Container>
      <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', maxHeight: 1080 }}>
        <Header>Join Us For Our Next Service!</Header>
        <Divide width="5%" />
        <ShadowBox fluid style={{ backgroundColor: 'rgba(71, 71, 71, 0.39)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1%', width: '100%', maxWidth: 1650, alignItems: 'center', minHeight: '75%' }}>
          <Container style={{ width: '45%' }}>
            <h1 style={{ fontSize: '3em' }}>Next Event: A Church Service Where People Do Church</h1>
            <h2 style={{ fontStyle: 'italic' }}>Time: Wednesday, July 28, 2021, 6:05 PM</h2>
            <h2 style={{ fontStyle: 'italic' }}>Location: 123 ABC Street, Austin, TX, 78725</h2>
            <SPButton text="See All Upcoming Events" href="/events" style={{ margin: '1.25% 0px' }} />
            <SPButton text="Visit St. Phillips MBC" href="/contact" style={{ margin: '1.25% 0px' }} />
            <SPButton text="Watch Service Live!" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} style={{ margin: '1.25% 0px' }} />
          </Container>
          <iframe
            style={{ border: 0, width: '45%', height: '100%'}}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_EMBED_KEY}&q=7801+N+Lamar+Blvd,Austin,TX,78752`}
            allowFullScreen />
        </ShadowBox>
      </Container>
      <Container fluid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '2%', height: '100vh', maxHeight: 1080 }}>
        <Image src="/pops.jpg" style={{ width: '25%', margin: 0 }} />
        <ShadowBox fluid style={{ width: '35%', padding: '1.5%', margin: 0 }}>
          <h2 style={{ fontSize: '2.5em', textAlign: 'center' }}>About The Pastor</h2>
          <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 20, WebkitBoxOrient: 'vertical' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            arcu vitae elementum curabitur vitae nunc sed velit. Est sit amet
            facilisis magna etiam tempor. Rhoncus urna neque viverra justo nec
            ultrices. Tristique sollicitudin nibh sit amet commodo nulla
            facilisi nullam. Vel pharetra vel turpis nunc eget lorem. Iaculis at
            erat pellentesque adipiscing commodo elit at imperdiet dui. Nunc sed
            velit dignissim sodales ut. Faucibus nisl tincidunt eget nullam non.
            Tellus integer feugiat scelerisque varius morbi enim. Ipsum
            consequat nisl vel pretium lectus quam id leo in.
            <br />
            <br />
            Amet nisl purus in mollis nunc sed id. Faucibus in ornare quam
            viverra orci sagittis eu volutpat odio. Non consectetur a erat nam
            at lectus urna. Commodo sed egestas egestas fringilla phasellus
            faucibus scelerisque eleifend. Hac habitasse platea dictumst
            vestibulum rhoncus est. Tristique sollicitudin nibh sit amet commodo
            nulla facilisi. Leo duis ut diam quam nulla porttitor massa id
            neque. Dolor morbi non arcu risus. Eu turpis egestas pretium aenean
            pharetra magna ac placerat. Neque vitae tempus quam pellentesque.
            Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum
            sociis. Aliquet sagittis id consectetur purus. Id neque aliquam
            vestibulum morbi blandit cursus risus at ultrices.
            <br />
            <br />
            Dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. At volutpat diam ut venenatis tellus in metus
            vulputate. Massa id neque aliquam vestibulum morbi blandit cursus
            risus at. Quis enim lobortis scelerisque fermentum. Nulla facilisi
            morbi tempus iaculis. Ut placerat orci nulla pellentesque dignissim.
            Aliquam purus sit amet luctus venenatis lectus. Est ullamcorper eget
            nulla facilisi etiam dignissim diam. At augue eget arcu dictum
            varius duis at consectetur lorem. Consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus. Elementum nisi quis
            eleifend quam adipiscing vitae proin sagittis nisl.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Facilisis
            leo vel fringilla est ullamcorper eget nulla facilisi etiam. Turpis
            egestas integer eget aliquet nibh praesent tristique magna sit.
            Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
            Magna ac placerat vestibulum lectus mauris. Urna nec tincidunt
            praesent semper feugiat. Ipsum faucibus vitae aliquet nec
            ullamcorper sit amet risus nullam. Cum sociis natoque penatibus et
            magnis dis parturient montes nascetur. Auctor augue mauris augue
            neque gravida in fermentum et. Mi proin sed libero enim sed faucibus
            turpis. Dolor sed viverra ipsum nunc aliquet bibendum enim. Fusce id
            velit ut tortor pretium viverra. Sit amet nulla facilisi morbi
            tempus iaculis urna id. Integer quis auctor elit sed vulputate mi
            sit amet mauris. Lectus arcu bibendum at varius vel pharetra.
            Bibendum est ultricies integer quis. Nunc faucibus a pellentesque
            sit amet porttitor eget. Scelerisque viverra mauris in aliquam sem
            fringilla ut morbi.
            <br />
            <br />
            Risus feugiat in ante metus dictum at tempor commodo ullamcorper.
            Egestas dui id ornare arcu odio ut sem nulla. Pulvinar neque laoreet
            suspendisse interdum consectetur libero id. Est lorem ipsum dolor
            sit amet consectetur adipiscing elit. Cursus eget nunc scelerisque
            viverra mauris in aliquam sem. Fermentum odio eu feugiat pretium
            nibh. Consequat semper viverra nam libero justo laoreet sit amet
            cursus. Tempor orci dapibus ultrices in iaculis. Interdum
            consectetur libero id faucibus. Quis varius quam quisque id diam vel
            quam elementum. Eget egestas purus viverra accumsan in nisl nisi.
            Gravida rutrum quisque non tellus orci ac auctor augue. Rhoncus
            dolor purus non enim. Eu sem integer vitae justo eget magna
            fermentum iaculis. Erat imperdiet sed euismod nisi porta.
          </p>
          <SPButton text="Read More" href="/staff" width="100%" />
        </ShadowBox>
      </Container>
    </Container>
  )
}

export default Home;