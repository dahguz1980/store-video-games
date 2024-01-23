import PropTypes from 'prop-types';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="greetingMessage">
      <h1>{greeting}</h1>
    </div>
  )
}

// Define los tipos esperados para cada propiedad utilizando PropTypes
ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
  };

export default ItemListContainer
  