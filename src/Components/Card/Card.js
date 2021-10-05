import './Card.css'
const Card = function Card(props) {
  
    return (
        <div className='card'>
            {props.children}
        </div>
    )
}

export default Card
