const sensorTrackingDiv = document.getElementById('sensor-tracking-app-select-id');
const cloudBasedDiv = document.getElementById('cloud-based-online-select-id');
const collegeItineraryDiv = document.getElementById('college-iternary-planner-select-id');
const cpuCycleDiv = document.getElementById('cpu-cycle-simulator-select-id');
const sparkAndroidDiv = document.getElementById('spark-android-instant-select-id');
const roboticPlatformDiv = document.getElementById('smart-robotic-platform-select-id');
const connectionPoint = document.querySelector('.connection-point');

document.addEventListener("DOMContentLoaded", function() {
    function updateContent(divId) {
        // console.log('asd');
        connectionPoint.innerHTML = `${divId}`;
    }
    function updateContentMobile(divId) {
        // console.log('asd');
        connectionPoint.innerHTML += `${divId}`;
    }
    function insertDiv(){
        connectionPoint.innerHTML += '<div style="height:2.5rem;"><div class="line-wrapper3"><div class="line6"></div></div></div>';
    }
    function clearContent(divId) {
        // console.log('asd');
        connectionPoint.innerHTML = '';
    }
    function checkScreenSize() {
        if (window.innerWidth <= 825) {
            clearContent();
            updateContentMobile(sensorTrackingContentOneLine());
            insertDiv();
            updateContentMobile(cloudCompilerContentOneLine());
            insertDiv();
            updateContentMobile(collegeItineraryContentOneLine());
            insertDiv();
        }
        else{
            sensorTrackingDiv.classList.add('applle1');
            sensorTrackingDiv.classList.remove('project-unselected-wrapper');
            const img = sensorTrackingDiv.querySelector('.right-icon1');
            if (!img) {
                const imgSrc = './public/right-1.svg'; // Assuming the image source follows this pattern
                const newImg = document.createElement('img');
                newImg.classList.add('right-icon1');
                newImg.setAttribute('loading', 'lazy');
                newImg.setAttribute('alt', '');
                newImg.setAttribute('src', imgSrc);
                sensorTrackingDiv.appendChild(newImg);
            }
            updateContent(sensorTrackingContent());

            // Function to update content based on clicked div
            function updateContent(divId) {
            connectionPoint.innerHTML = `${divId}`;
            }
        
            // Event listener for Sensor Tracking Web App div
            sensorTrackingDiv.addEventListener('click', function(event) {
                setClassRemoveImg();

                sensorTrackingDiv.classList.add('applle1');
                sensorTrackingDiv.classList.remove('project-unselected-wrapper');
                const img = sensorTrackingDiv.querySelector('.right-icon1');
                if (!img) {
                    const imgSrc = './public/right-1.svg'; // Assuming the image source follows this pattern
                    const newImg = document.createElement('img');
                    newImg.classList.add('right-icon1');
                    newImg.setAttribute('loading', 'lazy');
                    newImg.setAttribute('alt', '');
                    newImg.setAttribute('src', imgSrc);
                    sensorTrackingDiv.appendChild(newImg);
                }
            updateContent(sensorTrackingContent());
            });
        
            // Event listener for Cloud Based Online Compiler div
            cloudBasedDiv.addEventListener('click', function(event) {
                setClassRemoveImg();

                cloudBasedDiv.classList.add('applle1');
                cloudBasedDiv.classList.remove('project-unselected-wrapper');
                const img = cloudBasedDiv.querySelector('.right-icon1');
                if (!img) {
                    const imgSrc = './public/right-1.svg'; // Assuming the image source follows this pattern
                    const newImg = document.createElement('img');
                    newImg.classList.add('right-icon1');
                    newImg.setAttribute('loading', 'lazy');
                    newImg.setAttribute('alt', '');
                    newImg.setAttribute('src', imgSrc);
                    cloudBasedDiv.appendChild(newImg);
                }
            updateContent(cloudCompilerContent());
            });
        
            // Event listener for College Itinerary Planner div
            collegeItineraryDiv.addEventListener('click', function(event) {
                setClassRemoveImg();

                collegeItineraryDiv.classList.add('applle1');
                collegeItineraryDiv.classList.remove('project-unselected-wrapper');
                const img = collegeItineraryDiv.querySelector('.right-icon1');
                if (!img) {
                    const imgSrc = './public/right-1.svg'; // Assuming the image source follows this pattern
                    const newImg = document.createElement('img');
                    newImg.classList.add('right-icon1');
                    newImg.setAttribute('loading', 'lazy');
                    newImg.setAttribute('alt', '');
                    newImg.setAttribute('src', imgSrc);
                    collegeItineraryDiv.appendChild(newImg);
                }
            updateContent(collegeItineraryContent());
            });
        
            // Event listener for CPU Cycle Simulator div
            cpuCycleDiv.addEventListener('click', function(event) {
                setClassRemoveImg();

                cpuCycleDiv.classList.add('applle1');
                cpuCycleDiv.classList.remove('project-unselected-wrapper');
                const img = cpuCycleDiv.querySelector('.right-icon1');
                if (!img) {
                    const imgSrc = './public/right-1.svg'; // Assuming the image source follows this pattern
                    const newImg = document.createElement('img');
                    newImg.classList.add('right-icon1');
                    newImg.setAttribute('loading', 'lazy');
                    newImg.setAttribute('alt', '');
                    newImg.setAttribute('src', imgSrc);
                    cpuCycleDiv.appendChild(newImg);
                }
            updateContent(cpuCycleContent());
            });
        
            // Event listener for SPArK- Android Instant Messenger div
            sparkAndroidDiv.addEventListener('click', function(event) {
                setClassRemoveImg();

                sparkAndroidDiv.classList.add('applle1');
                sparkAndroidDiv.classList.remove('project-unselected-wrapper');
                const img = sparkAndroidDiv.querySelector('.right-icon1');
                if (!img) {
                    const imgSrc = './public/right-1.svg'; // Assuming the image source follows this pattern
                    const newImg = document.createElement('img');
                    newImg.classList.add('right-icon1');
                    newImg.setAttribute('loading', 'lazy');
                    newImg.setAttribute('alt', '');
                    newImg.setAttribute('src', imgSrc);
                    sparkAndroidDiv.appendChild(newImg);
                }
            updateContent(sparkMessengerContent());
            });
        
            // Event listener for Robotic Platform for Education div
            roboticPlatformDiv.addEventListener('click', function(event) {
                setClassRemoveImg();

                roboticPlatformDiv.classList.add('applle1');
                roboticPlatformDiv.classList.remove('project-unselected-wrapper');
                const img = roboticPlatformDiv.querySelector('.right-icon1');
                if (!img) {
                    const imgSrc = './public/right-1.svg'; // Assuming the image source follows this pattern
                    const newImg = document.createElement('img');
                    newImg.classList.add('right-icon1');
                    newImg.setAttribute('loading', 'lazy');
                    newImg.setAttribute('alt', '');
                    newImg.setAttribute('src', imgSrc);
                    roboticPlatformDiv.appendChild(newImg);
                }
                
            updateContent(sparkRobotContent());
            });
        }
    }
    // Call checkScreenSize function when the page loads
  checkScreenSize();

  // Call checkScreenSize function when the window is resized
  window.addEventListener('resize', checkScreenSize);
});

