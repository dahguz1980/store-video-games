import { CgShoppingCart } from "react-icons/cg";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './CarWidget.css'

const CarWidget = () => {
  return (
    <div>
        <Button size="sm" active>
            <CgShoppingCart />
        </Button>
        <Badge className="numberOfProducts" bg="danger">9</Badge>
    </div>            
  )
}

export default CarWidget
