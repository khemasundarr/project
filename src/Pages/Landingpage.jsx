import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { CarouselCaption } from 'react-bootstrap';
import {IoLocationOutline} from 'react-icons/io5';
import {LiaHomeSolid} from "react-icons/lia";
const data = [
    {
        img: 'https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/blue-400x314.jpg',
        price: '$56/night',
        title:"modern villa with pool",
        location:"East Side,New York",
        home:"Villa / Entire home",
    },
    {
        img: "https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/decor_nice-400x314.jpg",
        price:'$65/night',
        title:" Victorian Bed & Breakfast",
        location:"mattapan,boston",
        home:"B & B / Shared room",
    },
    {
      img: 'https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book2_small-1-400x314.jpg',
      price: '$102/night',
        title:"Charming Private Room",
        location:"Glover park,Washington",
        home:"House / Private room",
    },
    {
      img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2017/01/xx-400x314.jpg",
      price: '$30/night',
        title:"Charm villa to Rent",
        location:"Brightwood,baltimore",
        home:"Villa / Entire home",
    
    
    },
    {
      img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/5-1-400x314.jpeg",
      price: '$23/night',
        title:"Modern condo with lake view",
        location:"arlington,baltimore",
        home:"Dorm / Shared room",
    },
    {
      img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/19-2-400x314.jpeg",
      price: '$500/night',
        title:"Private cozy Apartment",
        location:"glover park,washington",
        home:"Bungalow / Entire home ",
    },
    ]
    const type=[
        {
            img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/white_booking_versionwebp_-1920x790-1-1170x790.webp",
           price:"$200/night",
           title:"Nice Condo in Penn Station",
           location:"Manhattan, New York",
        }, 
        {
            img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/decor_nice.jpg",
            price:"$65/night",
            title:"Victorian Bed & Breakfast",
            location:"Mattapan, Boston",
        },

    ]
    const over=[
        {
            img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2023/03/14.jpeg",
            title:"",
            location:"",
        },
        {
            img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2023/03/interior_july_2019-1170x921-webp.webp",
            title:"",
            location:"",
        },
        {
            img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2023/03/8.jpeg",
            title:"",
            location:"",
        },
        {
            img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2023/03/category-webp.webp",
            title:"",
            location:"",
        },
        {
            img:"https://mainwprentals.b-cdn.net/wp-content/uploads/2023/03/5.jpeg",
            title:"",
            location:"",
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
            <div className='item d-flex justify-content-center align-item-center '>
                {data.map((each) => {
                    return (                    
                    <div className='cards'>
                        <img className="img-home"src={each.img} />
                        <p className='price'>{each.price}</p>
                        <div>
                        <h3 className='title'>{each.title} </h3>
                        <p className='location'><IoLocationOutline/> {each.location} </p>
                        <p className='home'><LiaHomeSolid/>{each.home} </p>
                        </div> 
                    </div>
                    )
                })}
            </div>
        </div>
        <div className='container-fluid'>
            <div className='two '>
                <h3>Featured properties</h3>
                <p>The most trendy listings on our website</p>
            </div>
            <div >
                <ul className='d=flex row p-0 d-flex'>
                { type.map((each)=>{
                    return (
                            <li className=' items col-xl-6'>
                            <img className='w-100 p-5 ' src={each.img}/>
                            <div className='pri'>
                            <p className='price '>{each.price} </p>
                            <h3 className='titles'>{each.title}  </h3>
                            <p className='locations'>{each.location}</p>
                            </div>
                             </li>

                    )
                })}
                </ul>
            </div>
        </div>  
        <div className='container-fluid'>
            <div className='five '>
                <h3>Best places to rent</h3>
                <p>How to travel on a budget around the world</p>
            </div>
            <div >
                <ul className='d=flex row p-0 d-flex'>
                { type.map((each)=>{
                    return (
                            <li className=' itemss'>
                            <img className='w-100 ' src={each.img}/>
                            <div className='prices'>
                            <p className='price '>{each.price} </p>
                            <h3 className='titles'>{each.title}  </h3>
                            <p className='locations'>{each.location}</p>
                            </div>
                             </li>

                    )
                })}
                </ul>
            </div>
        </div>        
     </>
    )
}


export default Landingpage



