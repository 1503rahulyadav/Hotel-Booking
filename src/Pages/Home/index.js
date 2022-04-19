import React from 'react';
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useEffect , useRef,useState} from 'react';
import { Card, Container } from 'react-bootstrap';
import Lottie from "lottie-react";
import Services from "../../Assets/service.json"; 
import { Row,Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar';
import image1 from '../../Assets/image1.png';
import poolside from '../../Assets/poolside.jpg';
import classic from '../../Assets/classic-room.jpg';
import luxury from '../../Assets/luxury-room.jpg';
import modern from '../../Assets/modern-room.jpg';
import livingroom1 from '../../Assets/living-room-image1.jpeg';
import livingroom2 from '../../Assets/living-room-image2.jpeg';
import { Button } from 'react-bootstrap';
import {GeoAlt,Person,Calendar2Check } from 'react-bootstrap-icons';


function PackageCard({item}){
   
    return(
        <>
             <Card  className='card'>
                 <img src={item.image} alt=""  className='classic-room-image card-image'/>                            
                 <h4>{item.heading}</h4>
                 <h2>{item.price}</h2>
                 {item?.data?.map((feature)=>(
                     <p>{feature}</p>
                 ))}
                <Button variant="outline-success" className='package-btn'>select Package</Button>                                                     
        </Card>
        </>
    )
}

function Home (){

    const [data, setData] = useState([
        {
            image:classic,
            heading:'Classic Room',
            price:'$150',
            data:[
                'free wifi',
                'breakfast',
                '1 bed in room',
                '2 people in room'
            ]
        },
        {
            image:luxury,
            heading:'Luxury Room',
            price:'$200',
            data:[
                'free wifi',
                'breakfast',
                '2 beds in room',
                '4 people in room'
            ]
        },
        {
            image:modern,
            heading:'Modern Room',
            price:'$175',
            data:[
                'free wifi',
                'breakfast',
                '1 bed in room',
                '2 people in room'
            ]
        },
       
    ])
    
    
    let imageCol = useRef(null);
    let image = useRef(null);
    var content= useRef();

//    gsap animation starts from here

    useEffect(()=>{
        gsap.timeline().from(".first-row",{duration:1,visibility:'hidden'})
            .to(".first-row", { visibility:'visible'})
            .from(".content-col", {duration: 1,x:-1000}) 
            .from(".image-col", {x:1200,duration: 1,opacity:.5},"<")      
            .from(content.current,{
                    duration:1, 
                    autoAlpha:0,
                     ease:"out",
                     delay:0,
                     opacity:0.2,
                     y:40,
                     
                    })
            .from(".content-col-para", {
                duration: 1,
                 autoAlpha:0,
                ease:"out",
                delay:0,
                opacity:0.2,
                y:40, },"<.5")
            .from(".check-information", {duration: 1, visibility:"hidden"})
            .to(".check-information", {duration:1,delay:0, visibility:"visible",autoAlpha:1},"<")
    // scroll trigger animation start from here
                gsap.registerPlugin(ScrollTrigger);

                
                let column = gsap.timeline( {
                    scrollTrigger:{
                        trigger:".pool-main-row",
                        start:"20% 70%",
                        toggleActions:"restart reverse restart reverse",
                        end:"110% center"
                        // markers:true
                    },
                });
            
                column.from(".pool-image", {duration: 1,x:-1000,autoAlpha:1})
                        .from(".streve-heading", {duration: 1,y:44,opacity:0},"<")
                        .from(".strive-para", {duration: 1,y:44,opacity:0},"<0.2")
                        .from(".continue-btn", {duration: 1,y:44,opacity:0},"<0.3")

                // service section animation start from here //

                    let services = gsap.timeline({
                    scrollTrigger:{
                        trigger:".service-row",
                        start:"20% 70%",
                        end:"110% center",
                        toggleActions:"restart reverse restart reverse"
                        // markers:true
                    }
                });
                   
                   services.from(".services-content", {duration:1,y:44,opacity:0,autoAlpha:1})
                   .from(".lottie-col", {duration:1, opacity:0 , x:1000},"<")

                //    package section animatin start from here //

                    let packages = gsap.timeline({
                        scrollTrigger:{
                            trigger:".packages-row",
                            start:"top 70%",
                            end:"40% center",
                            // markers:true,
                            toggleActions:"restart reverse restart reverse"
                       
                        }

                    });

                        packages.from(".package-main-heading",{duration:1,y:44,opacity:0,autoAlpha:1})
                                .from(".package-para", {duration: 1, y:44,opacity:0},"<0.2")
                   
                    gsap.timeline({repeat:-1}).to(".card", {duration:0.6,y:0,stagger:0.3})
                                    .to(".card", {duration:0.6, y:-30,stagger:0.3})

                // Blogs section animation start from here //

                    let blogs = gsap.timeline({
                        scrollTrigger:{
                            trigger:".blogs-section-row",
                            start:"top 70%",
                            end:"40% center",
                            // markers:true,
                            toggleActions:"restart reverse restart reverse"
                        }
                    }); 
                    
                        blogs.from(".blog-main-heading", {duration: 1,y:44,opacity:0})
                                .from(".blog-main-para", {duration: 1,y:44,opacity:0},"<0.2")

                    let blog2 = gsap.timeline({
                        scrollTrigger:{
                            trigger:".blogs-section-row",
                            start:"top 70%",
                            end:"bottom center",
                            // markers:true,
                            toggleActions:"restart reverse restart reverse"
                        }
                    }); 
                    
                        blog2.from(".blog-col-1", {duration: 0.5, opacity:0,delay:.5 })
                                .from(".blog-col-2", {duration: 0.5, opacity:0 },"<")
                                .from(".blog-col-heading", {duration: 1,y:44,opacity:0})
                                .from(".blog-col-para", {duration: 1,y:44,opacity:0})
            
              
        
       

     
    }, []);
     
    // gsap animation ends here
    
    return(
        <>
         <Navbar fixed="top" className='nav' />
        <Container style={{maxWidth:1500}} className='main-container'>
           
                <Row className='first-row'  >
                    <Col xs={12} md={6} className='content-col'>
                        <h1 className='content-col-heading' ref={content}>Stay once, <br/> carry memories <br/>  Forever.</h1>
                        <p className='content-col-para'  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo harum fugiat voluptates veniam vitae aspernatur quia enim quasi accusantium eos.</p>
                    </Col>
                        <Col xs={12} md={6} className='image-col' ref={imageCol} >
                        <img src={image1} alt="image" className='col-image' ref={image} />
                        </Col>
                        <Row className='check-information'>
                            <Col md={2} xs={6}>
                          
                          
                                <h6 className='check-heading'><GeoAlt/>Location</h6>
                                <select name="" id="" className='location-dropdown'>
                                        <option value="" >London</option>
                                    </select>
                            </Col>
                                <Col md={2} xs={6}>
                                    <h6 className='check-heading'><Person/>Person</h6>
                                    <select name="" id="" className='location-dropdown'>
                                        <option value="" >London</option>
                                    </select>
                                </Col>
                                <Col md={2} xs={6}>
                                <h6 className='check-heading'><Calendar2Check/>Check-In</h6>
                                <input type="date" className='check-input'/>
                                </Col>
                                <Col md={2} xs={6}>
                                <h6 className='check-heading'><Calendar2Check/>Check-Out</h6>
                                <input type="date" className='check-input' />
                                </Col>
                                <Col md={4} xs={6}> <Button variant="outline-success" className='check-btn'>CHECK-AVAILABILITY</Button></Col>
                        </Row>
                </Row>
                                <Container>
                                <Row className='pool-main-row'>
                                    <Col xs={12} md={6}>
                                        <img src={poolside } alt=""  className='pool-image'/>
                                    </Col> 
                                    <Col xs={12} md={6} className='pool-side-content'>
                                        <h1 className='streve-heading'>We strived only for <br/> the best.</h1><hr/>
                                        <p className='strive-para' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aperiam quis tempora labore commodi delectus illo cum ratione est nobis. </p>
                                       <p className='strive-para'> <i>Sollicitudin imperdiet maecenas lorem</i></p>
                                        <p className='strive-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aperiam quis tempora labore commodi delectus illo cum ratione est nobis. </p>
                                        <Button variant="outline-success" className='continue-btn'>Continue</Button>

                                    </Col>    
                                </Row>
                                <Row  className='service-row'>
                                    <Col xs={12} md={6} className='services-content'>
                                    <h1>See our services.</h1><hr/>
                                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, facere tempora. Blanditiis, aspernatur? Ex, omnis!  </p>
                                        <Row>  
                                            <Col  md={6}  >
                                            
                                                <h4>Quality Food</h4>
                                                <h4>Quick Services</h4>
                                            </Col>
                                            <Col className='services-items' md={6}>
                                                <h4>High Security</h4>
                                                <h4>24 Hours Alert</h4>
                                            </Col>
                                        </Row>
                                    </Col> 
                                        <Col xs={12} md={6} className='lottie-col'>
                                                {/* <img src={bellhop} alt=""  className='bellhop-image'/> */}
                                                <Lottie
                                                    className='lottie-animation-services'
                                                    animationData={Services}
                                                    loop={true}
                                                />
                                        </Col>    
                                </Row>
                                <Row className='packages-row'>
                                    <h1 className='package-main-heading'>Choose Best Package</h1>
                                    <p className='package-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quasi incidunt, fuga debitis et repudiandae dolor laudantium accusamus totam veritatis!</p>
                                    {data.map((item, index) =>(
                                        <Col md={4} xs={12}>
                                        <PackageCard item={item}/>
                                     </Col>
                                    ))}
                                    {/* <Col md={4} xs={12}>
                                        <PackageCard/>
                                    </Col>
                                    <Col md={4} xs={12}>
                                    <PackageCard/>
                                    </Col>
                                    <Col md={4} xs={12}>
                                    <PackageCard/>
                                    </Col>   */}
                                </Row>
                                <Row className='blogs-section-row'>
                                    <h1 className='blog-main-heading'>Our latest Blogs & News</h1>
                                    <p className='blog-main-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quasi incidunt, fuga debitis et repudiandae dolor laudantium accusamus totam veritatis!</p>
                                    <Row className='blog-col-row'>
                                        <Col md={6} xs={12} className='blog-col-1'>
                                            <img src={livingroom1} alt=""  className='livingroom1'/>
                                            <Row className='blog-content-row'>
                                                <Col><h5><Calendar2Check className=' btn date-icon' />Calender</h5></Col>
                                                <Col><h5><Person className='creator-icon'/>By creators</h5></Col>
                                            </Row>
                                            <h4 className='blog-col-heading'>Remarkable Resort that offers <br/>the Best of views</h4><br/>
                                            <p className='blog-col-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam velit nisi debitis est ipsa! Cum a reiciendis distinctio blanditiis dolorem dicta obcaecati sunt libero neque nam eos consequuntur explicabo repellendus possimus error officia saepe tempora, illum ad fugiat voluptatum, voluptate dolore numquam? Commodi reiciendis cum inventore ea a fugit ipsum!</p>
                                          
                                        </Col>
                                        <Col md={6} xs={12} className='blog-col-2'>
                                            <img src={livingroom2} alt=""  className='livingroom2'/> 
                                            <Row className='blog-content-row'>
                                                <Col><h5><Calendar2Check className=' btn date-icon' />Calender</h5></Col>
                                                <Col><h5><Person className='creator-icon'/>By creators</h5></Col>
                                            </Row>
                                            <h4 className='blog-col-heading'>Villas in Nashik that are nothing less than home way from home.</h4><br/>
                                            <p className='blog-col-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, eligendi magnam explicabo libero consequatur velit nobis ipsa excepturi, iste, a quia molestiae minus. At aspernatur consequatur mollitia aperiam nisi labore sunt quod delectus laudantium odit! Rem ullam sequi iure ut! Dignissimos minus quis illo cupiditate quas atque alias dolores cum!</p>
                                        </Col>
                                    </Row>
                                </Row>
                                
                            
                </Container>
        </Container>
        <Row>
                                <div className="container footer-container">
                                        <footer className=" footer ">
                                            <div className="row">
                                            <div className="col-lg-2 col-sm-12">
                                                <h5>Section</h5>
                                                <ul className="nav flex-column">
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-2 col-sm-12">
                                                <h5>Section</h5>
                                                <ul className="nav flex-column">
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-2 col-sm-12">
                                                <h5>Section</h5>
                                                <ul className="nav flex-column">
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 offset-1 col-sm-12">
                                                <form>
                                                <h5>Subscribe to our newsletter</h5>
                                                <p>Monthly digest of whats new and exciting from us.</p>
                                                <div className="d-flex w-100 gap-2">
                                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                                    <button className="btn  subs-btn" type="button">Subscribe</button>
                                                </div>
                                                </form>
                                            </div>
                                            </div>

                                            <div className=" justify-content-between py-4 my-4 border-top">
                                            <p>© 2021 Company, Inc. All rights reserved.</p>
                                            {/* <ul className="list-unstyled d-flex">
                                                <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                                                <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                                                <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                                            </ul> */}
                                            </div>
                                           
                                        </footer>
                                        {/* <Lottie
                                                    className='lottie-animation'
                                                    animationData={Wave}
                                                    loop={true}
                                                    
                                                /> */}
                                </div>
                                </Row>
        </>
    )
}

export default Home