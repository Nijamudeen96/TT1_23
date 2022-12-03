import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
  
  return (
    <header className="header">
        <h1 >{title}</h1>
        <Button 
          color={showAdd ?'red': 'green'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd} />
        {/*reusable <Button color='blue' text='pee' />
        <Button color='green' text='poo' /> */}

    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

//styling
// in h1 or whereever -> style={headingStyle}
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header