function setClassRemoveImg(){
    sensorTrackingDiv.classList.add('project-unselected-wrapper');
    sensorTrackingDiv.classList.remove('applle1');
    cloudBasedDiv.classList.add('project-unselected-wrapper');
    cloudBasedDiv.classList.remove('applle1');
    collegeItineraryDiv.classList.add('project-unselected-wrapper');
    collegeItineraryDiv.classList.remove('applle1');
    cpuCycleDiv.classList.add('project-unselected-wrapper');
    cpuCycleDiv.classList.remove('applle1');
    sparkAndroidDiv.classList.add('project-unselected-wrapper');
    sparkAndroidDiv.classList.remove('applle1');
    roboticPlatformDiv.classList.add('project-unselected-wrapper');
    roboticPlatformDiv.classList.remove('applle1');
    connectionPoint.classList.add('project-unselected-wrapper');
    connectionPoint.classList.remove('applle1');
    
    const images = document.querySelectorAll('.right-icon1');
      images.forEach(image => {
          image.parentNode.removeChild(image)
      });
  }

function sensorTrackingContent(){
    return `
        <div class="variable-store">
            <div class="flow-control">
            <div class="job-title1">
                <p class="sensor-tracking-web1">Sensor Tracking Web App</p>
            </div>
            <div class="period1">Sept 2023 - Nov 2023</div>
            </div>
            <div class="tag-group">
            <button class="tag4">
                <div class="swift4">TypeScript</div>
            </button>
            <button class="tag4">
                <div class="swift5">React</div>
            </button>
            <button class="tag4">
                <div class="swift6">HTML</div>
            </button>
            <button class="tag4">
                <div class="swift6">CSS</div>
            </button>
            </div>
            <div class="line-wrapper3">
            <div class="line6"></div>
            </div>
            <div class="decision-tree-parent">
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Developed and built data management system for sensors with TypeScript, MongoDB, and React.js, enabling efficient data 
storage, manipulation, and visualization
                </div>
            </div>
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Performed thorough test suites ensuring system reliability across diverse conditions covering 70% of code
                </div>
            </div>
        </div>
    `;
}

