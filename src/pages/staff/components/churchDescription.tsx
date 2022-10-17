import { useEffect, useState } from 'react';
import { Container, Image } from "react-bootstrap";
import { Divide, ShadowBox } from "../../../components/styledComponents";
import styled from 'styled-components';
import { mobileThreshold } from "../../../utils/constants";

const ChurchBox = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;

  @media(max-width: ${mobileThreshold}px) {
    flex-wrap: wrap-reverse;
  }
`

const ChurchDescriptionBox = styled(ShadowBox)`
  width: 100%;
  max-width: 1200;
  padding: 1%;
  margin: 0px 1em 0px 0px;
  text-align: left;

  @media(max-width: ${mobileThreshold}px) {
    margin: 1em 0px;
  }
`

const ChurchDescription = () => {
  const [ description, setDescription ] = useState<string | null>(null);
  
  useEffect(() => {
    fetch('/churchHistory.txt')
      .then((response) => response.text())
      .then((d) => setDescription(d))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ChurchBox fluid>
        <ChurchDescriptionBox fluid>
          <h2>Church History</h2>
          {description && description.split('\n').map((paragraph) => <p>{paragraph}</p>)}
        </ChurchDescriptionBox>
        <Image
          src={"https://res.cloudinary.com/zaemadethis/image/upload/v1659889406/spmbc/gallery/pexels-rudolf-kirchner-831056_fkjnh0.jpg"}
          style={{
            width: '100%',
            maxWidth: 345,
            maxHeight: 460,
            height: '50vh',
            objectFit: 'cover'
          }} 
        />
      </ChurchBox>
      <Divide width="80%" style={{ maxWidth: 'calc(20% + 1200px + 1em)', borderRadius: 0 }} />
    </Container>
  );
};

export default ChurchDescription;