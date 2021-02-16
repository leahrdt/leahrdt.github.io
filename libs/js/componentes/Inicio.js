class Inicio {
    constructor({elemRoot, titulo=""}){
        this.elemRoot = elemRoot;
        this.titulo = titulo
        this.items = [];


        this.render();
    }
    
    render(){
        this.elemRoot.innerHTML = `

        
<div id="miCV">
    <section id="about" class="about-mf sect-pt4 route">
    <div class="conAbout container-md">
    <div class="row">
        <div class="col-sm-12">
        <div class="box-shadow-full">
            <div class="row">
            <div class="col-md-6">
                <div class="row">
                <div class="col-sm-6 col-md-5">
                    <div class="about-img">
                    <img data-aos="fade-in" id="mifoto" src="assets/img/foto.jpg" class="img-fluid rounded b-shadow-a" alt="">
                    </div>
                </div>
                <div id="misdatos" class="col-sm-6 col-md-7 ">
                    <div class="about-info">
                    <p data-aos="fade-in"><span class="title-s">Name: </span> <span>Leandro Fernandez Reinhardt</span></p>
                    <p data-aos="fade-in"><span class="title-s">Profile: </span> <span>Front End Developer</span></p>
                    <p data-aos="fade-in"><span class="title-s">Contact: </span> <span></span></p>
                    <p data-aos="fade-in"><span class="title-s">Email: </span> <span>fernandezreinhardt@gmail.com</span></p>
                    <p data-aos="fade-in" ><span class="title-s">Phone: </span> <span> 2392-536414</span></p>
                    </div>
                </div>
                </div>
                <div data-aos="fade-up" class="skill-mf">
                <h5 data-aos="fade-up" class="title-left">
                Preferences as a developer
                </h5>
                <span>HTML - CSS - JavaScript</span> <span class="pull-right">85%</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>REACT JS - REDUX</span> <span class="pull-right">75%</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>ANGULAR </span> <span class="pull-right">85%</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>NODE.JS</span> <span class="pull-right">65%</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                </div>
            </div>
            <div class="col-md-6" >
                <div class="about-me pt-4 pt-md-0">
                <div class="title-box-2">
                    <h5 data-aos="fade-up" class="title-left">
                    About me
                    </h5>
                </div>
                <p class="lead" data-aos="fade-up">
                I am a lover of web development, computing and technology, I like to be constantly updated in these fields. Regarding front-end development, it started as a hobby which little by little became part of my daily life since it is something that I enjoy a lot, both studying and developing. 
                </p>
                <p class="lead" data-aos="fade-up">
                I consider myself a restless person with regard to study, I like to constantly learn new things and be updating regarding the technologies that are about to come out
                
                </p>
                <p class="lead" data-aos="fade-up">
                In the workplace I consider myself a proactive person, with the ability to constantly adapt to different challenges.
                I highly value a good work environment and teamwork, since the constant exchange of knowledge helps us grow on a daily basis.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </section>
</div>

<div id="resume">
<!-- ======= Resume Section ======= -->
<section  class="resume">
  <div class="conRes container-md">

    <div class="section-title">
      <h1  data-aos="fade-right">Resume</h1>
    </div>

    <div class="row">
        <div class="col-lg-6" data-aos="fade-up">


        <h3 class="resume-title">Education</h3>
        <div class="resume-item">
            <h4>Full Stack Node.JS Developer</h4>
            <h5>2019 - 2021</h5>
            <p><em>Educacion It, CABA, Arg</em></p>
            <p>
            Career composed of 13 subjects. Focused on the front-end part with HTML CSS subjects and different levels of Javascript development (from basic to advanced level).
            It also provides basic and advanced knowledge with libraries such as bootstrap and material.
            From the knowledge of the back-end basic and advanced knowledge about Node.js and MongoDB are learned.
            </p>
        </div>
        <div class="resume-item" data-aos="fade-up">
            <h4>
            postgraduate degree in seismic reservoir characterization</h4>
            <h5>2019 - 2020</h5>
            <p><em>
            University of Astronomy and Geophysics, La Plata, Arg</em></p>
            <p>Learning of theoretical and practical knowledge on seismic inversion, with practices that included hanging of wells in time-depth and seismic inversion.</p>
        </div>
        <div class="resume-item" data-aos="fade-up">
        <h4>Specialist in hydrocarbon exploration and development</h4>
        <h5>2017 - 2019</h5>
        <p><em>University Of Natural Sciences And Museum, La Plata, Arg</em></p>
        <p>Theoretical, practical and methodological knowledge in hydrocarbon exploration and development, both from conventional and unconventional deposits. Learning about the generation and comprehensive training of projects, in their technical, operational, economic, legal, environmental and social aspects. Training for the development of unconventional resources and optimization of the production of mature conventional oil and gas fields.</p>
        </div>
        <div class="resume-item"  data-aos="fade-up">
        <h4>GEOLOGIST</h4>
        <h5>2010 - 2016</h5>
        <p><em>University Of Natural Sciences And Museum, La Plata, Arg</em></p>
        <p>Geology is a multidisciplinary career that include mathematical, physical and chemical knowledge, applied to different areas</p>
        </div>


        </div>



        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 class="resume-title">Professional Experience</h3>
        <div class="resume-item">
            <h4>Petrophysical Geologist</h4>
            <h5>2019 - Present</h5>
            <p><em>Geoprocesados, CABA, Arg </em></p>
            <ul>
            <li>• Deterministic and probabilistic petrophysical evaluations (multiminerals) in conventional and unconventional reservoirs. Electrofacies generation</li>
            <li>• Quality control of well data and laboratory data analysis. </li>
            <li>• Well log editing, depth adjustment, well log predictions.</li>
            <li>• Preparation of reports and presentation of work to clients.</li>
            <li>Main clients and projects:
            
</li>
<li>Panamerican Energy: Lindero Atravesado – Coiron Amargo – Aguada Pichana – Aguada del Castro</br>
            
Pemex: Cuenca Macuspana
</li>
            </ul>
        </div>
        <div class="resume-item" data-aos="fade-up">
          <h4>Administrative Secretary</h4>
          <h5>2018 - 2019</h5>
          <p><em>Faculty Of Natural Sciences And Museum, La Plata, Arg</em></p>
          <ul>
            <li>• Control and coordination of classes, support of software management and in the preparation of final works.</li>
            <li>• Telephone, web and reception service. Correspondence management.</li>
            <li>• Organization and filing documentation. Drafting documents.</li>
          </ul>
        </div>
        
      </div>
    </div>

  </div>
</section><!-- End Resume Section -->


</div>


<div id="blogPart">

<!-- ======= Blog Section ======= -->
    <section id="blog" class="blog-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12" data-aos="fade-up">
            <div class="title-box text-center">
              <h2   class="display-2">
                Portfolio
              </h2>
              <p   class="display-5">
                
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row" data-aos="fade-up">
          <div class="cartaPort col-md-4 " >
            <div class="card card-blog" data-aos="fade-up">
              <div class="card-img">
                <img src="assets/img/js.png" alt="" class="img-fluid">
              </div>
              <div class="card-body">
                <div class="card-category-box">

                </div>
                <h3 class="card-titlee">Javascript Projects</h3>
                <h4 class="card-title"><a href="https://leahrdt.github.io/miApp.html">This Web</a></h4>
              </div>
              <div class="card-footer">
                <div class="post-author">
                  <a href="#">
                    <img src="assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                    <span class="author">Leandro Fernandez</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div class="cartaPort col-md-4" >
            <div class="card card-blog" data-aos="fade-up">
              <div class="card-img">
                <img src="assets/img/react.png" alt="" class="img-fluid">
              </div>
              <div class="card-body">
                <div class="card-category-box">

                </div>
                <h3 class="card-titlee">React </h3>
                <h4 class="card-title"><a href="https://leahrdt.github.io/cv_app/">CV App</a></h4>
              </div>
              <div class="card-footer">
                <div class="post-author">
                  <a href="#">
                    <img src="assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                    <span class="author">Leandro Fernandez</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div class="cartaPort col-md-4" >
            <div class="card card-blog" data-aos="fade-up">
              <div class="card-img">
                <img src="assets/img/angular.png" alt="" class="img-fluid">
              </div>
              <div class="card-body">
                <div class="card-category-box">

                </div>
                <h3 class="card-titlee">Angular Projects</h3>
                <h4 class="card-title"><a href="https://leahrdt.github.io/Angular/home">Angular 11 Test</a></h4>
              </div>
              <div class="card-footer">
                <div class="post-author">
                  <a href="#">
                    <img src="assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                    <span class="author">Leandro Fernandez</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Blog Section -->
    </div>


</div>


        
`;
}
}