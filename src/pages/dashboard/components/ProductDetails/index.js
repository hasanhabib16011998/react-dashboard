import React, { useRef } from 'react';
import './ProductDetails.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineBrandingWatermark, MdOutlineCategory,MdInventory,MdOutlineReviews,MdOutlinePublishedWithChanges} from "react-icons/md";
import { IoMdPricetag,IoIosColorPalette,IoMdResize } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import LinearProgress from '@mui/material/LinearProgress';





function ProductDetails() {

  const productSliderBig = useRef();
  const productSliderSmall = useRef();
  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const goToSlide=(index)=>{
    productSliderBig.current.slickGoTo(index);
    productSliderSmall.current.slickGoTo(index);
  }
  return (
    <>
    <div className="right-content w-100">
    <div className="card shadow border-0 p-3 mt-4 align-items-center">
            <h3 className="hd">Product View</h3>
    </div>

    <div className='card'>
      <div className='row'>
        <div className='col-md-5'>
        <div className='sliderWrapper p-5'>
        <h5 className='mb-3'>Product Gallery</h5>
        <Slider {...productSliderOptions} ref={productSliderBig} className='sliderBig mb-3'>
          <div className='item'>
          <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" alt="product-image" className='w-100' />
          </div>
          <div className='item'>
          <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" alt="product-image" className='w-100' />
          </div>
          <div className='item'>
          <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" alt="product-image" className='w-100' />
          </div>
          
        </Slider>
        <Slider {...productSliderSmlOptions} ref={productSliderSmall} className='sliderSmall'>
          <div className='item' onClick={()=>goToSlide(1)}>
          <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" alt="product-image" className='w-100' />
          </div>
          <div className='item' onClick={()=>goToSlide(2)}>
          <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" alt="product-image" className='w-100' />
          </div>
          <div className='item' onClick={()=>goToSlide(3)}>
          <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" alt="product-image" className='w-100' />
          </div>
          <div className='item' onClick={()=>goToSlide(4)}>
          <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" alt="product-image" className='w-100' />
          </div>
          <div className='item' onClick={()=>goToSlide(4)}>
          <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" alt="product-image" className='w-100' />
          </div>
          
        </Slider>
        </div>

        </div>


        <div className='col-md-7'>
        <div className='p-5 productDetails'>
        <h5 className='mb-3'>Product Details</h5>

        <h4>Premium facewash for women's Skin care</h4>

        <div className='productInfo'>
          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center'>
              <span className='icon'><MdOutlineBrandingWatermark/></span>
              <span className='name'>Brand</span>
            </div>
            <div className='col-sm-7 align-items-center'>
               : <span>Ecstacy</span>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center'>
              <span className='icon'><MdOutlineCategory/></span>
              <span className='name'>Category</span>
            </div>
            <div className='col-sm-7 align-items-center '>
              : <span>Skin Care</span>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center'>
              <span className='icon'><IoMdPricetag/></span>
              <span className='name'>Tags</span>
            </div>
            <div className='col-sm-7 align-items-center'>
              : <span>
              <ul className='list list-inline tags sml'>
                  <li className='list-inline-item'>
                    <span>Skin care</span>
                  </li>
                  <li className='list-inline-item'>
                    <span>FaceWash</span>
                  </li>
                  <li className='list-inline-item'>
                    <span>FaceWash</span>
                  </li>
                  <li className='list-inline-item'>
                    <span>FaceWash</span>
                  </li>
                  <li className='list-inline-item'>
                    <span>FaceWash</span>
                  </li>
                </ul>
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center'>
              <span className='icon'><IoIosColorPalette/></span>
              <span className='name'>Color</span>
            </div>
            <div className='col-sm-7 align-items-center'>
              : <span>
              <ul className='list list-inline tags sml'>
                  <li className='list-inline-item'>
                    <span>Red</span>
                  </li>
                  <li className='list-inline-item'>
                    <span>Black</span>
                  </li>
                  <li className='list-inline-item'>
                    <span>Aqua Blue</span>
                  </li>
                </ul>
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center'>
              <span className='icon'><IoMdResize/></span>
              <span className='name'>Size</span>
            </div>
            <div className='col-sm-7 align-items-center'>
              : <span>
              <ul className='list list-inline tags sml'>
                  <li className='list-inline-item'>
                    <span>200 ml</span>
                  </li>
                  <li className='list-inline-item'>
                    <span>100 ml</span>
                  </li>
                  <li className='list-inline-item'>
                    <span>250 ml</span>
                  </li>
                </ul>
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center'>
              <span className='icon'><TbCurrencyTaka/></span>
              <span className='name'>Price</span>
            </div>
            <div className='col-sm-7 align-items-center'>
              : <span>350 BDT.</span>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center'>
              <span className='icon'><MdInventory/></span>
              <span className='name'>Stock</span>
            </div>
            <div className='col-sm-7 align-items-center'>
              : <span>53 pc</span>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center'>
              <span className='icon'><MdOutlineReviews/></span>
              <span className='name'>Review</span>
            </div>
            <div className='col-sm-7 align-items-center'>
              : <span>(04) reviews</span>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-5 d-flex align-items-center'>
              <span className='icon'><MdOutlinePublishedWithChanges/></span>
              <span className='name'>Published</span>
            </div>
            <div className='col-sm-7 align-items-center'>
              : <span>02 Feb, 2025</span>
            </div>
          </div>

        </div>
        </div>
        </div>
      </div>

      <div className='product-description p-5'>
      <h5 className='mt-4'>Product Description</h5>
      <p>Reveal your skin's natural glow with our Gentle Hydrating Women's Face Wash. Specially formulated to suit all skin types, this luxurious cleanser effortlessly removes dirt, oil, and impurities while maintaining your skin's delicate moisture balance. Enriched with natural ingredients like aloe vera, chamomile extract, and vitamin E, it soothes irritation, reduces redness, and leaves your skin feeling soft and refreshed.

      Perfect for daily use, this face wash helps combat dryness, revitalize tired skin, and brighten your complexion. Its light, refreshing fragrance adds a touch of spa-like indulgence to your skincare routine. Dermatologist-tested and free from harsh chemicals, sulfates, and parabens, it’s the ideal choice for achieving healthy, radiant skin every day.</p>

      <h6 className='mt-4 mb-3'>Rating Analytics</h6>
      <div className='ratingSection'>
        <div className='ratingrow d-flex align-item-center'>
          <span className='col1'>
            5 Star
          </span>
          <div className='col2'>
          <div className='progress'>
            <div className='progress-bar' style={{width:'50%'}}></div>
          </div>

          </div>

          <span className='col3'>
            (22)
          </span>
        </div>

        

        <div className='ratingrow d-flex align-item-center'>
          <span className='col1'>
            4 Star
          </span>
          <div className='col2'>
          <div className='progress'>
            <div className='progress-bar' style={{width:'20%'}}></div>
          </div>

          </div>

          <span className='col3'>
            (15)
          </span>
        </div>

        <div className='ratingrow d-flex align-item-center'>
          <span className='col1'>
            3 Star
          </span>
          <div className='col2'>
          <div className='progress'>
            <div className='progress-bar' style={{width:'10%'}}></div>
          </div>

          </div>

          <span className='col3'>
            (10)
          </span>
        </div>

        <div className='ratingrow d-flex align-item-center'>
          <span className='col1'>
            2 Star
          </span>
          <div className='col2'>
          <div className='progress'>
            <div className='progress-bar' style={{width:'7%'}}></div>
          </div>

          </div>

          <span className='col3'>
            (2)
          </span>
        </div>

        <div className='ratingrow d-flex align-item-center'>
          <span className='col1'>
            1 Star
          </span>
          <div className='col2'>
          <div className='progress'>
            <div className='progress-bar' style={{width:'0%'}}></div>
          </div>

          </div>

          <span className='col3'>
            (0)
          </span>
        </div>


      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ProductDetails;