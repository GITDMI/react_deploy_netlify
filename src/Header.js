
const Header = ({ title }) => {

const  headerStyle = {
  backgroundColor: 'mediumblue',
  color: '#fff'
}

  return (
    // <header style={{
    //   backgroundColor: 'mediumblue',
    //   color: '#fff'
    // }}> 
    <header style={headerStyle}>     
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header