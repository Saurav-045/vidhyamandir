import React from "react";

const Volunteer = () => {
    return (
        <>
            <div>
                <div className="title_style">
                    <h1>COME VOLENTEER WITH US</h1>
                </div>
                <div className="volunteer_style">
                    <img className="volunteer_image" src="https://saraswati-seva-foundation.org/wp-content/uploads/2023/03/volunteering-1.jpg" />
                    <p><strong>Together we can grow skills ecosystem.</strong></p>
                    <p>Whether you can invest your time or money, everyone has a role to play in making BoP (Bottom of Pyramid) communities skills ready.</p>
                    <p>When one person is trained, the multiplier effect it catalyzes is far-reaching: on children, youngh people, their neighbours, educational institues, ad the community.</p>
                    <p>Let’s be an enabler of change!</p>
                    <div className="button_style">
                        <button className="btn btn-dark">Join our Team ➡️</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Volunteer;