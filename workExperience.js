document.addEventListener("DOMContentLoaded", function() {
    const sofiDiv = document.getElementById('sofi-select');
    const schlumbergerDiv = document.getElementById('schlumberger-select');
    const iitDiv = document.getElementById('iit-select');
    const experienceInner = document.getElementById('experience-inner-id');
  
    function checkScreenSize(){
      // alert("asds");
      function updateContentMobile(divId) {
          // console.log('asd');
          experienceInner.innerHTML += `${divId}`;
      }
      function insertDiv(){
        experienceInner.innerHTML += '<div style="height:2.5rem;"><div class="line-wrapper3"><div class="line6"></div></div></div>';
      }
      function clearContent(divId) {
          // console.log('asd');
          experienceInner.innerHTML = '';
      }
      if(window.innerWidth <= 825){
        
        clearContent();
        updateContentMobile(sofiExperienceInnerMobile());
        insertDiv();
        updateContentMobile(slbExperienceInnerMobile());
        insertDiv();
        updateContentMobile(iitExperienceInnerMobile());
        insertDiv();
      }
      else{
        sofiDiv.classList.add('applle');
        schlumbergerDiv.classList.remove('applle');
        iitDiv.classList.remove('applle');

        const images = document.querySelectorAll('.right-icon');
        images.forEach(image => {
            image.parentNode.removeChild(image)
        });

        const newImg = document.createElement('img');
        newImg.classList.add('right-icon');
        newImg.setAttribute('loading', 'lazy');
        newImg.setAttribute('alt', '');
        newImg.setAttribute('src', './public/right.svg');
        sofiDiv.appendChild(newImg);


        updateContent(sofiExperienceInner());

        // Function to update content based on clicked div
        function updateContent(divId) {
          experienceInner.innerHTML = `${divId}`;
        }
      
        // Event listener for SoFi div
        sofiDiv.addEventListener('click', function(event) {
          sofiDiv.classList.add('applle');
          schlumbergerDiv.classList.remove('applle');
          iitDiv.classList.remove('applle');

          const images = document.querySelectorAll('.right-icon');
          images.forEach(image => {
              image.parentNode.removeChild(image)
          });

          const newImg = document.createElement('img');
          newImg.classList.add('right-icon');
          newImg.setAttribute('loading', 'lazy');
          newImg.setAttribute('alt', '');
          newImg.setAttribute('src', './public/right.svg');
          sofiDiv.appendChild(newImg);


          updateContent(sofiExperienceInner());
        });
      
        // Event listener for Schlumberger div
        schlumbergerDiv.addEventListener('click', function(event) {
          sofiDiv.classList.remove('applle');
          schlumbergerDiv.classList.add('applle');
          iitDiv.classList.remove('applle');
          const images = document.querySelectorAll('.right-icon');
          images.forEach(image => {
              image.parentNode.removeChild(image)
          });

          const newImg = document.createElement('img');
          newImg.classList.add('right-icon');
          newImg.setAttribute('loading', 'lazy');
          newImg.setAttribute('alt', '');
          newImg.setAttribute('src', './public/right.svg');
          schlumbergerDiv.appendChild(newImg);

          updateContent(slbExperienceInner());
        });
      
        // Event listener for IIT Bombay div
        iitDiv.addEventListener('click', function(event) {
          sofiDiv.classList.remove('applle');
          schlumbergerDiv.classList.remove('applle');
          iitDiv.classList.add('applle');

          const images = document.querySelectorAll('.right-icon');
          images.forEach(image => {
              image.parentNode.removeChild(image)
          });

          const newImg = document.createElement('img');
          newImg.classList.add('right-icon');
          newImg.setAttribute('loading', 'lazy');
          newImg.setAttribute('alt', '');
          newImg.setAttribute('src', './public/right.svg');
          iitDiv.appendChild(newImg);


          updateContent(iitExperienceInner());
        });
      }
    }
  // Call checkScreenSize function when the page loads
  checkScreenSize();

  // Call checkScreenSize function when the window is resized
  window.addEventListener('resize', checkScreenSize);

});
  
  
function sofiExperienceInner(){
    return `
    <div class="frame-parent4">
                    <div class="job-title-parent">
                      <div class="job-title">
                        <p class="software-developer-intern-sof">
                          Software Developer Intern
                          <span class="sofi1">SoFi</span>
                        </p>
                      </div>
                      <div class="location">California, United States</div>
                    </div>
                    <div class="period-parent">
                      <div class="period">
                        June 2023 - August 2023 · Full-time
                      </div>
                      <div class="tag-parent">
                        <button class="tag2">
                          <div class="swift">Java</div>
                        </button>
                        <button class="tag2">
                          <div class="swift1">Kotlin</div>
                        </button>
                        <button class="tag2">
                          <div class="swift2">SpringBoot</div>
                        </button>
                        <button class="tag2">
                          <div class="swift3">PostgresSQL</div>
                        </button>
                        <button class="tag2">
                          <div class="swift">React.js</div>
                        </button>
                      </div>
                    </div>
                    <div class="line-wrapper">
                      <div class="line1"></div>
                    </div>
                    <div class="frame-parent5">
                      <div class="line-container">
                        <div class="line2"></div>
                      </div>
                      <div class="developed-a-new">
                      Developed a new feature to display user it's login history, enhancing user security and transparency for ~5.6M users
                      </div>
                    </div>
                    <div class="frame-parent5">
                      <div class="line-container">
                        <div class="line2"></div>
                      </div>
                      <div class="developed-a-new">
                        Engineered efficient REST API’s using Java with Spring Boot, filtering ~100M records and paginating response in 90ms
                      </div>
                    </div>
                    <div class="frame-parent5">
                      <div class="line-container">
                        <div class="line2"></div>
                      </div>
                      <div class="developed-a-new">
                      Achieved an optimized integration of data from Kafka queue into PostgreSQL database for ~100 request/s
                      </div>
                    </div>
                    <div class="frame-parent5">
                      <div class="line-container">
                        <div class="line2"></div>
                      </div>
                      <div class="developed-a-new">
                      Created React.js page within existing application to visualize user login data, improving user experience and accessibility
                      </div>
                    </div>
                  </div>`;
}

