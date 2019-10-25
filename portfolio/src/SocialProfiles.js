import React, { Component} from 'react';
import SOCIAL_PROFILES from "./data/socialProfiles";

class SocialProfile extends Component {
    render(){
        const { image, alt, link } = this.props.socialProfile;

        return(
            <span>
                <a href={link}>
                    <img src={image} alt={alt} style={{width: 40, height: 30, margin: 5}}/>
                </a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render(){
        return (
            <div style={{paddingTop: 40}}>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return(
                                <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;