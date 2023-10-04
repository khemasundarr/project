import React from 'react'
import  Tab  from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Hometype() {
  return (
    <div>
      <div className='tabs'>
                        <h3>Listings by amenities</h3>
                        <p>Highlight the best of your categories</p> 
                      
                       <Tabs defaultActivety="profile" id="fill-tab-example" className="md-3" fill>
                        <Tab eventKey="hometype" tittle="Hometype"> Tab content for Hometype</Tab>
                        <Tab eventKey="rentaltype" tittle="Rentaltype">Tab content for Rentaltype</Tab>
                        <Tab eventKey="rentalcity" tittle="Rentalcity">Tab content for Rentalcity</Tab>
                        <Tab eventKey="rentalarea" tittle="Rentalarea">Tab content for Rentalarea</Tab>
                        <Tab eventKey="features" tittle="Features">Tab content for features</Tab>
                    
                       </Tabs>
                       </div>
    </div>
  )
}

export default Hometype