function slbExperienceInner(){
    return `
    <div class="frame-parent4">
                    <div class="job-title-parent">
                      <div class="job-title">
                        <p class="software-developer-intern-sof">
                          RPA Software Developer
                          <span class="sofi1">Schlumberger</span>
                        </p>
                      </div>
                      <div class="location">Pune, India</div>
                    </div>
                    <div class="period-parent">
                      <div class="period">
                        September 2020 - July 2022 · Full-time
                      </div>
                      <div class="tag-parent">
                        <button class="tag2">
                          <div class="swift">Java</div>
                        </button>
                        <button class="tag2">
                          <div class="swift2">Spring Boot</div>
                        </button>
                        <button class="tag2">
                          <div class="swift">MySQL</div>
                        </button>
                        <button class="tag2">
                          <div class="swift">React.js</div>
                        </button>
                        <button class="tag2">
                          <div class="swift">React.js</div>
                        </button>
                        <button class="tag2">
                          <div class="swift">Python</div>
                        </button>
                        <button class="tag2">
                          <div class="swift">Power Platform</div>
                        </button>
                      </div>
                    </div>
                    <div class="line-wrapper">
                      <div class="line1"></div>
                    </div>
                    <div class="frame-parent5">
                      <div class="line-container">
                        <div class="line2"></div>
                      </div>
                      <div class="developed-a-new">
                      Architected and automated HR letter generation process for 2 countries using Java, Python, SAP and MS Power Apps - resulting in annual savings of ~$7M for organization
                      </div>
                    </div>
                    <div class="frame-parent5">
                      <div class="line-container">
                        <div class="line2"></div>
                      </div>
                      <div class="developed-a-new">
                      Spearheaded a shipment creation system to simplify it by 70% and boosting user efficiency by 50%
                      </div>
                    </div>
                    <div class="frame-parent5">
                      <div class="line-container">
                        <div class="line2"></div>
                      </div>
                      <div class="developed-a-new">
                      Collaborated with a cross-functional team in agile environment to generate 40+ financial reports using Java, and SAP reducing 
                      analysis time by 25%
                      </div>
                    </div>
                    <div class="frame-parent5">
                      <div class="line-container">
                        <div class="line2"></div>
                      </div>
                      <div class="developed-a-new">
                      Trained 60 non-technical employees in Microsoft Power Platform, improving daily efficiency of operations by 20%
                      </div>
                    </div>
                  </div>`;
}

function iitExperienceInner(){
    return `
    <div class="frame-parent4">
                    <div class="job-title-parent">
                      <div class="job-title">
                        <p class="software-developer-intern-sof">
                          Developer
                          <span class="sofi1">IIT Bombay</span>
                        </p>
                      </div>
                      <div class="location">Pune, India</div>
                    </div>
                    <div class="period-parent">
                      <div class="period">
                        June 2018 - Sept 2018 · Part-time
                      </div>
                      <div class="tag-parent">
                        <button class="tag2">
                          <div class="swift">PHP</div>
                        </button>
                        <button class="tag2">
                          <div class="swift">Angular.js</div>
                        </button>
                        <button class="tag2">
                          <div class="swift">MySQL</div>
                        </button>
                        <button class="tag2">
                          <div class="swift">OOP</div>
                        </button>
                      </div>
                    </div>
                    <div class="line-wrapper">
                      <div class="line1"></div>
                    </div>
                    <div class="frame-parent5">
                      <div class="line-container">
                        <div class="line2"></div>
                      </div>
                      <div class="developed-a-new">
                      Revamped the Outreach portal by applying OOP concepts and PHP, including system redevelopment, unit testing, and portal launch catering 40+ colleges
                      </div>
                    </div>
                </div>`;
}



