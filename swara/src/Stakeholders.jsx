// import { Carousel } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cssstyle from './index.css';

const Stakeholders = () => {
    return (
        <>
            <div className="stakeholders-style">
                <div className="stakeholder-outer">
                    <Carousel>

                        <div className="stakeholder-content">
                        <div className="stakeholder-div">
                            <img className="stakeholders-inner" src="https://saraswati-seva-foundation.org/wp-content/uploads/2023/03/ms_bajpai.jpg" alt="shipra" />
                            <h3>Shipra Bajpai</h3>
                            <h5>(Industrial Expert)</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Ultrices neque ornare aenean euismod elementum nisi quis. In hac habitasse platea dictumst vestibulum rhoncus est. Sed adipiscing diam donec adipiscing. Blandit massa enim nec dui nunc mattis. Facilisi cras fermentum odio eu feugiat. Luctus accumsan tortor posuere ac ut consequat semper viverra. Nunc consequat interdum varius sit amet mattis. Sit amet nisl purus in mollis nunc sed id. Sagittis orci a scelerisque purus semper eget. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Amet tellus cras adipiscing enim eu turpis.</p>
                        </div>
                        <div className="stakeholder-content">
                        <div className="stakeholder-div">
                        <img className="stakeholders-inner" src="https://saraswati-seva-foundation.org/wp-content/uploads/2023/03/farhat.jpg" alt="farhat" />
                            <h3>Farhat Noorudin</h3>
                            <h5>(Member of Advisory committe)</h5>
                        </div>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Ultrices neque ornare aenean euismod elementum nisi quis. In hac habitasse platea dictumst vestibulum rhoncus est. Sed adipiscing diam donec adipiscing. Blandit massa enim nec dui nunc mattis. Facilisi cras fermentum odio eu feugiat. Luctus accumsan tortor posuere ac ut consequat semper viverra. Nunc consequat interdum varius sit amet mattis. Sit amet nisl purus in mollis nunc sed id. Sagittis orci a scelerisque purus semper eget. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Amet tellus cras adipiscing enim eu turpis.</p>

                        </div>
                        <div className="stakeholder-content">
                        <div className="stakeholder-div">
                        <img className="stakeholders-inner" src="https://saraswati-seva-foundation.org/wp-content/uploads/2023/03/roopesh.jpg" alt="roopesh" />
                            <h3>Roopesh Kumar</h3>
                            <h5>(Member of Advisory Board)</h5>
                        </div>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Ultrices neque ornare aenean euismod elementum nisi quis. In hac habitasse platea dictumst vestibulum rhoncus est. Sed adipiscing diam donec adipiscing. Blandit massa enim nec dui nunc mattis. Facilisi cras fermentum odio eu feugiat. Luctus accumsan tortor posuere ac ut consequat semper viverra. Nunc consequat interdum varius sit amet mattis. Sit amet nisl purus in mollis nunc sed id. Sagittis orci a scelerisque purus semper eget. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Amet tellus cras adipiscing enim eu turpis.</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default Stakeholders;