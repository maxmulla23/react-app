import PropTypes  from "prop-types";
import Button from "./button";
import { useLocation} from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
  const onClick = () => {
    console.log('click');
  }
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && (
        <Button
         color='green'
         text='Add'
         onClick={onClick} 
        />
        )}
          
      
        
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header 