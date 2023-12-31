import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

const Store = () => {
  // console.log(storeItems)
  return (
    <>
      <h2>Store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}
export default Store