function cloudCompilerContent(){
    return `
        <div class="variable-store">
            <div class="flow-control">
            <div class="job-title1">
                <p class="sensor-tracking-web1">Cloud Based Online Compiler</p>
            </div>
            <div class="period1">February 2023 - May 2023</div>
            </div>
            <div class="tag-group">
            <button class="tag4">
                <div class="swift6">Docker</div>
            </button>
            <button class="tag4">
                <div class="swift6">Kubernetes</div>
            </button>
            <button class="tag4">
                <div class="swift6">GCP</div>
            </button>
            <button class="tag4">
                <div class="swift5">Java</div>
            </button>
            <button class="tag4">
                <div class="swift5">Spring Boot</div>
            </button>
            <button class="tag4">
                <div class="swift6">React.js</div>
            </button>
            </div>
            <div class="line-wrapper3">
            <div class="line6"></div>
            </div>
            <div class="decision-tree-parent">
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Crafted a scalable cloud-native compiler platform with Java Spring Boot microservices and RESTful APIs
                </div>
            </div>
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Containerized microservices using Docker and orchestrated with Kubernetes for efficient deployment and management
• Leveraged GCP for scalable data storage – Google MySQL for user data, GCP Cloud Storage for files
                </div>
            </div>
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                    Leveraged GCP for scalable data storage – Google MySQL for user data, GCP Cloud Storage for files
                </div>
            </div>
        </div>
    `;
}

function collegeItineraryContent(){
    return `
        <div class="variable-store">
            <div class="flow-control">
            <div class="job-title1">
                <p class="sensor-tracking-web1">College Itinerary Planner</p>
            </div>
            <div class="period1">October 2022 - November 2022</div>
            </div>
            <div class="tag-group">
            <button class="tag4">
                <div class="swift5">Java</div>
            </button>
            <button class="tag4">
                <div class="swift5">SOLID Design Principles</div>
            </button>
            <button class="tag4">
                <div class="swift5">Design Patterns</div>
            </button>
            </div>
            <div class="line-wrapper3">
            <div class="line6"></div>
            </div>
            <div class="decision-tree-parent">
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Built an itinerary planner for college visits following SOLID design principles and identified and implemented Builder design pattern
                </div>
            </div>
        </div>
    `;
}

function cpuCycleContent(){
    return `
        <div class="variable-store">
            <div class="flow-control">
            <div class="job-title1">
                <p class="sensor-tracking-web1">College Itinerary Planner</p>
            </div>
            <div class="period1">September 2022 - November 2022</div>
            </div>
            <div class="tag-group">
            <button class="tag4">
                <div class="swift5">C</div>
            </button>
            <button class="tag4">
                <div class="swift5">Computer Architecture</div>
            </button>
            </div>
            <div class="line-wrapper3">
            <div class="line6"></div>
            </div>
            <div class="decision-tree-parent">
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Created CPU cycle simulator in C for various arithmetic operations, conditional statements, and loops
                </div>
            </div>
            <div class="decision-tree-parent">
                <div class="frame-parent5">
                    <div class="line-container">
                    <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Fabricated in-order simulator before developing out-of-order simulator, drastically reducing complexity
                </div>
            </div>
        </div>
    `;
}

function sparkMessengerContent(){
    return `
        <div class="variable-store">
            <div class="flow-control">
            <div class="job-title1">
                <p class="sensor-tracking-web1">SPArK- Android Instant Messenger</p>
            </div>
            <div class="period1">August 2018 - November 2018</div>
            </div>
            <div class="tag-group">
            <button class="tag4">
                <div class="swift5">Java for Android</div>
            </button>
            <button class="tag4">
                <div class="swift5">Google Firebase</div>
            </button>
            </div>
            <div class="line-wrapper3">
            <div class="line6"></div>
            </div>
            <div class="decision-tree-parent">
                <div class="frame-parent5">
                    <div class="line-container">
                    <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Engineered a feature-rich instant android messaging application in Java 
                </div>
            </div>
            <div class="decision-tree-parent">
                <div class="frame-parent5">
                    <div class="line-container">
                    <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Pioneered awaited features - dark mode, scheduled, pinned and reminder messages
                </div>
            </div>
            <div class="decision-tree-parent">
                <div class="frame-parent5">
                    <div class="line-container">
                    <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Utilized Google’s Firebase as real-time database for storing user information and messages
                </div>
            </div>
            <div class="decision-tree-parent">
                <div class="frame-parent5">
                    <div class="line-container">
                    <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Managed development, testing, and deployment, and launched application on Google Play Store (having 5000+ downloads)
                </div>
            </div>
        </div>
    `;
}

