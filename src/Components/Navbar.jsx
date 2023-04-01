import React from 'react'

const Navbar = () => {
export default Navbar
import React from 'react'
const Navgbar = () => {
  return (
    <Box>
        <AppBar>
            <Toolbar>
                <Typography>productapp</Typography>
                <Button color="inherit"><Link to='/'>View</Link></Button>
                <Button color="inherit"><Link to='/add'>Add</Link></Button>
            </Toolbar>                
        </AppBar>
    </Box>
  )
}

export default Navgbar