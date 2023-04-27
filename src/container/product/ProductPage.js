import './ProductPage.css';
import shirts from '../../shared/shirts';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Container, Row, Col } from 'reactstrap';
import { ProductShirtGrid } from './ProductShirtGrid';

function ProductPage() {
  let idx = 0;

  return (
    <div className="ProductPage">
      <Header></Header>
      <div className="shirtsSection">
        <h2> Our T-shirts </h2>
        <Container className="shirtsList">
          <Row xs="3">
            {shirts.map((shirt) => {
              idx += 1;
              return (
                <Col key={idx} className='mt-3'>
                  <ProductShirtGrid shirt={shirt}></ProductShirtGrid>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>


      <Footer></Footer>
    </div>
  );
}

export { ProductPage };