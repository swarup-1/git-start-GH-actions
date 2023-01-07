import { Link } from 'react-router-dom'

const Navbar = () => {
  const style1={backgroundColor:"lightblue", borderRadius:"30px"}
  return (
    <div style={{ display:"flex",  justifyContent:"center",  gap:"50px",  padding:"10px", fontSize:"30px", marginBottom:"30px" }}>
      <div   style={style1} >
      <Link style={{ padding:"30px"}} to="/" >All</Link>
      </div>
      <div  style={style1} >
      <Link style={{ padding:"30px"}} to="/html" >HTML</Link>
      </div>
      <div  style={style1} >
      <Link style={{ padding:"30px"}} to="/css" >CSS</Link>
      </div>
      <div  style={style1} >
      <Link style={{ padding:"30px"}} to="/javascript" >JavScript</Link>
      </div>
    </div>
  )
}

export default Navbar