function sparkRobotContent(){
    return `
        <div class="variable-store">
            <div class="flow-control">
            <div class="job-title1">
                <p class="sensor-tracking-web1">SPArK- Robotic Platform for Education</p>
            </div>
            <div class="period1">June 2019 - May 2020</div>
            </div>
            <div class="tag-group">
            <button class="tag4">
                <div class="swift5">Rasberry Pi</div>
            </button>
            <button class="tag4">
                <div class="swift5">Arduino</div>
            </button>
            <button class="tag4">
                <div class="swift5">Python</div>
            </button>
            <button class="tag4">
            <div class="swift5">React.js</div>
            </button>
            <button class="tag4">
                <div class="swift5">Scratch - UI Language</div>
            </button>
            <button class="tag4">
                <div class="swift5">3DPLM</div>
            </button>
            </div>
            <div class="line-wrapper3">
            <div class="line6"></div>
            </div>
            <div class="decision-tree-parent">
                <div class="frame-parent5">
                    <div class="line-container">
                    <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                    Created low-cost educational robotic platform to develop logic skills in students
                </div>
            </div>
            <div class="decision-tree-parent">
                <div class="frame-parent5">
                    <div class="line-container">
                    <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                    Engineered a robot controlled by an open source no-code programming language, with Raspberry Pi sensor compatibility
                </div>
            </div>
            <div class="decision-tree-parent">
                <div class="frame-parent5">
                    <div class="line-container">
                    <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                    Developed and coded hardware components using Python for optimal functionality
                </div>
            </div>
            <div class="decision-tree-parent">
                <div class="frame-parent5">
                    <div class="line-container">
                    <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Received positive feedback from educational institutions for the effectiveness and affordability
                </div>
            </div>
        </div>
    `;
}


function sensorTrackingContentOneLine(){
    return `
        <div class="variable-store">
            <div class="flow-control">
            <div class="job-title1">
                <p class="sensor-tracking-web1">Sensor Tracking Web App</p>
            </div>
            <div class="period1">Sept 2023 - Nov 2023</div>
            </div>
            <div class="tag-group">
            <button class="tag4">
                <div class="swift4">TypeScript</div>
            </button>
            <button class="tag4">
                <div class="swift5">React</div>
            </button>
            <button class="tag4">
                <div class="swift6">HTML</div>
            </button>
            <button class="tag4">
                <div class="swift6">CSS</div>
            </button>
            </div>
            <div class="decision-tree-parent">
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Developed and built data management system for sensors with TypeScript, MongoDB, and React.js, enabling efficient data 
storage, manipulation, and visualization
                </div>
            </div>
        </div>
    `;
}

function cloudCompilerContentOneLine(){
    return `
        <div class="variable-store">
            <div class="flow-control">
            <div class="job-title1">
                <p class="sensor-tracking-web1">Cloud Based Online Compiler</p>
            </div>
            <div class="period1">February 2023 - May 2023</div>
            </div>
            <div class="tag-group">
            <button class="tag4">
                <div class="swift6">Docker</div>
            </button>
            <button class="tag4">
                <div class="swift6">Kubernetes</div>
            </button>
            <button class="tag4">
                <div class="swift6">GCP</div>
            </button>
            <button class="tag4">
                <div class="swift5">Java</div>
            </button>
            <button class="tag4">
                <div class="swift5">Spring Boot</div>
            </button>
            </div>
            <div class="decision-tree-parent">
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Crafted a scalable cloud-native compiler platform with Java Spring Boot microservices and RESTful APIs
                </div>
            </div>
        </div>
    `;
}

function collegeItineraryContentOneLine(){
    return `
        <div class="variable-store">
            <div class="flow-control">
            <div class="job-title1">
                <p class="sensor-tracking-web1">College Itinerary Planner</p>
            </div>
            <div class="period1">October 2022 - November 2022</div>
            </div>
            <div class="tag-group">
            <button class="tag4">
                <div class="swift5">Java</div>
            </button>
            <button class="tag4">
                <div class="swift5">SOLID Design Principles</div>
            </button>
            <button class="tag4">
                <div class="swift5">Design Patterns</div>
            </button>
            </div>
            <div class="decision-tree-parent">
            <div class="frame-parent5">
                <div class="line-container">
                <div class="line2"></div>
                </div>
                <div class="developed-a-new">
                Built an itinerary planner for college visits following SOLID design principles and identified and implemented Builder design pattern
                </div>
            </div>
        </div>
    `;
}