function sofiExperienceInnerMobile(){
  return `
  <div class="frame-parent4">
                  <div class="job-title-parent">
                    <div class="job-title">
                      <p class="software-developer-intern-sof">
                        Software Developer Intern
                        <span class="sofi1">SoFi</span>
                      </p>
                    </div>
                    <div class="location">California, United States</div>
                  </div>
                  <div class="period-parent">
                    <div class="period">
                      June 2023 - August 2023 · Full-time
                    </div>
                    <div class="tag-parent">
                      <button class="tag2">
                        <div class="swift">Java</div>
                      </button>
                      <button class="tag2">
                        <div class="swift1">Kotlin</div>
                      </button>
                      <button class="tag2">
                        <div class="swift2">Spring Boot</div>
                      </button>
                      <button class="tag2">
                        <div class="swift3">PostgresSQL</div>
                      </button>
                      <button class="tag2">
                        <div class="swift">React.js</div>
                      </button>
                    </div>
                  </div>
                  <div class="line-wrapper">
                    <div class="line1"></div>
                  </div>
                  <div class="frame-parent5">
                    <div class="line-container">
                      <div class="line2"></div>
                    </div>
                    <div class="developed-a-new">
                    Developed a new feature to display user it's login history, enhancing user security and transparency for ~5.6M users
                    </div>
                  </div>
                  <div class="frame-parent5">
                    <div class="line-container">
                      <div class="line2"></div>
                    </div>
                    <div class="developed-a-new">
                      Engineered efficient REST API’s using Java with Spring Boot, filtering ~100M records and paginating response in 90ms
                    </div>
                  </div>
                </div>`;
}

function slbExperienceInnerMobile(){
  return `
  <div class="frame-parent4">
                  <div class="job-title-parent">
                    <div class="job-title">
                      <p class="software-developer-intern-sof">
                        RPA Software Developer
                        <span class="sofi1">Schlumberger</span>
                      </p>
                    </div>
                    <div class="location">Pune, India</div>
                  </div>
                  <div class="period-parent">
                    <div class="period">
                      September 2020 - July 2022 · Full-time
                    </div>
                    <div class="tag-parent">
                      <button class="tag2">
                        <div class="swift">Java</div>
                      </button>
                      <button class="tag2">
                        <div class="swift2">Spring Boot</div>
                      </button>
                      <button class="tag2">
                        <div class="swift">MySQL</div>
                      </button>
                      <button class="tag2">
                        <div class="swift">React.js</div>
                      </button>
                      <button class="tag2">
                        <div class="swift">React.js</div>
                      </button>
                    </div>
                  </div>
                  <div class="line-wrapper">
                    <div class="line1"></div>
                  </div>
                  <div class="frame-parent5">
                    <div class="line-container">
                      <div class="line2"></div>
                    </div>
                    <div class="developed-a-new">
                    Architected and automated HR letter generation process for 2 countries using Java, Python, SAP and MS Power Apps - resulting in annual savings of ~$7M for organization
                    </div>
                  </div>
                  <div class="frame-parent5">
                    <div class="line-container">
                      <div class="line2"></div>
                    </div>
                    <div class="developed-a-new">
                    Spearheaded a shipment creation system to simplify it by 70% and boosting user efficiency by 50%
                    </div>
                  </div>
                </div>`;
}

function iitExperienceInnerMobile(){
  return `
  <div class="frame-parent4">
                  <div class="job-title-parent">
                    <div class="job-title">
                      <p class="software-developer-intern-sof">
                        Developer
                        <span class="sofi1">IIT Bombay</span>
                      </p>
                    </div>
                    <div class="location">Pune, India</div>
                  </div>
                  <div class="period-parent">
                    <div class="period">
                      June 2018 - Sept 2018 · Part-time
                    </div>
                    <div class="tag-parent">
                      <button class="tag2">
                        <div class="swift">PHP</div>
                      </button>
                      <button class="tag2">
                        <div class="swift">Angular.js</div>
                      </button>
                      <button class="tag2">
                        <div class="swift">MySQL</div>
                      </button>
                      <button class="tag2">
                        <div class="swift">OOP</div>
                      </button>
                    </div>
                  </div>
                  <div class="line-wrapper">
                    <div class="line1"></div>
                  </div>
                  <div class="frame-parent5">
                    <div class="line-container">
                      <div class="line2"></div>
                    </div>
                    <div class="developed-a-new">
                    Revamped the Outreach portal by applying OOP concepts and PHP, including system redevelopment, unit testing, and portal launch catering 40+ colleges
                    </div>
                  </div>
              </div>`;
}
