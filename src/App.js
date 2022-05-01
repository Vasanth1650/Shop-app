import React from 'react'
import * as ReactBootStarp from 'react-bootstrap';
import './App.css'
import './App1.scss'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";



function App() {
    return (
        <div>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet"></link>
            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStarp.Container>
                    <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStarp.Nav className="me-auto">
                            <ReactBootStarp.NavDropdown title="EN" id="collasible-nav-dropdown">
                                <ReactBootStarp.NavDropdown.Item href="#action/3.1">TAMIL</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="#action/3.2">KANADA</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="#action/3.3">MALAYALAM</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Divider />
                                <ReactBootStarp.NavDropdown.Item href="#action/3.4">OTHERS</ReactBootStarp.NavDropdown.Item>
                            </ReactBootStarp.NavDropdown>
                            <ReactBootStarp.NavDropdown title="USD" id="collasible-nav-dropdown">
                                <ReactBootStarp.NavDropdown.Item href="#action/3.1">INR</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="#action/3.2">PS</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Item href="#action/3.3">TS</ReactBootStarp.NavDropdown.Item>
                                <ReactBootStarp.NavDropdown.Divider />
                                <ReactBootStarp.NavDropdown.Item href="#action/3.4">OTHERS</ReactBootStarp.NavDropdown.Item>
                            </ReactBootStarp.NavDropdown>
                        </ReactBootStarp.Nav>
                        <ReactBootStarp.Nav>
                            <BsFillPersonFill className='moveing' />
                            <ReactBootStarp.Nav.Link href="#deets">My Profile</ReactBootStarp.Nav.Link>

                            <AiOutlineShoppingCart className='moveing' />
                            <ReactBootStarp.Nav.Link eventKey={2} href="#memes">
                                Cart

                            </ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link eventKey={2} href="#memes">
                                $0.00

                            </ReactBootStarp.Nav.Link>
                        </ReactBootStarp.Nav>

                    </ReactBootStarp.Navbar.Collapse>
                </ReactBootStarp.Container>
            </ReactBootStarp.Navbar>
            <ReactBootStarp.Navbar bg="light" expand="lg">
                <ReactBootStarp.Container fluid>
                    <ReactBootStarp.Navbar.Brand href="#" className='font'>E-Comm</ReactBootStarp.Navbar.Brand>
                    <ReactBootStarp.Navbar.Toggle aria-controls="navbarScroll" />
                    <ReactBootStarp.Navbar.Collapse id="navbarScroll">
                        <ReactBootStarp.Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <ReactBootStarp.Nav.Link href="#action1">Home</ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link href="#action2">BAG</ReactBootStarp.Nav.Link>

                            <ReactBootStarp.Nav.Link href="#" >
                                SNEAKERS
                            </ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link href="#" >
                                BELT
                            </ReactBootStarp.Nav.Link>
                            <ReactBootStarp.Nav.Link href="#" >
                                CONTACT
                            </ReactBootStarp.Nav.Link>
                        </ReactBootStarp.Nav>
                        <ReactBootStarp.Form className="d-flex">
                            <ReactBootStarp.FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <ReactBootStarp.Button variant="outline-success">Search</ReactBootStarp.Button>
                        </ReactBootStarp.Form>
                    </ReactBootStarp.Navbar.Collapse>
                </ReactBootStarp.Container>
            </ReactBootStarp.Navbar>


            <div class="side-bar">
                <nav class="navigation">
                    <ul>
                        <li>
                            <div className='mass'>
                                <a href="#about">Nike(shoes 4)</a>
                                <a href="#products">American Tourister(bag 4)</a>
                                <a href="#services">Belts(4)</a>
                            </div>
                            <div className='mass1'>
                                <div class="range-slider">
                                    <a href="#contact">Cost</a>
                                    <input class="range-slider__range" type="range" value="100" min="0" max="500" />

                                    <span class="range-slider__value">0</span>
                                </div>
                            </div>


                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <ReactBootStarp.Card.Title className='nike'>Nike Force1 Toggle Trending</ReactBootStarp.Card.Title>
                <ReactBootStarp.Card.Img className='card5' variant="top" src="https://static.nike.com/a/images/t_default/47614650-53ed-4316-96a2-5ef16d8badb0/react-sfb-carbon-mens-elite-outdoor-shoes-k7gKNd.png" />

                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />

                <div class="content">
                    <div class="content__container">
                        <p class="content__container__text">
                            Hello
                        </p>

                        <ul class="content__container__list">
                            <li class="content__container__list__item">world !</li>
                            <li class="content__container__list__item">Wanna !</li>
                            <li class="content__container__list__item">Try !</li>
                            <li class="content__container__list__item">Me !</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                
            </div>
            <br></br>
            <div class="row" id="about">
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8e530a3-2317-4783-819b-40860281daaf/zoomx-streakfly-road-racing-shoes-V17qZm.png" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c11250b-1fc6-4727-9ea9-4aa63964ccae/kyrie-infinity-ep-basketball-shoes-QJ01t9.png" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35c49d34-c876-4d16-b4c7-6fd06a48063b/kyrie-infinity-ep-basketball-shoe-8H6qCV.png" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0931b854-5336-45bf-909a-c1e7870d6b53/phantom-gt2-academy-mg-multi-ground-football-boot-Mnr9D7.png" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
            </div>
            <br />
            <div className='row' id="products">
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://5.imimg.com/data5/SG/CX/PC/SELLER-47134600/american-tourister-travel-bag-500x500.jpg" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="data:image/jpeg;base64,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" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://5.imimg.com/data5/WL/YJ/GA/SELLER-39546977/american-tourister-meso-30-5-ltrs-teal-casual-backpack-fi2-0-11-002--500x500.jpg" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://5.imimg.com/data5/WL/YJ/GA/SELLER-39546977/american-tourister-meso-30-5-ltrs-teal-casual-backpack-fi2-0-11-002--500x500.jpg" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
            </div>
            <br />
            <div className='row' id="services">
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://m.media-amazon.com/images/I/71vFoc5xVLL._UX569_.jpg" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://cdn.shopclues.com/images1/thumbnails/97100/320/320/143778807-97100454-1550718940.jpg" />

                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://cdn.shopify.com/s/files/1/0216/8904/files/right_f0391c2d-ed75-4f6f-baaf-d49b7a9fca24.png?v=1605639338" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
                <div className='column'>
                    <ReactBootStarp.Card style={{ width: '15rem' }}>
                        <ReactBootStarp.Card.Img className='card' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvtqkQINXd9uK8OLy1NjNurwCeKBfZ4zeYw&usqp=CAU" />
                        <ReactBootStarp.Card.Body>
                            <ReactBootStarp.Card.Title>Card Title</ReactBootStarp.Card.Title>
                            <ReactBootStarp.Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </ReactBootStarp.Card.Text>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <ReactBootStarp.Button variant="primary">Go somewhere</ReactBootStarp.Button>
                        </ReactBootStarp.Card.Body>
                    </ReactBootStarp.Card>
                </div>
            </div>
            <br />
            <div className='page'>
                <ul class="pagination">
                    <li class="page-prev">
                        <a class="prev" href="#"><svg t="1580195949197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4493" width="20" height="20"><path d="M906.78272 588.78976c-0.02048 8.4992-6.88128 15.36-15.38048 15.37024l-443.6992-0.01024 75.70432 191.68256c2.51904 6.42048 0.48128 13.76256-5.03808 17.90976-5.51936 4.16768-13.13792 4.1472-18.61632-0.09216l-376.5248-289.47456c-3.77856-2.89792-6.00064-7.41376-6.00064-12.16512 0-4.78208 2.22208-9.27744 6.00064-12.1856l376.5248-289.47456c2.7648-2.11968 6.06208-3.19488 9.37984-3.19488 3.23584 0 6.5024 1.03424 9.23648 3.10272 5.51936 4.1472 7.5776 11.48928 5.03808 17.90976L447.68256 419.84l443.71968-0.01024c8.4992 0.01024 15.36 6.88128 15.36 15.36L906.78272 588.78976z" p-id="4494" fill="#777777"></path></svg></a>
                    </li>
                    <li class="page-number active"><a href="#">1</a></li>
                    <li class="page-number"><a href="#">2</a></li>
                    <li class="page-number"><a href="#">3</a></li>
                    <li class="page-number"><a href="#">4</a></li>
                    <li class="page-number"><a href="#">5</a></li>
                    <li class="page-number"><a href="#">6</a></li>
                    <li class="page-next">
                        <a class="next" href="#"><svg t="1580195920917" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4995" width="20" height="20"><path d="M906.77248 512c0 4.77184-2.21184 9.2672-5.9904 12.17536l-376.5248 289.4848c-2.7648 2.11968-6.06208 3.18464-9.3696 3.18464-3.25632 0-6.5024-1.03424-9.24672-3.09248-5.50912-4.15744-7.5776-11.48928-5.03808-17.90976l75.71456-191.67232L132.58752 604.17024c-8.48896 0-15.36-6.88128-15.36-15.36l0-153.6c0-8.48896 6.87104-15.36 15.36-15.36l443.72992 0-75.71456-191.68256c-2.53952-6.42048-0.47104-13.75232 5.04832-17.90976 5.50912-4.15744 13.12768-4.13696 18.60608 0.09216l376.5248 289.4848C904.56064 502.7328 906.77248 507.22816 906.77248 512z" p-id="4996" fill="#777777"></path></svg></a>
                    </li>
                </ul>

            </div>
            <br />
            <div className='back'>
                <br />
                <br />
                <br />
                <div>
                    <div className='bot'>E-COMM</div>
                    <div className='bot1'>Follow Us</div>
                    <div className='bot1'><AiFillInstagram />
                        <AiFillFacebook />
                        <AiFillTwitterCircle /></div>
                </div>

                <div className='bot'>In the beginning, e-commerce was really about getting commodity products</div>
                <div className='bot'>online as cheaply as possible. Now, we’re moving into the more exciting phase of eCommerce,</div>
                <div className='bot'>where it’s about emotional products – the things people really cherish.</div>


            </div>













        </div>
    )
}

export default App;