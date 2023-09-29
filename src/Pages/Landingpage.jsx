import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function Landingpage() {
    return (
        <div class='CarouselExample' className="carousel-slide" data-ride="carousel">
            
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img class="d-block w-100 image-1" src="https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book_wide3-1920x790.jpg" alt="First slide" />
                    <h2 className='text-uppercase '>Family friendly condo</h2>
                    <p2 className='para'>Located in the heart of greenwhich village,This buliding is wonderfully situated on aquiet treelined street between west 4th street and bleeckerstreet
                        ,close to all west village eateries,shops and clubs,this buliding is just ashort walk from soho,tribeca,little italy and chinatown.The subway is only one block away.newly renovated...</p2>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/book_wide_webp_1920x790.webp" alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://mainwprentals.b-cdn.net/wp-content/uploads/2015/04/white_booking_versionwebp_-1920x790-1.webp" alt="Third slide" />
                </div>

            </div>

        </div>
    )
}

export default Landingpage
