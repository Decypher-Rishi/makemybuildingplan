import React from 'react'

export default function Home() {
  return (
    <>
  	<div className="page-wraper"> 
       	

           <header className="site-header header-style-1 mobile-sider-drawer-menu">
               <div className="top-bar bg-gray">
                   <div className="container">
                       <div className="row">
                           <div className="mt-topbar-left">
                               <ul className="list-unstyled e-p-bx pull-right">
                                   <li><i className="fa fa-envelope"></i> ace.rakeshupadhyay@gmail.com</li>
                                   <li><i className="fa fa-phone"></i>+919919008883</li>
                                   <li><i className="fa fa-clock-o"></i>Sun-Sat 9.45 am</li>
                               </ul>
                           </div>
                           <div className="mt-topbar-right">
                               <div className="appint-btn"><a href="contact-1.html" className="site-button">Make an Appointment</a></div>                            
                           </div>
                       </div>
                   </div>
               </div>          
               <div className="sticky-header main-bar-wraper">
                   <div className="main-bar bg-white">
                       <div className="container">
                           <div className="logo-header">
                               <div className="logo-header-inner logo-header-one">
                                   <a href="index.html">
                                       <img src="images/test_title.png" alt="" />
                                   </a>
                               </div>
                           </div>
           
                           <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                               <span className="sr-only">Toggle navigation</span>
                               <span className="icon-bar icon-bar-first"></span>
                               <span className="icon-bar icon-bar-two"></span>
                               <span className="icon-bar icon-bar-three"></span>
                           </button>
                       
                               <div className="extra-nav">
                                   <div className="extra-cell">											
                                       <a href="#search">
                                           <i className="fa fa-search"></i>
                                       </a>
                                   </div>
                                   <div className="extra-cell">
                                       <a href="#" className="contact-slide-show"><i className="fa fa-angle-left arrow-animation"></i></a>
                                   </div>                                
                               </div>
                                                 
                                <div className="contact-slide-hide " style={{background_image:"url('images/background/bg-5.png's)"}}> 
                                   <div className="contact-nav">
                                        <a href="javascript:void(0)" className="contact_close">&times;</a>
                                        <div className="contact-nav-form p-a30">
                                           <div className="contact-info   m-b30">
                                
                                               <div className="mt-icon-box-wraper center p-b30">
                                                   <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone"></i></div>
                                                   <div className="icon-content">
                                                       <h5 className="m-t0 font_weight-500">Phone number</h5>
                                                       <p>(075) 123-7654</p>
                                                   </div>
                                               </div>
                                               
                                               <div className="mt-icon-box-wraper center p-b30">
                                                   <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope"></i></div>
                                                   <div className="icon-content">
                                                       <h5 className="m-t0 font_weight-500">Email address</h5>
                                                       <p>7xthemehelp@gmail.com</p>
                                                   </div>
                                               </div>
                                               
                                               <div className="mt-icon-box-wraper center p-b30">
                                                   <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-map-marker"></i></div>
                                                   <div className="icon-content">
                                                       <h5 className="m-t0 font_weight-500">Address info</h5>
                                                       <p>201 Liverpool Street, Suite 721, London</p>
                                                   </div>
                                               </div>
                                           </div>                                          
                                           <div className="full-social-bg">
                                                 <ul>
                                                       <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                                       <li><a href="#" className="google"><i className="fa fa-google"></i></a></li>
                                                       <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                                       <li><a href="#" className="tumblr"><i className="fa fa-tumblr"></i></a></li>
                                                       <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                                       <li><a href="#" className="youtube"><i className="fa fa-youtube"></i></a></li>
                                                 </ul>
                                           </div>
                                           <div className="text-center">
                                               <h4 className="font_weight-600">&copy;  2023 7xtheme</h4> 
                                           </div>                                                                    			
                                        </div>
                                   </div> 
                               </div>                               
                        
                               <div id="search"> 
                                   <span className="close"></span>
                                   <form role="search" id="searchform" action="https://theme7x.com/search" method="get" className="radius-xl">
                                       <div className="input-group">
                                           <input value="" name="q" type="search" placeholder="Type to search"/>
                                           <span className="input-group-btn"><button type="button" className="search-btn"><i className="fa fa-search arrow-animation"></i></button></span>
                                       </div>   
                                   </form>
                               </div>                                                                                                          
                       
                               <div className="header-nav navbar-collapse collapse">
                                   <ul className=" nav navbar-nav">
                                       <li className="active">
                                           <a href="javascript:;">Home</a>
                                        <ul className="sub-menu">
   
                                               <li>
                                                   <a href="index.html">Home-1</a>
                                               </li>
                                               <li>
                                                   <a href="index-2.html">Home-2</a>
                                               </li>
                                               <li>
                                                   <a href="index-3.html">Home-3 boxed style</a>
                                               </li> 
                                               <li>
                                                   <a href="index-4.html">Home-4</a>
                                               </li>                                          
                                           </ul>                                                    
                                       </li>
   
                                       <li>
                                           <a href="about-1.html">About us</a>
                                       </li> 
                                       <li>
                                           <a href="services.html">Services</a>
                                       </li> 
                                       <li>
                                           <a href="javascript:;">Pages</a>
                                           <ul className="sub-menu">
                                               <li>
                                                   <a href="javascript:;">Blog</a>
                                                   <ul className="sub-menu has-child">
                                                       <li><a href="blog-grid.html">Blog Grid</a></li>
                                                       <li><a href="blog-listing.html">Blog Listing</a></li>
                                                       <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                                   </ul>
                                               </li>                                        
                                               <li>
                                                   <a href="faq.html">FAQ</a>
                                               </li>
                                               <li>
                                                   <a href="error-404.html">Error 404</a>
                                               </li>                                            
                                               <li>
                                                   <a href="contact-1.html">Contact us</a>
                                               </li>
                                           </ul>
                                       </li>                                                                                                                                               
                                       <li>
                                           <a href="javascript:;">Post detail</a>
                                           <ul className="sub-menu">
                                               <li><a href="post-image.html">Post Image</a></li>
                                               <li><a href="post-gallery.html">Post Gallery</a></li>
                                               <li><a href="post-video.html">Post Video</a></li>
                                               <li><a href="post-right-sidebar.html">Post Right Sidebar</a></li>                                        
                                           </ul>                                    
                                       </li>                                         
   
                                       <li>
                                           <a href="javascript:;">Projects</a>
                                           <ul className="sub-menu">
                                               <li><a href="project-grid.html">Project Grid</a></li>
                                               <li><a href="project-masonry.html">Project Masonry</a></li>
                                               <li><a href="project-carousel.html">Project Carousel</a></li>
                                               <li><a href="project-classNameic.html">Project classNameic-1</a></li>
                                               <li><a href="project-classNameic2.html">Project classNameic-2</a></li>
                                               <li><a href="project-detail.html">Project Detail</a></li>                                        
                                           </ul>
                                       </li>
                                       <li className="submenu-direction">
                                           <a href="javascript:;">Shortcodes</a>
                                           <ul className="sub-menu">
                                               <li><a href="accordian.html">Accordian</a></li>
                                               <li><a href="button.html">Button</a></li>
                                               <li><a href="icon_box.html">Icon box style</a></li>
                                               <li><a href="list_group.html">List group</a></li>
                                               <li><a href="modal_popup.html">Modal popup</a></li>
                                               <li><a href="tabs.html">Tabs</a></li>
                                               <li><a href="table.html">Table</a></li>
                                               <li><a href="video.html">Video  </a></li>
                                               <li><a href="icon-font.html">Icon Font </a></li> 
                                           </ul>                                    
                                       </li>                                
                                   </ul>
                               </div>
                               
                       </div>
                   </div>
               </div>
           </header>
 
           <div className="page-content">
           
   
            
               <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{background:"#eeeeee",padding:"0px"}}>
                   <div id="welcome" className="rev_slider fullscreenbanner" style={{display:"none"}} data-version="5.4.3.1">
                       <ul>	
                   
                           <li data-index="rs-901" 
                           data-transition="fade" 
                           data-slotamount="default" 
                           data-hideafterloop="0"
                           data-hideslideonmobile="off" 
                           data-easein="default" 
                           data-easeout="default" 
                           data-masterspeed="default"
                           data-thumb="images/main-slider/slider1/slide1-thumb.jpg" 
                           data-rotate="0" 
                           data-fstransition="fade"
                           data-fsmasterspeed="300" 
                           data-fsslotamount="7" 
                           data-saveperformance="off" 
                           data-title="" data-param1=""
                           data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8=""
                           data-param9="" data-param10="" data-description="">
                     
                           <img src="images/main-slider/slider1/slide1.jpg" alt=""
                               data-lazyload="images/main-slider/slider1/slide1.jpg" data-bgposition="center center"
                               data-bgfit="cover" data-bgparallax="4" className="rev-slidebg" data-no-retina />
                  
                           <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-0"
                               data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                               data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                               data-width="full"
                               data-height="full" 
                               data-whitespace="nowrap" 
                               data-type="shape" 
                               data-basealign="slide"
                               data-responsive_offset="off" 
                               data-responsive="off" 
                               data-frames='[
                                   {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                   {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                   ]' 
                               data-textAlign="['left','left','left','left']" 
                               data-paddingtop="[0,0,0,0]"
                               data-paddingright="[0,0,0,0]" 
                               data-paddingbottom="[0,0,0,0]" 
                               data-paddingleft="[0,0,0,0]"
                               style={{z_index: "1",background_color:"rgba(255, 255, 255, 0.3)",border_color:"rgba(0, 0, 0, 0)",border_width:"0px"}}>
                           </div>
   
   
   
   
                  
                           <div className="tp-caption   tp-resizeme" 
                               id="slide-901-layer-2" 
                               data-x="['left','left','left','left']" 
                               data-hoffset="['50','130','130','130']" 
                               data-y="['top','top','top','top']" data-voffset="['240','240','180','200']" 
                               data-fontsize="['72','72','62','52']" 
                               data-lineheight="['82','82','72','62']" 
                               data-width="['700','700','700','500']" 
                               data-height="['none','none','none','none']" 
                               data-whitespace="['normal','normal','normal','normal']"
                               data-type="text" 
                               data-responsive_offset="on"
                               data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                               data-textAlign="['left','left','left','left']" 
                               data-paddingtop="[5,5,5,5]"
                               data-paddingright="[0,0,0,0]" 
                               data-paddingbottom="[0,0,0,0]" 
                               data-paddingleft="[0,0,0,0]" 
                               style={{z_index: "13", white_space:"normal", font_weight: "700", color:"#111", border_width:"0px",font_family: 'Poppins', text_transform:"uppercase "}}>
                               <div>We Build Your Dream</div>
   
                           </div>
   
              
   
                           <div className="tp-caption rev-btn  tp-resizeme slider-block" id="slide-901-layer-3"
                               data-x="['left','left','left','left']" 
                               data-hoffset="['0','80','80','60']"
                               data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                               data-width="none"
                               data-height="none" 
                               data-whitespace="nowrap" 
                               data-type="button" 
                               data-responsive_offset="on"
                               data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                                       {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                               data-textAlign="['left','left','left','left']" 
                               data-paddingtop="[250,250,250,200]"
                               data-paddingright="[150,150,150,150]" 
                               data-paddingbottom="[250,250,250,200]"
                               data-paddingleft="[150,150,150,150]" 
                               style={{z_index: "8"}}>
                               <div className="rs-wave" data-speed="1" data-angle="0" data-radius="2px"></div>
                           </div>
   
   
                      
                           <div className="tp-caption   tp-resizeme" id="slide-901-layer-4" 
                               data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" 
                               data-y="['top','top','top','top']" data-voffset="['410','410','350','340']" 
                               data-fontsize="['20','20','30','30']" 
                               data-lineheight="['28','28','48','38']" 
                               data-width="['600','600','700','600']" 
                               data-height="['none','none','none','none']" 
                               data-whitespace="['normal','normal','normal','normal']"
                               data-type="text" 
                               data-responsive_offset="on"
                               data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                               data-textAlign="['left','left','left','left']" 
                               data-paddingtop="[5,5,5,5]"
                               data-paddingright="[0,0,0,0]" 
                               data-paddingbottom="[0,0,0,0]" 
                               data-paddingleft="[0,0,0,0]" 
                               style={{z_index: "13", white_space: "normal", font_weight: "500",color:"#111",border_width:"0px",font_family: 'Poppins'}}>
                               It is a long established fact that a reader will be distracted by the readable content.
   
                           </div>
   
         
                           <div className="tp-caption tp-resizeme" id="slide-901-layer-5" 
                               data-x="['left','left','left','left']" 
                               data-hoffset="['50','130','130','130']" 
                               data-y="['top','top','top','top']" data-voffset="['500','520','500','480']" 
                               data-lineheight="['none','none','none','none']" 
                               data-width="['300','300','300','300']" 
                               data-height="['none','none','none','none']"
                               data-whitespace="['normal','normal','normal','normal']" 
                               data-type="text" data-responsive_offset="on"
                               data-frames='[ 
                                   {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                   {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                   ]' 
                               data-textAlign="['left','left','left','left']" 
                               data-paddingtop="[0,0,0,0]"
                               data-paddingright="[0,0,0,0]" 
                               data-paddingbottom="[0,0,0,0]" 
                               data-paddingleft="[0,0,0,0]"
                               style={{z_index:"100", text_transform:"uppercase"}}>
                               <a href="about-1.html" className="site-button-secondry btn-effect">More About</a>
                           </div>
   
                           </li>
   
   
               
                           <li data-index="rs-902" 
                               data-transition="fade" 
                               data-slotamount="default" 
                               data-hideafterloop="0"
                               data-hideslideonmobile="off" 
                               data-easein="default" 
                               data-easeout="default" data-masterspeed="default"
                               data-thumb="images/main-slider/slider1/slide2-thumb.jpg"
                               data-rotate="0" data-fstransition="fade"
                               data-fsmasterspeed="300" 
                               data-fsslotamount="7" 
                               data-saveperformance="off" 
                               data-title="" data-param1=""
                               data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8=""
                               data-param9="" data-param10="" data-description="">
            
                               <img src="images/main-slider/slider1/slide2.jpg" alt=""
                                   data-lazyload="images/main-slider/slider1/slide2.jpg" data-bgposition="center center"
                                   data-bgfit="cover" data-bgparallax="4" className="rev-slidebg" data-no-retina />
             
                               <div className="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-0"
                                   data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                   data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full"
                                   data-height="full" 
                                   data-whitespace="nowrap" 
                                   data-type="shape" 
                                   data-basealign="slide"
                                   data-responsive_offset="off" 
                                   data-responsive="off" 
                                   data-frames='[
                                       {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                       {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                       ]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                                   data-paddingright="[0,0,0,0]" 
                                   data-paddingbottom="[0,0,0,0]" 
                                   data-paddingleft="[0,0,0,0]"
                                   style={{z_index: "1",background_color:"rgba(255, 255, 255, 0.3)",border_color:"rgba(0, 0, 0, 0)",border_width:"0px"}}>
                               </div>
   
   
                
                               <div className="tp-caption   tp-resizeme" 
                                   id="slide-902-layer-2" 
                                   data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']"
                                   data-y="['top','top','top','top']" data-voffset="['240','240','180','200']" 
                                   data-fontsize="['72','72','62','52']" 
                                   data-lineheight="['82','82','72','62']" 
                                   data-width="['700','700','700','500']" 
                                   data-height="['none','none','none','none']" 
                                   data-whitespace="['normal','normal','normal','normal']"
                                   data-type="text" data-responsive_offset="on"
                                   data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                   data-textAlign="['left','left','left','left']" 
                                   data-paddingtop="[5,5,5,5]"
                                   data-paddingright="[0,0,0,0]" 
                                   data-paddingbottom="[0,0,0,0]" 
                                   data-paddingleft="[0,0,0,0]" 
                                   style={{z_index: "13", white_space: "normal", font_weight: "700",  color:"#111", border_width:"0px",font_family: 'Poppins',  text_transform:"uppercase"}}>
                                   <div>From concept to creation.</div>
   
                               </div>
   
                
   
                               <div className="tp-caption rev-btn  tp-resizeme slider-block" id="slide-902-layer-3"
                                   data-x="['left','left','left','left']" data-hoffset="['0','80','80','60']"
                                   data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none"
                                   data-height="none" 
                                   data-whitespace="nowrap" 
                                   data-type="button" 
                                   data-responsive_offset="on"
                                   data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                                           {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                   data-textAlign="['left','left','left','left']" 
                                   data-paddingtop="[250,250,250,200]"
                                   data-paddingright="[150,150,150,150]" 
                                   data-paddingbottom="[250,250,250,200]"
                                   data-paddingleft="[150,150,150,150]" 
                                   style={{z_index: "8"}}>
                                   <div className="rs-wave" data-speed="1" data-angle="0" data-radius="2px"></div>
                               </div>
   
   
              
                               <div className="tp-caption   tp-resizeme" id="slide-902-layer-4" 
                                   data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" 
                                   data-y="['top','top','top','top']" data-voffset="['410','410','350','340']" 
                                   data-fontsize="['20','20','30','30']" 
                                   data-lineheight="['28','28','48','38']" 
                                   data-width="['600','600','700','600']" 
                                   data-height="['none','none','none','none']"
                                   data-whitespace="['normal','normal','normal','normal']"
                                   data-type="text" 
                                   data-responsive_offset="on"
                                   data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                   data-textAlign="['left','left','left','left']" 
                                   data-paddingtop="[5,5,5,5]"
                                   data-paddingright="[0,0,0,0]" 
                                   data-paddingbottom="[0,0,0,0]" 
                                   data-paddingleft="[0,0,0,0]"
                                   style= {{z_index: "13",  white_space: "normal", font_weight: "500",  color:"#111", border_width:"0px",font_family: 'Poppins'}}>
                                   It is a long established fact that a reader will be distracted by the readable content.
   
                               </div>
   
            
                               <div className="tp-caption tp-resizeme" id="slide-902-layer-5" 
                                   data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" 
                                   data-y="['top','top','top','top']" data-voffset="['500','520','500','480']" 
                                   data-lineheight="['none','none','none','none']" 
                                   data-width="['300','300','300','300']" 
                                   data-height="['none','none','none','none']"
                                   data-whitespace="['normal','normal','normal','normal']" 
                                   data-type="text" 
                                   data-responsive_offset="on"
                                   data-frames='[ 
                                       {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                       {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                       ]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                                   data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                   style={{z_index:"100", text_transform:"uppercase"}}>
                                   <a href="about-1.html" className="site-button-secondry btn-effect">More About</a>
                               </div>
   
                           </li>
   
   
            
                           <li data-index="rs-903" 
                               data-transition="fade" 
                               data-slotamount="default" 
                               data-hideafterloop="0"
                               data-hideslideonmobile="off"
                               data-easein="default" 
                               data-easeout="default" 
                               data-masterspeed="default"
                               data-thumb="images/main-slider/slider1/slide3-thumb.jpg" 
                               data-rotate="0"
                               data-fstransition="fade"
                               data-fsmasterspeed="300" 
                               data-fsslotamount="7" 
                               data-saveperformance="off" 
                               data-title="" data-param1=""
                               data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8=""
                               data-param9="" data-param10="" data-description="">
                 
                               <img src="images/main-slider/slider1/slide3.jpg" alt=""
                                   data-lazyload="images/main-slider/slider1/slide3.jpg" data-bgposition="center center"
                                   data-bgfit="cover" data-bgparallax="4" className="rev-slidebg" data-no-retina />
            
                               <div className="tp-caption tp-shape tp-shapewrapper " id="slide-903-layer-0"
                                   data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                   data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full"
                                   data-height="full" 
                                   data-whitespace="nowrap" 
                                   data-type="shape" 
                                   data-basealign="slide"
                                   data-responsive_offset="off" 
                                   data-responsive="off" 
                                   data-frames='[
                                       {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                       {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                       ]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                                   data-paddingright="[0,0,0,0]" 
                                   data-paddingbottom="[0,0,0,0]" 
                                   data-paddingleft="[0,0,0,0]"
                                   style={{z_index: "1",background_color:"rgba(255, 255, 255, 0.3)",border_color:"rgba(0, 0, 0, 0)",border_width:"0px"}}>
                               </div>
   
   
   
   
        
                               <div className="tp-caption   tp-resizeme" id="slide-903-layer-2"
                                   data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" 
                                   data-y="['top','top','top','top']" data-voffset="['240','240','180','200']" 
                                   data-fontsize="['72','72','62','52']" 
                                   data-lineheight="['82','82','72','62']" 
                                   data-width="['700','700','700','500']" 
                                   data-height="['none','none','none','none']" 
                                   data-whitespace="['normal','normal','normal','normal']"
                                   data-type="text" data-responsive_offset="on"
                                   data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                   data-textAlign="['left','left','left','left']" 
                                   data-paddingtop="[5,5,5,5]"
                                   data-paddingright="[0,0,0,0]" 
                                   data-paddingbottom="[0,0,0,0]" 
                                   data-paddingleft="[0,0,0,0]" 
                                   style={{z_index: "13",   white_space: "normal", font_weight: "700", color:"#111", border_width:"0px", font_family: 'Poppins', text_transform:"uppercase"}}>
                                   <div>Making dreams come to life</div>
   
                               </div>
   
                   
   
                               <div className="tp-caption rev-btn  tp-resizeme slider-block" id="slide-903-layer-3"
                                   data-x="['left','left','left','left']" data-hoffset="['0','80','80','60']"
                                   data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                   data-width="none"
                                   data-height="none" 
                                   data-whitespace="nowrap" 
                                   data-type="button" 
                                   data-responsive_offset="on"
                                   data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                                           {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                   data-textAlign="['left','left','left','left']" 
                                   data-paddingtop="[250,250,250,200]"
                                   data-paddingright="[150,150,150,150]" 
                                   data-paddingbottom="[250,250,250,200]"
                                   data-paddingleft="[150,150,150,150]" 
                                   style={{z_index: "8"}}>
                                   <div className="rs-wave" data-speed="1" data-angle="0" data-radius="2px"></div>
                               </div>
   
   
                               <div className="tp-caption   tp-resizeme" id="slide-903-layer-4" 
                                   data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" 
                                   data-y="['top','top','top','top']" data-voffset="['410','410','350','340']" 
                                   data-fontsize="['20','20','30','30']" 
                                   data-lineheight="['28','28','48','38']" 
                                   data-width="['600','600','700','600']" 
                                   data-height="['none','none','none','none']" 
                                   data-whitespace="['normal','normal','normal','normal']"
                                   data-type="text" data-responsive_offset="on"
                                   data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                   data-textAlign="['left','left','left','left']" 
                                   data-paddingtop="[5,5,5,5]"
                                   data-paddingright="[0,0,0,0]" 
                                   data-paddingbottom="[0,0,0,0]" 
                                   data-paddingleft="[0,0,0,0]" 
                                   style={{z_index: "13",  white_space: "normal", font_weight: "500", color:"#111", border_width:"0px",font_family: 'Poppins'}}>
                                   It is a long established fact that a reader will be distracted by the readable content.
   
                               </div>
   
                               <div className="tp-caption tp-resizeme" id="slide-903-layer-5" 
                                   data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']"
                                   data-y="['top','top','top','top']" data-voffset="['500','520','500','480']" 
                                   data-lineheight="['none','none','none','none']" 
                                   data-width="['300','300','300','300']"
                                   data-height="['none','none','none','none']"
                                   data-whitespace="['normal','normal','normal','normal']" 
                                   data-type="text" data-responsive_offset="on"
                                   data-frames='[ 
                                           {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                           {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                           ]' 
                                   data-textAlign="['left','left','left','left']" 
                                   data-paddingtop="[0,0,0,0]"
                                   data-paddingright="[0,0,0,0]" 
                                   data-paddingbottom="[0,0,0,0]" 
                                   data-paddingleft="[0,0,0,0]"
                                   style={{z_index:"100", text_transform:"uppercase"}}>
                                   <a href="about-1.html" className="site-button-secondry btn-effect">More About</a>
                               </div>
   
                           </li>                                                                                            
   
                            
                       </ul>
                       <div className="tp-bannertimer tp-bottom" style={{visibility: "hidden !important"}}></div>	
                       
                       <div className="multi-line-animation">
                           <div className="multi-line-one"><div className="animation-block1 bounce-1"></div></div>
                           <div className="multi-line-two"><div className="animation-block2 bounce-2"></div></div>
                           <div className="multi-line-three"><div className="animation-block1 bounce-1"></div></div>
                           <div className="multi-line-four"><div className="animation-block2 bounce-2"></div></div>
                       </div>                     
                   </div>
                   
   
                    
               </div>

               <div className="section-full mobile-page-padding our-speci_wrap bg-white  p-t80 p-b30 bg-repeat square_shape1" style={{background_image:"url(images/background/bg-5.png)"}}>
                   <div className="container">
        
                       <div className="section-content">
                           <div className="row">
                               <div className="col-xl-3 col-lg-4 col-md-6  m-b30">
                               
                                   <div className="image-effect-one hover-shadow">
                                       <img src="images/pic1.jpg" alt="" />
                                       <div className="figcaption">
                                           <h4>Construction</h4>
                                           <p>Engineering your dreams with us.</p>
                                           <a href="project-detail.html"><i className="link-plus site-bg-primary"></i></a>
                                       </div>
                                       
                                       
                                   </div>
                                                                   
                               </div>
                               <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                               
                                   <div className="image-effect-one hover-shadow">
                                       <img src="images/pic2.jpg" alt="" />
                                       <div className="figcaption">
                                           <h4>Architecture</h4>
                                           <p>Life is Architecture.</p>
                                           <a href="project-detail.html"><i className="link-plus site-bg-primary"></i></a>
                                       </div>
                                    
                                   </div>                                                            
                               
                               </div>
                               <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                               
                                   <div className="image-effect-one hover-shadow">
                                       <img src="images/pic3.jpg" alt="" />
                                       <div className="figcaption site-bg-dark">
                                           <h4>Renovation</h4>
                                           <p>Dazzling Design</p>
                                            <a href="project-detail.html"><i className="link-plus site-bg-primary"></i></a>
                                       </div>
                                      
                                   </div>
                                                                 
                               </div>
                               
                               <div className="col-xl-3 col-lg-12 col-md-6 m-b30">
                               
                                   <div className="mt-box our-speciallization-content">
                                       <h3 className="m-t0"><span className="font_weight-100">Building</span> <br/>It better in concrete.</h3>
                                       <p>When it comes to your house, don’t mess with the rest, trust the best. Making your vision come true, that is what we do.</p>
                                       <a href="about-1.html" className="site-button btn-effect">View All</a>
                                   </div> 
                                                                 
                               </div>                            
                           </div>
                       </div>
                   </div>
                   <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
                       <strong>Welcome</strong>
                   </div>                
                </div>   

               <div className="section-full  mobile-page-padding p-t80 p-b30 site-bg-dark bg-repeat square_shape2 bg-moving" style={{background_image:"url(images/background/bg-6.png)"}}>
                   <div className="container">
            
                       <div className="section-head">
                           <div className="mt-separator-outer separator-center">
                               <div className="mt-separator">
                                   <h2 className="text-white text-uppercase sep-line-one "><span className="font_weight-300 site-text-primary">About</span> Company</h2>
                               </div>
                           </div>
                       </div>                   
              
   
                           <div className="section-content">
                               <div className="row">
                                   <div className="col-lg-9 col-md-12">
                                          <div className="owl-carousel about-home owl-btn-vertical-center">
                            
                                           <div className="item ">
                                               <div className="mt-img-effect zoom-slow">
                                                   <a href="about-1.html"><img src="images/gallery/pic1.jpg" alt=""/></a>
                                              </div>
                                           </div>
                                     
                                           <div className="item ">
                                               <div className="mt-img-effect zoom-slow">
                                                   <a href="about-1.html"><img src="images/gallery/pic8.jpg" alt=""/></a>
                                              </div>
                                           </div>
                       
                                           <div className="item ">
                                               <div className="mt-img-effect zoom-slow">
                                                   <a href="about-1.html"><img src="images/gallery/pic9.jpg" alt=""/></a>
                                              </div>
                                           </div>
                              
                                           <div className="item ">
                                               <div className="mt-img-effect zoom-slow">
                                                   <a href="about-1.html"><img src="images/gallery/pic6.jpg" alt=""/></a>
                                              </div>
                                           </div>
                                   
                                           <div className="item ">
                                               <div className="mt-img-effect zoom-slow">
                                                   <a href="about-1.html"><img src="images/gallery/pic2.jpg" alt=""/></a>
                                              </div>
                                           </div>                                                                                                                                                                
                                      </div>
                                      </div>
                                   
                                   <div className="col-lg-3 col-md-12">
                                       <div className="about-home-right bg-white p-a30">
                                           <h3 className="m-t0"><span className="font_weight-100">Committed</span> to superior quality and  results.</h3>
                                           <p><strong>Contrary to popular belief, lorem Ipsum is not simply text. It has roots in a piece of classNameical Latin literature from 45 BC.</strong></p>
                                           <p>There are many variations passages available, but the majority have suffered alteration in or some form, by inject humour, or randomised words which don't look slightly believable. </p>
                                           <div className="text-right">
                                               <a href="about-1.html" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                           </div>                                                    
                                       </div>
                                   </div>
                               </div>
                          </div>
                    </div>
                   <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                       <strong>About</strong>
                   </div>                
               </div>   
      
               <div className="section-full mobile-page-padding p-t80 p-b50 bg-white our-valu-wrap">
                   <div className="container">
   
                           <div className="section-content">
                               <div className="row">
                                   <div className="col-lg-4 col-md-12">
                               
                                       <div className="section-head">
                                           <div className="mt-separator-outer separator-left">
                                               <div className="mt-separator">
                                                   <h2 className="text-uppercase sep-line-one "><span className="font_weight-300 site-text-primary">Our</span> Value</h2>
                                               </div>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                           </div>
                                       </div>                   
                                     
                                       <div className="author-info p-t20">
                                       
                                           <div className="author-signature">
                                               <img src="images/Signature%2bBlack.png" alt="Signature" width="150"/>
                                           </div>
                                           <div className="author-name">
                                               <h4 className="m-t0">David Houkr</h4>
                                               <p>Architect & Founder</p>
                                           </div>
                                       </div>                                  
                                       <div className="video-section-full bg-no-repeat bg-cover overlay-wraper" style={{background_image:"url(images/video-bg.jpg)"}}>
                                           <div className="overlay-main bg-black opacity-07"></div>
                                           <div className="video-section-inner">
                                               <div className="video-section-content">
                                               <div className="video-section-left">
                                                    <a href="https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" className="mfp-video play-now">
                                                       <i className="icon fa fa-play"></i>
                                                       <span className="ripple"></span>
                                                   </a>  
                                               </div>
                                               <div className="video-section-right">
                                                   <a href="https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" className="mfp-video font_weight-600 text-uppercase">Video Presentation</a>
                                               </div>
                                           </div> 
                                           </div>  
                                       </div> 
                                                                                                               
                                      </div>
                                   <div className="col-lg-3 col-md-6">
                                   
                                       <div className="mt-count m-b30 text-white mt-icon-box-wraper center  site-bg-dark p-a20">
                                           <div className="counter font-30 font_weight-800 m-b15 site-text-primary">450</div>
                                           <h4 className="m-tb0">Active Experts</h4>
                                       </div> 
                                       <div className="mt-count m-b30 text-white mt-icon-box-wraper center  site-bg-dark p-a20">
                                           <div className="counter font-30 font_weight-800 m-b15  site-text-primary">670</div>
                                           <h4 className="m-tb0">Satisfied Clients</h4>
                                       </div>
                                       <div className="mt-count m-b30 text-white mt-icon-box-wraper center  site-bg-dark p-a20">
                                           <div className="counter font-30 font_weight-800 m-b15 site-text-primary">1500</div>
                                           <h4 className="m-tb0">Project Complete</h4>
                                       </div>                                                                                                       
                                   </div>
                                   <div className="col-lg-5 col-md-6">
                                       
                                       <div className="our-exp">
                                           <div className="mt-box">
                                               <h3 className="m-t0"><span className="font_weight-100"> We have</span><span className="site-text-primary"> 15 years</span> experience in construction</h3>
                                           </div>
       
                                           <span className="progressText text-black">Architecher</span>
                                           <div className="progress m-b30 m-t10">
                                               <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{width: "85%", aria_valuenow:"85" ,aria_valuemin:"0", aria_valuemax:"100"}}>
                                                   <span>85%</span>
                                               </div>
                                           </div> 
       
                                           <span className="progressText text-black">Construction</span>
                                           <div className="progress m-b30 m-t10">
                                               <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{width: "78%", aria_valuenow:"78", aria_valuemin:"0" ,aria_valuemax:"100"}}><span>78%</span></div>
                                           </div>
                                           
                                           <span className="progressText text-black">Interior</span>
                                           <div className="progress m-b30 m-t10">
                                               <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{width: "65%", aria_valuenow:"65", aria_valuemin:"0" ,aria_valuemax:"100"}}><span>65%</span></div>
                                           </div> 
                                           
                                           <span className="progressText text-black">Building</span>
                                           <div className="progress m-b30 m-t10">
                                               <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{width: "78%" , aria_valuenow:"78", aria_valuemin:"0", aria_valuemax:"100"}}><span>78%</span></div>
                                           </div>
                                           
                                           <span className="progressText text-black">Commercial</span>
                                           <div className="progress m-b30 m-t10">
                                               <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{width: "65%" , aria_valuenow:"65", aria_valuemin:"0", aria_valuemax:"100"}}><span>95%</span></div>
                                           </div> 
                                   
                                       </div>
                                                                               
                                   </div>
                                   
                               </div>
                          </div>
                    </div>
               </div>   
               
               

               <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{background_image:"url(images/left-men.png), url(images/background/bg-4.png)" }}>
                   <div className="section-content">
                       <div className="container">
               
                           <div className="section-head"> 
                               <div className="mt-separator-outer separator-center">
                                   <div className="mt-separator">
                                       <h2 className="text-uppercase sep-line-one "><span className="font_weight-300 site-text-primary">Our</span> Mission</h2>
                                   </div>
                               </div>
                           </div>                  
                   
                           
                           <div className="row">
                               <div className="col-lg-4 col-md-6">
                                   <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{background_image:"url(images/background/bg-site.png)"}}>
                                       <h3 className="m-t0"><span className="font_weight-100"> Site Areas</span><br/> what we serve</h3>
                                       <p>lorem Ipsum available, but the majority have suffered alteration in some form, by ious versi ons have evolved over the years, sometimes by accident</p>
                                       <ul className="list-angle-right anchor-line">
                                           <li><a href="services.html">Construction Management</a></li>
                                           <li><a href="services.html">Pre Construction Services</a></li>
                                           <li><a href="services.html">Contract Administration</a></li>
                                           <li><a href="services.html">Implementation</a></li>
                                           <li><a href="services.html">Leed consultation</a></li>
                                       </ul>
                                       <div className="text-right">
                                           <a href="about-1.html" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                       </div>
                                   </div>
                               </div>
                               
                               <div className="col-lg-4 col-md-6">
                                   <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{background_image:"url(images/mission.jpg)"}}></div>
                               </div>
                               
                               <div className="col-lg-4 col-md-12">
                                   <div className="contact-home1-left site-bg-dark p-a30 m-b0">
                                       <h3 className="text-white m-t0"><span className="font_weight-100">Get In</span> Touch</h3>
                                       <form className="cons-contact-form2 form-transparent" method="post" action="https://theme7x.com/shapen/form-handler2.php">
                                         
                                           <div className="input input-animate">
                                               <label for="name">Name</label>
                                               <input type="text" name="username"  id="name" required/>
                                               <span className="spin"></span>
                                           </div>
                                           
                                           <div className="input input-animate">
                                               <label for="email">Email</label>
                                               <input type="email" name="email"   id="email" required/>
                                               <span className="spin"></span>
                                           </div> 
                                           
                                           <div className="input input-animate">
                                               <label for="Phone">Phone</label>
                                               <input type="text" name="phone"  id="Phone" required/>
                                               <span className="spin"></span>
                                           </div>   
                                           
                                           <div className="input input-animate">
                                               <label for="message">Textarea</label>
                                               <textarea name="message"  id="message" required></textarea>
                                               <span className="spin"></span>
                                           </div>
                                           
                                           <div className="text-center p-t10">
                                               <button type="submit" className="site-button btn-effect ">
                                                 Submit Now
                                               </button>
                                           </div>    
                                       </form>
                                   </div>
                               </div>                            
                               
                           </div>
                       </div>
                   </div>
                   <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                       <strong>Mission</strong>
                   </div>                    
               </div>   
         
               <div className="section-full mobile-page-padding our-service-wrap  p-b50  square_shape2">
                   <div className="section-content">
                       <div className="Service-half-top p-t80  site-bg-dark bg-moving" style={{background_image:"url(images/background/bg-6.png)"}} >
                           <div className="container">
                     
                               <div className="section-head text-white"> 
                                   <div className="mt-separator-outer separator-left">
                                       <div className="mt-separator">
                                           <h2 className="text-white text-uppercase sep-line-one "><span className="font_weight-300 site-text-primary">Our</span> Services</h2>
                                       </div>
                                   </div>
                                   <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</h3>
                               </div>                  
                        
                           </div>
                       </div>
                       <div className="services-half-bottom">
                           <div className="container">
                               <div className="row">
                                   <div className="col-lg-3 col-md-6">
                                       
                                       <div className="mt-icon-box-wraper m-b30">
                                           <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                               <span className="icon-count-number">1</span>
                                               <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                                   <span className="icon-cell"><img src="images/icon/crane-1.png" alt=""/></span>
                                               </div>
                                               <div className="icon-content">
                                                   <h4 className="mt-tilte m-b25">Building <br/>Construction</h4>
                                                   <p>lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.</p>
                                                   <a href="services.html" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                               </div>
                                           </div>
                                       </div>                            	
                                       
                                   </div>
                                   
                                   <div className="col-lg-3 col-md-6">
                                       
                                       <div className="mt-icon-box-wraper m-b30">
                                           <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                               <span className="icon-count-number">2</span>
                                               <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                                   <span className="icon-cell"><img src="images/icon/renovation.png" alt=""/></span>
                                               </div>
                                               <div className="icon-content">
                                                   <h4 className="mt-tilte m-b25">Building <br/>Renovation</h4>
                                                   <p>lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.</p>
                                                   <a href="services.html" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                               </div>
                                           </div>
                                       </div>                            	
                                       
                                   </div>
   
                                   <div className="col-lg-3 col-md-6">
                                       
                                       <div className="mt-icon-box-wraper m-b30">
                                           <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                               <span className="icon-count-number">3</span>
                                               <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                                   <span className="icon-cell"><img src="images/icon/toolbox.png" alt=""/></span>
                                               </div>
                                               <div className="icon-content">
                                                   <h4 className="mt-tilte m-b25">Building <br/>Maintenance</h4>
                                                   <p>lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.</p>
                                                   <a href="services.html" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                               </div>
                                           </div>
                                       </div>                            	
                                       
                                   </div>
   
                                   <div className="col-lg-3 col-md-6">
                                       
                                       <div className="mt-icon-box-wraper m-b30">
                                           <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                               <span className="icon-count-number">4</span>
                                               <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                                                   <span className="icon-cell"><img src="images/icon/compass.png" alt=""/></span>
                                               </div>
                                               <div className="icon-content">
                                                   <h4 className="mt-tilte m-b25">Architecture<br/>Design</h4>
                                                   <p>lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.</p>
                                                   <a href="services.html" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a>
                                               </div>
                                           </div>
                                       </div>                            	
                                       
                                   </div>										
                                                                                            
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                       <strong>Services</strong>
                   </div>                    
               </div>   
          
               <div className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center" style={{background_image:"url(images/background/bg-1.jpg)"}}>
                   <div className="overlay-main site-bg-primary opacity-07"></div>
                   <div className="container">
    
                           <div className="section-content">
                               <div className="call-us-section text-center">
                                   <h4 className="m-b15">Let's work together</h4>
                                   <h2 className="call-us-number m-b15 m-b0">(+291)-456-789-1234</h2>
                                   <h4 className="call-us-address m-t0 m-b20">Street 4 ,45 New york City</h4>
                                   <a href="contact-1.html" className="site-button-secondry btn-effect site-bg-dark">Contact Us</a>
                               </div>
                           </div>
                       
                   </div>
               </div>   
       
               <div className="section-full mobile-page-padding our-project-wrap p-t80 p-b30 square_shape2" >
                   <div className="container">
                 
                       <div className="section-head">
                           <div className="mt-separator-outer separator-left">
                               <div className="mt-separator">
                                   <h2 className="text-uppercase sep-line-one "><span className="font_weight-300 site-text-primary">Our</span> Project</h2>
                               </div>
                           </div>
                       </div>                   
          
   
                           <div className="section-content">
   
                                <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
                           
                                   <div className="stamp masonry-item col-lg-3 col-md-6 m-b30">
                                       <div className="bg-gray p-a30">
                                           <div className="filter-wrap">    
                                                  <ul className="filter-navigation masonry-filter text-uppercase">
                                                   <li className="active"><a data-filter="*" data-hover="All" href="#">All</a></li>
                                                   <li><a data-filter=".cat-1" data-hover="Commercial" href="javascript:;">Commercial</a></li>
                                                   <li><a data-filter=".cat-4" data-hover="Education" href="javascript:;">Education</a></li>
                                                   <li><a data-filter=".cat-2" data-hover="Hospital" href="javascript:;">Hospital </a></li>
                                                   <li><a data-filter=".cat-3" data-hover="Residentia" href="javascript:;">Residentia</a></li>
                                                   <li><a data-filter=".cat-5" data-hover="Office" href="javascript:;">Office</a></li>
                                                   <li><a data-filter=".cat-6" data-hover="Reconstruction" href="javascript:;" >Reconstruction </a></li>
                                               </ul>
                                           </div>                          
                                       </div>            
                                   </div>
                           
                                   <div className="masonry-item  cat-2 col-lg-3 col-md-6 m-b30">
                                       <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/portrait/pic1.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Chair Furniture</h4>
                                               <p className="m-b0">Muscat, Sultanate of Oman</p>      
                                           </div>
                                           <a href="project-detail.html"></a>                                    
                                       </div>
                                   </div>
                                   
                             
                                   <div className="masonry-item  cat-2 col-lg-3 col-md-6 m-b30">
                                       <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/portrait/pic2.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Furniture</h4>
                                               <p className="m-b0">North House</p>      
                                           </div>
                                           <a href="project-detail.html"></a>                                 
                                       </div>
                                   </div>
                               
                                   <div className="masonry-item  cat-6 col-lg-3 col-md-6 m-b30">
                                       <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/portrait/pic3.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Living room</h4>
                                               <p className="m-b0">Aqaba, Jordan</p>      
                                           </div> 
                                           <a href="project-detail.html"></a>                                
                                       </div>
                                   </div>
                          
                                   <div className="masonry-item  cat-6 col-lg-3 col-md-6 m-b30">
                                     <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/portrait/pic4.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Dream Workspace</h4>
                                               <p className="m-b0">Perth, Australia </p>      
                                           </div> 
                                           <a href="project-detail.html"></a>                                
                                       </div>
                                   </div>
                                   
                        
                                   <div className="masonry-item  cat-3 col-lg-3 col-md-6 m-b30">
                                       <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/portrait/pic5.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Decore</h4>
                                               <p className="m-b0">Aqaba, Jordan</p>      
                                           </div>
                                           <a href="project-detail.html"></a>                                   
                                       </div>
                                   </div>
                                   
                        
                                   <div className="masonry-item  cat-3 col-lg-3 col-md-6 m-b30">
                                       <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/portrait/pic6.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Modern Decoration</h4>
                                               <p className="m-b0">Muscat, Sultanate of Oman</p>      
                                           </div>
                                           <a href="project-detail.html"></a>                                   
                                       </div>
                                   </div>
                                   
                           
                                   <div className="masonry-item  cat-1 col-lg-3 col-md-6 m-b30">
                                       <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/portrait/pic7.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Bathroom</h4>
                                               <p className="m-b0">North House</p>      
                                           </div>
                                           <a href="project-detail.html"></a>                                  
                                       </div>
                                   </div>
                          
                                   <div className="masonry-item  cat-6 col-lg-6 col-md-6 m-b30">
                                       <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/pic-l-5.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Lamp decoration</h4>
                                               <p className="m-b0">Aqaba, Jordan</p>      
                                           </div>
                                           <a href="project-detail.html"></a>                                  
                                       </div>
                                   </div> 
                                                                                   
                                   
                                   <div className="masonry-item  cat-5 col-lg-3 col-md-6 m-b30">
                                       <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/pic-1.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Building house</h4>
                                               <p className="m-b0">Ultanate of Oman </p>      
                                           </div> 
                                           <a href="project-detail.html"></a>                                  
                                       </div>
                                   </div>
                                   
                            
                                   <div className="masonry-item  cat-4 col-lg-3 col-md-6 m-b30">
                                       <div className="mt-box   image-hover-block">
                                           <div className="mt-thum-bx">
                                               <img src="images/projects/pic-2.jpg" alt=""/>
                                           </div>
                                           <div className="mt-info  p-t20 text-white">
                                               <h4 className="mt-tilte m-b10 m-t0">Spa residence</h4>
                                               <p className="m-b0">Perth, Australia </p>      
                                           </div>
                                           <a href="project-detail.html"></a>                                  
                                       </div>
                                   </div>
                                   
                                                                
                                </div>
   
                           </div>
                       
                   </div>
                   <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                       <strong>Projects</strong>
                   </div>                
               </div>   
     
               
          
               <div className="section-full mobile-page-padding latest-blog-wrap p-t80 p-b30 square_shape1" style={{background_image:"url(images/background/bg5.jpg)"}}>
   
                   <div className="container">
   
                            <div className="section-head ">
                           <div className="mt-separator-outer separator-center">
                               <div className="mt-separator">
                                   <h2 className="text-white text-uppercase sep-line-one "><span className="font_weight-300 site-text-primary" >Latest</span> Blog</h2>
                               </div>
                           </div>
                       </div>                   
         
                       <div className="section-content">
                           <div className="row d-flex justify-content-center">
                               <div className="col-lg-4 col-md-6">
                                   <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                                       <div className="mt-post-media mt-img-overlay7">
                                           <a href="javascript:;"><img src="images/blog/latest-blog/pic1.jpg" alt=""/></a>
                                       </div>
                                       <div className="mt-post-info p-a30">
                                           <div className="post-overlay-position">
                                               <div className="mt-post-meta ">
                                                   <ul>
                                                       <li className="post-date"><strong className="site-text-primary">14</strong> <span>April 2023</span></li>
                                                       <li className="post-author">By <a href="javascript:;">Admin</a> </li>
                                                       <li className="post-comment"><a href="javascript:;">2 comment</a> </li>
                                                   </ul>
                                               </div>                                        
                                               <div className="mt-post-title ">
                                                   <h4 className="post-title m-b0">Commercial design for project</h4>
                                               </div>
                                               <div className="mt-post-text">
                                                   <p>Which is the same as saying through shrinking from toil and pain.</p> 
                                               </div>
                                               <div className="readmore-line">
                                                   <span><a href="blog-grid.html" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a></span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-4 col-md-6">
                                   <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                                       <div className="mt-post-media mt-img-overlay7">
                                           <a href="javascript:;"><img src="images/blog/latest-blog/pic2.jpg" alt=""/></a>
                                       </div>                                	
                                       <div className="mt-post-info p-a30">
                                           <div className="post-overlay-position">
                                               <div className="mt-post-meta ">
                                                   <ul>
                                                       <li className="post-date"><strong className="site-text-primary">16</strong> <span>Feb 2023</span></li>
                                                       <li className="post-author">By <a href="javascript:;">Admin</a> </li>
                                                       <li className="post-comment"><a href="javascript:;">2 comment</a> </li>
                                                   </ul>
                                               </div>                                        
                                               <div className="mt-post-title ">
                                                   <h4 className="post-title m-b0">Our interior design prediction</h4>
                                               </div>
                                               <div className="mt-post-text">
                                                   <p>Today we can tell you, thanks to your passion, hard work creativity, and expertise.</p> 
                                               </div>
                                               <div className="readmore-line">
                                                   
                                                   <span><a href="blog-grid.html" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a></span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div> 
                               <div className="col-lg-4 col-md-6">
                                   <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                                       <div className="mt-post-media mt-img-overlay7">
                                           <a href="javascript:;"><img src="images/blog/latest-blog/pic3.jpg" alt=""/></a>
                                       </div>
                                       <div className="mt-post-info p-a30">
                                           <div className="post-overlay-position">
                                               <div className="mt-post-meta ">
                                                   <ul>
                                                       <li className="post-date"><strong className="site-text-primary">18</strong> <span>Jan 2023</span></li>
                                                       <li className="post-author">By <a href="javascript:;">Admin</a> </li>
                                                       <li className="post-comment"><a href="javascript:;">2 comment</a> </li>
                                                   </ul>
                                               </div>                                        
                                               <div className="mt-post-title ">
                                                   <h4 className="post-title m-b0">Low cost interior designing ideas</h4>
                                               </div>
                                               <div className="mt-post-text">
                                                   <p>Every pleasure is to be welcomed every pain avoided. in certain circumstances.</p> 
                                               </div>
                                               <div className="readmore-line">
                                                   <span><a href="blog-grid.html" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation"></i></a></span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>                                                                                                                                                                                         
                           </div>
                       </div>
                   </div>
                   <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
                       <strong>Blog</strong>
                   </div>                
               </div>   

               <div className="section-full mobile-page-padding p-t80 p-b50 square_shape2 bg-cover" style={{background_image:"url(images/background/bg6.jpg)"}}>
                   <div className="container">
                       <div className="section-content">
                           
              
                           <div className="section-head">
                               <div className="mt-separator-outer separator-center">
                                   <div className="mt-separator">
                                       <h2 className="text-uppercase sep-line-one "><span className="font_weight-300 site-text-primary">Client</span> Testimonials</h2>
                                   </div>
                               </div>
                           </div>                   
     
                            <div className="owl-carousel testimonial-home">
                               <div className="item">
                                   <div className="testimonial-2 m-a30 hover-animation-1">
                                       <div className=" block-shadow bg-white p-a30">
                                           <div className="testimonial-detail clearfix">
                                               <div className="testimonial-pic radius shadow scale-in-center"><img src="images/testimonials/pic1.jpg" width="100" height="100" alt=""/></div>
                                               <h4 className="testimonial-name m-b5">Shelly Johnson -</h4>
                                               <span className="testimonial-position">Business Person</span>
                                           </div>                                    
                                           <div className="testimonial-text">
                                               <span className="fa fa-quote-right"></span>
                                               <p> Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="item">
                                   <div className="testimonial-2 m-a30  hover-animation-1">
                                       <div className=" block-shadow bg-white p-a30">
                                           <div className="testimonial-detail clearfix">
                                               <div className="testimonial-pic radius shadow scale-in-center"><img src="images/testimonials/pic2.jpg" width="100" height="100" alt=""/></div>
                                               <h4 className="testimonial-name m-b5">Cuthbert Brain -</h4>
                                               <span className="testimonial-position">Contractor</span>
                                           </div>                                    
                                           <div className="testimonial-text">
                                               <span className="fa fa-quote-right"></span>
                                               <p>The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="item">
                                   <div className="testimonial-2 m-a30  hover-animation-1">
                                       <div className=" block-shadow bg-white p-a30">
                                           <div className="testimonial-detail clearfix">
                                               <div className="testimonial-pic radius shadow scale-in-center"><img src="images/testimonials/pic3.jpg" width="100" height="100" alt=""/></div>
                                               <h4 className="testimonial-name m-b5">Cathrine Wagner -</h4>
                                               <span className="testimonial-position">Builder</span>
                                           </div>                                    
                                           <div className="testimonial-text">
                                               <span className="fa fa-quote-right"></span>
                                               <p>The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="item">
                                   <div className="testimonial-2 m-a30  hover-animation-1">
                                       <div className=" block-shadow bg-white p-a30">
                                           <div className="testimonial-detail clearfix">
                                               <div className="testimonial-pic radius shadow scale-in-center"><img src="images/testimonials/pic4.jpg" width="100" height="100" alt=""/></div>
                                               <h4 className="testimonial-name m-b5">John Doe -</h4>
                                               <span className="testimonial-position">Business Person</span>
                                           </div>                                    
                                           <div className="testimonial-text">
                                               <span className="fa fa-quote-right"></span>
                                               <p> Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="item">
                                   <div className="testimonial-2 m-a30  hover-animation-1">
                                       <div className=" block-shadow bg-white p-a30">
                                           <div className="testimonial-detail clearfix">
                                               <div className="testimonial-pic radius shadow scale-in-center"><img src="images/testimonials/pic5.jpg" width="100" height="100" alt=""/></div>
                                               <h4 className="testimonial-name m-b5">Cuthbert Brain -</h4>
                                               <span className="testimonial-position">Business Person</span>
                                           </div>                                    
                                           <div className="testimonial-text">
                                               <span className="fa fa-quote-right"></span>
                                               <p>The template itself is very ext ended. excellent customer support!.  simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                                                                                                                                             
                           </div>
                           
                       </div>
                   </div>  
                   <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                       <strong>Clients</strong>
                   </div> 
               </div> 
                                 
           </div>
  
           <footer className="site-footer footer-large  footer-dark	footer-wide">
               <div className="container">
                   <div className="p-a30 call-to-action-wrap bg-no-repeat bg-center site-bg-primary" style={{background_image:"url(images/background/bg-site.png)"}}>
                       <div className="row">
                           <div className="col-lg-8 col-md-6">
                               <div className="call-to-action-left text-black">
                                   <h4 className="text-uppercase m-b10 m-t0">Subscribe to our newsletter!</h4>
                                   <span>Never Miss Anything From Construx By Signing Up To Our Newsletter.</span>
                               </div>
                           </div>
                           
                           <div className="col-lg-4  col-md-6">
                               <div className="call-to-action-right">
                                   <div className="widget_newsletter">
                                       <div className="newsletter-bx">
                                           <form role="search" method="post">
                                               <div className="input-group">
                                                   <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text"/>
                                                   <span className="input-group-btn">
                                                       <button type="submit" className="site-button"><i className="fa fa-paper-plane-o"></i></button>
                                                   </span>
                                               </div>
                                           </form>
                                       </div>
                                   </div>                                                           
                               </div>
                           </div>
                       </div>
                    </div>
               </div>            

               <div className="footer-top overlay-wraper">
                   <div className="overlay-main"></div>
                   <div className="container">
                       <div className="row">
                    
                           <div className="col-lg-3 col-md-6 col-sm-6">  
                               <div className="widget widget_about">
                           <h4 className="widget-title">About Company</h4>
                                   <div className="logo-footer clearfix p-b15">
                                       <a href="index.html"><img src="images/logo-dark.png" alt=""/></a>
                                   </div>
                                   <p className="max-w400">Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>                                
                                   
                                   <ul className="social-icons  mt-social-links">
                                       <li><a href="https://www.google.com/" className="fa fa-google"></a></li>
                                       <li><a href="https://rss.com/" className="fa fa-rss"></a></li>
                                       <li><a href="https://www.facebook.com/" className="fa fa-facebook"></a></li>
                                       <li><a href="https://twitter.com/" className="fa fa-twitter"></a></li>
                                       <li><a href="https://in.linkedin.com/" className="fa fa-linkedin"></a></li>
                                   </ul>                                     
                               </div>
                           </div> 
                           
        
                           <div className="col-lg-3 col-md-6 col-sm-6">
                               <div className="widget widget_address_outer">
                                   <h4 className="widget-title">Contact Us</h4>
                                   <ul className="widget_address">
                                       <li>34/7 Liverpool Street, Suite 636, London, United Kingdom</li>
                                       <li>7xthemedemo@gmail.com</li>
                                       <li>(+298) 012-3456-789</li>
                                       <li>(+298) 146-6543-480</li>
                                   </ul>
                              
                               </div>                                              	
                           </div>                          
                           
                       
                           <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                               <div className="widget widget_services inline-links">
                                   <h4 className="widget-title">Useful links</h4>
                                   <ul>
                                       <li><a href="about-1.html">About</a></li>
                                       <li><a href="project-grid.html">Projects</a></li>
                                       <li><a href="blog-grid.html">Blog</a></li>
                                       <li><a href="contact-1.html">Contact Us</a></li>
                                   </ul>
                               </div>                           
                           </div>
                           
                 
                           <div className="col-lg-3 col-md-6 col-sm-6">
                               <div className="widget recent-posts-entry-date">
                                   <h4 className="widget-title">Resent Post</h4>
                                   <div className="widget-post-bx">
                                       <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                           <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                               <strong className="p-date">24</strong>
                                               <span className="p-month">April</span>
                                               <span className="p-year">2023</span>
                                           </div>
                                           <div className="mt-post-info">
                                               <div className="mt-post-header">
                                                   <h6 className="post-title"><a href="blog-single.html">On these beams, we’re building dreams.</a></h6>
                                               </div>
                                               <div className="mt-post-meta">
                                                   <ul>
                                                       <li className="post-author"><i className="fa fa-user"></i>By Admin</li>
                                                       <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                           <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                               <strong className="p-date">30</strong>
                                               <span className="p-month">May</span>
                                               <span className="p-year">2023</span>
                                           </div>
                                           <div className="mt-post-info">
                                               <div className="mt-post-header">
                                                   <h6 className="post-title"><a href="blog-single.html">We’ll be a sensation for you next renovation</a></h6>
                                               </div>
                                               <div className="mt-post-meta">
                                                   <ul>
                                                       <li className="post-author"><i className="fa fa-user"></i>By Admin</li>
                                                       <li className="post-comment"><i className="fa fa-comments"></i> 29</li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                       
                                   </div>
                               </div>                          
                           </div>
                    
   
                       </div>
                   </div>  
               </div>
   
               <div className="footer-bottom overlay-wraper">
                   <div className="overlay-main"></div>
                   <div className="container">
                       <div className="row">
                           <div className="mt-footer-bot-center">
                               <span className="copyrights-text">© 2023 Your Company. Designed By 7xtheme.</span>
                           </div>
                       </div>
                   </div>
               </div>
           </footer>
       
           <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>
                 
       </div>
    

   <div className="loading-area">
       <div className="loading-box"></div>
       <div className="loading-pic">
           <div className="cssload-loader">Loading</div>
       </div>
   </div>

   <div className="styleswitcher">
   
       <div className="switcher-btn-bx">
           <a className="switch-btn">
               <span className="fa fa-cog fa-spin"></span>
           </a>
       </div>
       
       <div className="styleswitcher-inner">
       
           <h6 className="switcher-title">Color Skin</h6>
           <ul className="color-skins">
               <li><a className="theme-skin skin-1" href="indexa39b.html?theme=css/skin/skin-1" title="default Theme"></a></li>
               <li><a className="theme-skin skin-2" href="index61e7.html?theme=css/skin/skin-2" title="pink Theme"></a></li>
               <li><a className="theme-skin skin-3" href="indexcce5.html?theme=css/skin/skin-3" title="sky Theme"></a></li>
               <li><a className="theme-skin skin-4" href="index13f7.html?theme=css/skin/skin-4" title="green Theme"></a></li>
               <li><a className="theme-skin skin-5" href="index19a6.html?theme=css/skin/skin-5" title="red Theme"></a></li>
               <li><a className="theme-skin skin-6" href="indexfe5c.html?theme=css/skin/skin-6" title="orange Theme"></a></li>
               <li><a className="theme-skin skin-7" href="indexab47.html?theme=css/skin/skin-7" title="purple Theme"></a></li>
               <li><a className="theme-skin skin-8" href="index5f8d.html?theme=css/skin/skin-8" title="blue Theme"></a></li>
           </ul>   
           
       </div>    
   </div>
    </>
  )
}
