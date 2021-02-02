import './List.css';

export function List(props) {
   const circles = props.circles;
   const listItems = circles.map((circle) => 
   <li className='list-item'>{circle.minutes < 10 ? `0${circle.minutes}` : circle.minutes}:{circle.seconds < 10 ? `0${circle.seconds}` : circle.seconds}</li>);

   return (
    <ul className='circles'>
        {listItems}
    </ul>
    )
    
}