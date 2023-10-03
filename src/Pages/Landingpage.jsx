import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { CarouselCaption } from 'react-bootstrap';


const data = [
    {
        img: 'https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/blue-400x314.jpg',
        price: '$56/night',
        title:"modern villa with pool",
        location:"East Side,New York",

    },
    {
        img: "https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/decor_nice-400x314.jpg",
        price:'$65/night',
        title:" Victorian Bed & Breakfast",
        location:"mattapan,boston",
    },
    {
      img: 'https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book2_small-1-400x314.jpg',
      price: '$102/night',
        title:"Charming Private Room",
        location:"Glover park,Washington",
    },
    {
      img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2017/01/xx-400x314.jpg",
      price: '$30/night',
        title:"Charm villa to Rent",
        location:"Brightwood,baltimore",
    
    
    },
    {
      img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/5-1-400x314.jpeg",
      price: '$23/night',
        title:"Modern condo with lake view",
        location:"arlington,baltimore",
    },
    {
      img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/19-2-400x314.jpeg",
      price: '$500/night',
        title:"Private cozy Apartment",
        location:"glover park,washington",
    },
]

function Landingpage() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className='img d-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book_wide3-1920x790.jpg' alt='First-slide' />
                    <Carousel.Caption className='hems'>
                        <h2 className='price'>$ 68/per night</h2>
                        <h3 className='head'>Family Friendly Condo</h3>
                        <p>Located in the heart of greenwich village,this building is wonderfully situated on aaquiet treelined street between west 4thstreetand bleecker street,close to all west village eateries,shops andclubs,tribeca,little italy and chinatown the subway is only one block away.newly revothis buliding is just ashort walk from saho,</p>
                        <p>View more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className=' img d-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book_wide_webp_1920x790.webp' alt='First-slide' />
                    <CarouselCaption className='hems'>
                        <h2 className='price'>$ 59/per night</h2>
                        <h3 className='head'>Perfect Holiday Cabin </h3>
                        <p> Spectacular condo in summmerlin! view of spring mountains and charleston peak!!!1 bedrooms, private bathroom and a Queen size vertical wall bed ,fireplace,kitchen ,dishwasher and microwave,open and spacious floorplan!great summerlin location!

                        </p>
                        <p>View more</p>

                    </CarouselCaption>

                </Carousel.Item>
                <Carousel.Item>
                    <img className='img d-block w-100' src='https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/white_booking_versionwebp_-1920x790-1.webp' alt='First-slide' />
                    < Carousel.Caption className='hems'>
                        <h2 className='price'>$ 64/per night</h2>
                        <h3 className='head'>Beautiful Cabin to Rent</h3>
                        <p>Cozy home in summerlin only 1.5 miles tored rock resort and downtown summerlin with ample shopping ,dinling and entertainment.red rock canyon state parkis located less than 10 miles away to enjoy hiking and rock climbing,more shopping,dining and entertainment located in tivoli village and boca park which is 2.5 miles away. ...</p>
                        <p>View more</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
        <div className='container-fluid'>
            <div className='rent'>
            <h2> Featured listings to rent</h2> 
              <p> The most trendy accommodations available</p>
              </div> 
            <div className='item d-flex justify-content-center align-item-center'>
                {data.map((each) => {
                    return (                    
                    <div className='cards'>
                        <img className="img-home"src={each.img} />
                        <p className='price'>{each.price}</p>
                        <div>
                        <h3 className='title'>{each.title} </h3>
                        <p className='location'>{each.location} </p>
                        
                        </div> 
                    </div>
                    )
                })}
            </div>
        </div>
              
      
      
      </>
    )
}


export default Landingpage


