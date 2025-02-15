import logo from './logo.svg';
import './App.css';
import Resume from './Documents/Vikas Chauhan Resume IT_compressed.pdf'
import AboutUs from './Documents/about-us.jpg'
import ToDo from './Documents/todo-logo.png'
import GrocerryLogo from './Documents/grocerry-logo.jpg'
import Netlify from './Documents/netlify logo.png'
import Calculator from './Documents/Calculator logo.png'
import WebsiteLogo from './Documents/WebSite Logo.png'
import MovieLogo from './Documents/Movie logo.png';
import NewsLogo from './Documents/News_Time_new_logo.png'
import FooterLogo from './Documents/footer-logo.png'
import IndeedLogo from './Documents/IndeedLogo.png'
import PosterImg from './Documents/RegisterKaroPoster_page.jpg'
import ShoppingCart from './Documents/Cartjourney Poster.jpg'
function App() {
  return (
    <div className="App">
      <header className="header_area">
        <div className="main-menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                
                <br/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mr-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" style={{color:'#0d6efd'}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    {/* <!--  ======================= End Header ============================== --> */}


    {/* <!--  ======================= Start Main ================================ --> */}
    <main className="site-main">
        {/* <!--  ======================= Start Banner Section =======================  --> */}
        <section className="site-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 site-title">
                        <h3 className="title-text">Hey !!! 🙋‍♂️</h3>
                        <h1 className="title-text">I'm Vikas Chauhan</h1>
                        <h4 className="title-text text-uppercase">Web Developer</h4>
                        <div className="site-buttons">
                            <div className="d-flex flex-row flex-wrap">
                                <a href="#about" button type="button" ><button className="btn button primary-button mr-4">About
                                        Me</button></a>

                                <a href={Resume} target="_blank" button type="button"
                                    ><button className="btn button secondary-button">Download Resume</button></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 banner-image">
                        {/* <!-- <img src="./assets/img/image.PNG" alt="banner-img" className="img-fluid"> --> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <!--  ======================= End Banner Section =======================  --> */}

        {/* <!--  ========================= About Me Section ==========================  --> */}
        <section className="about-area" id="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-6">
                        <div className="about-image">
                            <img src={AboutUs} alt="About us" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h2 className="text-uppercase pt-5 title-h1">About Me</h2>
                        <div className="paragraph py-4 w-75">
                            <p className="para">
                                Enthusiastic and motivated Python Full Stack Developer. Looking for where I can contribute to both frontend and backend
                                development, while learning from industry professionals to further expand
                                my skills in web development.
                            </p>
                            <p className="para">
                                My aim is to be a full stack developer, for that I have been constantly working on my
                                fields.
                                I like to explore different fields to learn new things.
                                <br/>
                                <br/>
                            <em>I am looking for opportunities as - Software Engineer / Web Developer</em>
                            
                            </p>
                        </div>
                        {/* <!--<button type="button" className="btn button primary-button text-uppercase">Download Resume</button>--> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <!--  ========================= End Me Section ==========================  --> */}

        {/* <!-- ======= Skills Section ======= --> */}
        <section id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>
                        <center> <b>• Languages/Technologies:</b> Html, CSS, JavaScript, ReactJs, Python
                                <br/>
                                <b>• Lib/Frameworks:</b> Bootstrap, React.js, Redux, Django
                                <br/>
                                <b>• Database:</b> MongoDb, My SQL, NoSQL, SQLite
                                <br/>
                                <b>• Tools:</b> Github, Vs Code
                                <br/>
                                <b>• Soft Skills:</b> Team Player, Leadership, Time Management, Event Management
                                <br/>
                            
                        </center>
                    </p>
                   
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">REACTJS<i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">PYTHON<i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">DJANGO <i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">MONGODB <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">JAVASCRIPT <i className="val">85%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">HTML <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">CSS <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">BOOTSTRAP <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">MYSQL<i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">RestAPI<i className="val">60%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Redux<i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">SQLite<i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        {/* <!-- End Skills Section --> */}

        {/* <!-- ======= Resume Section ======= --> */}
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Seeking Roles - Software Development Engineer, Web Developer or Product Manager</p>
                    <br/>
                    
                    <a href={Resume} target="_blank" button type="button"
                        className="btn button secondary-button">Download
                        Resume</a>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Vikas Chauhan</h4>
                            <p><em>Fresher but Innovative and well equipped developer in
                                    designing & development.</em></p>
                            <ul>
                                <li>vc34400@gmail.com</li>
                                <li>Mb. No- 9650720583</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                       
                        <div className="resume-item">
                            <h4>Python Full Stack + React Course</h4>
                            <p>South Extension, New Delhi, India</p>
                            <h5>2024</h5>
                            <p><em><b>7 month Course </b></em></p>
                        </div>

                        <div className="resume-item">
                            <h4>A.R.S.D College(I.G.N.O.U)</h4>
                            <p>New Delhi, India</p>
                            <h5>2017 - 2020</h5>
                            <p><em>Masters in History with(M.A) <b>55%
                                        Aggregate</b></em></p>
                        </div>
                       
                        <div className="resume-item">
                            <h4>A.R.S.D College(Delhi University)</h4>
                            <p>New Delhi, India</p>
                            <h5>2014- 2017</h5>
                            <p><em>Bachelors in History(B.A) <b>57% 
                                Aggregate </b></em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Kendriya Vidyalaya</h4>
                            <p>I.N.A Colony, New Delhi, India</p>
                            <h5>2012- 2014</h5>
                            <p><em>Central Board of Secondary Education - className XII (2013-14)</em></p>
                            <p><em>Central Board of Secondary Education - className X (2011-12)</em></p>
                        </div>
                    </div>
                </div>
               
            </div>

        </section>
        {/* <!-- End Resume Section --> */}



        {/* <!--  ====================== Start Project Section =============================  --> */}
        <section className="project-area" id="project">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center project-title">
                        <h1 className="text-uppercase title-h1">My Projects 💻</h1>
                        <div className="ul-site-seperator"></div>
                    </div>
                </div>
                <div className="container project-list">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="project">
                                <div className="project-img text-center py-4">
                                    <img src={ToDo} alt=" Services-1"/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-lato">To-do list</h5>
                                    <div className="ul-project-seperator"></div>
                                    <p className="card-text text-secondary">In this web app you can make your to-do list and
                                        download as pdf</p>
                                    <p>Technologies used:-React, JavaScript, Html, CSS, BootStrap</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="project">
                                <div className="project-img text-center py-4">
                                    <img src={Calculator} alt=" Services-1"/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-lato">Calculator web app</h5>
                                    <div className="ul-project-seperator"></div>
                                    <p className="card-text text-secondary">User can calculate the numbers.</p>
                                    <p>Technologies used:- JavaScript, Html, CSS
                                    </p>
                                    <p><a href="https://calculator-vikaschauhan.netlify.app/"
                                            target="_blank"><img src={Netlify} height='50px' alt="" /></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="project">
                                <div className="project-img text-center py-4">
                                    <img src={GrocerryLogo} alt="Services-1"/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-lato">Grocerry order website</h5>
                                    <div className="ul-project-seperator"></div>
                                    <p className="card-text text-secondary">
                                        grocerry order website which use to order grocerry </p>
                                    <p>Technologies used: - HTML, CSS, JavaScript, React & Bootstrap</p>
                                    <p><a href="https://grocerrysite-vikaschauhan.netlify.app/"
                                            target="_blank"><img src={Netlify} height='50px' alt="" /></a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="project">
                                <div className="project-img text-center py-4">
                                     <img src={WebsiteLogo} alt="Services-1" style={{width:'250px', height:'160px'}}/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-lato">Personal Portfolio Website </h5>
                                    <div className="ul-project-seperator"></div>
                                    <p className="card-text text-secondary">
                                        My personal portfolio website that show all my work in one place </p>
                                    <p>Technologies used: - HTML, CSS, JavaScript, React & Bootstrap</p>
                                    <p><a href="https://vikaschauhan-resume.netlify.app"
                                            target="_blank"><img src={Netlify} height='50px' alt="" /></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="project">
                                <div className="project-img text-center py-4">
                                    <img src={MovieLogo} alt="Services-4"/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-lato">Movie Hub</h5>
                                    <div className="ul-project-seperator"></div>
                                    
                                    <ul>
                                        <li> Movie Hub is a Collection of HD Movies. </li>
                                        
                                    </ul>
                                    Technologies used: - HTML, CSS, JavaScript, React, Bootstrap & Axios
                                    <p><a href="https://moviesite-vikaschauhan.netlify.app"
                                            target="_blank"><img src={Netlify} height='50px' alt="" /></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="project">
                                <div className="project-img text-center py-4">
                                  <img src={NewsLogo} alt="Services-3" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-lato">News</h5>
                                    <div className="ul-project-seperator"></div>
                                    <br className="card-text text-secondary"/>
                                    <b>NEWS WEBSITE</b><br />
                                    In this website we providing some important National & International Breaking News.
                                    
                                    <p>
                                        Technologies used: -Html, CSS, JavaScript, Bootstrap, React.
                                    </p>
                                    <p><a href="https://newssite-vikaschauhan.netlify.app" target="_blank"><img src={Netlify} height='50px' alt="" /></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="project">
                                <div className="project-img text-center py-4">
                                  <img src={PosterImg} alt="Services-3" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-lato">RegisterKaro Demo Home Page</h5>
                                    <div className="ul-project-seperator"></div>
                                    <br className="card-text text-secondary"/>
                                    <b>RegisterKaro</b><br />
                                    It is the RegisterKaro Home Page.
                                    
                                    <p>
                                        Technologies used: -Html, CSS, JavaScript, Bootstrap, React.
                                    </p>
                                    <p><a href="https://registerkarohomedemo.netlify.app/" target="_blank"><img src={Netlify} height='50px' alt="" /></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="project">
                                <div className="project-img text-center py-4">
                                  <img src={ShoppingCart} alt="Services-3" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-lato">Shopping Cart Demo</h5>
                                    <div className="ul-project-seperator"></div>
                                    <br className="card-text text-secondary"/>
                                    <b>Shopping Cart</b><br />
                                    It is a simple Shopping Cart Demo.
                                    
                                    <p>
                                        Technologies used: -Html, CSS, JavaScript, Bootstrap, React.
                                    </p>
                                    <p><a href="https://cartjourney.netlify.app/" target="_blank"><img src={Netlify} height='50px' alt="" /></a></p>
                                </div>
                            </div>
                        </div>
                       

                        <div className="alert alert-success text-center mt-5" role="alert">
                            Checkout my <a href="https://app.netlify.com/teams/vc34400/sites"
                                target="_blank">Netlify  </a>
                             account for
                            my projects info
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--  ====================== End Project Section =============================  --> */}

        {/* <!--  ========================== Contact Section ============================  --> */}
        <section className="contact-us-area" id="contact">
            <div className="container contact">
                <div className="row">
                    <div className="col-lg-12 text-center contact-title">
                        <h4 className="text-uppercase">Get In Touch 📧 </h4>
                    </div>
                </div>
                <form >
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-4">
                        <label  htmlFor="exampleInputSubject1" className="form-label">Subject:</label>
                        <input type="text" className="form-control" id="exampleInputSubject1"/>
                    </div>
                    <div className="mb-3">
                        <label  htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn button primary-button submitbtn">Submit</button>
                </form>
            </div>
        </section>
        {/* <!--  ========================== Contact Section ============================  --> */}

    </main>
    {/* <!--  ======================= End Main ================================ --> */}

    <footer className="footer-area">
        <div className="container">
            <div className="">
                <div className="site-logo text-center py-4">
                    <a href="#"><img src={FooterLogo} alt="logo" width="60px" height="60px"/></a>
                </div>
                <div className="copyrights text-center">
                    <p className="footer-para text-white"><strong>Vikas Chauhan</strong></p>
                </div>
                <div className="ul-footer-seperator"></div>
                <div className="social text-center">
                    
                    <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" target="_blank"><i
                            className="fab fa-indeed"><img src={IndeedLogo} height='25px' width='25px' alt="" /></i></a>
                </div>
                <div className="address">
                    <p className='text-white' style={{justifySelf:'center'}}><i className="fa fa-map-marker" ></i> Delhi, India</p>
                </div>
                <div id="copyright">
                    Copyright &copy; 2023 <strong><span>Vikas Chauhan</span></strong>. All Rights Reserved
                </div>
            </div>
        </div>
    </footer>

    </div>
  );
}

export default App;
