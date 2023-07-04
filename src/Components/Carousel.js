import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import cr1 from "./Assets/cr1.png";
import cr2 from "./Assets/cr2.jpg";
import cr3 from "./Assets/cr3.png";


export default function CustomCarousel() {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} className="custom-carousel">
            <div>
                <img src={cr1} alt="Image 1" className="custom-carousel-image" />
                <h5>“SSF through CIBOP course orients the students about the corporate working culture, realising the need of the industry”</h5>
                <h3>Hemant Krishnan</h3>
                <h6>Industry Expert</h6>
            </div>
            <div>
                <img src={cr2} alt="Image 2" className="custom-carousel-image" />
                <h5>“SSF creates employability opportunities for the youths. Train them in the right way & make them industry ready”</h5>
                <h3>Samarendra Singh</h3>
                <h6>Industry Expert</h6>
            </div>
            <div>
                <img src={cr3} alt="Image 3" className="custom-carousel-image" />
                <h5>“Enrolling in SSF’s Corporate and Investment Banking & Operations (CIBOP) course is the best decision I ever made. It was an online course where I learned about core banking, excel, and honed my soft skills. The best part is that I got practical exposure that I never received in college.”</h5>
                <h3>Arya Aligakar</h3>
                <h6>Student, CIBOP Program, Pune.</h6>
            </div>
        </Carousel>
    );
}
