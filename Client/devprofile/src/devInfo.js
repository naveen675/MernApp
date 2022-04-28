import React, { useEffect, useState } from 'react';
import AccountCircle from './Images/Icons _ Illustrations/account_circle-24px.svg';
import githubIcon from './Images/iconfinder_github_317712.png';
import linkedicon from './Images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import codecheficon from './Images/codechef-1324440139527402917_32.png';
import hackericon from './Images/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import twitericon from './Images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import mediumicon from './Images/iconfinder_Circled_Medium_svg5_5279113.png';
import MailIcon from './Images/email-24px.svg';
import LocationIcon from './Images/Icons _ Illustrations/location_on-24px.svg';
import BusinessIcon from './Images/Icons _ Illustrations/business-24px.svg';
import BlogIcon from './Images/Icons _ Illustrations/insert_link-24px (1).svg';
import { Link, useNavigate } from 'react-router-dom';





function DevInfo(){

    const navigate = useNavigate();

    const [githubId,setGithubId] = useState("gcnit");
    const [avatar, setAvatar] = useState();
    const [hackerrank,setHackerRank] = useState();
    const [linkedin,setLinkedIn] = useState();
    const [codechef,setCodechef] = useState();
    const [medium,setMedium] = useState();
    const [twiter, setTwitter] = useState();
    const [email, setEmail] = useState();
    const [bio, setBio] = useState();
    const [blog, setBlog] = useState();
    const [location, setLocation] = useState();
    const [repos, setRepos] = useState();
    const [name, setName] = useState();
    const[company,setCompany] = useState();
    const [Data,setData] = useState();
    console.log(typeof(repos));

    

    // // useEffect(() => {
    // //     fetch(`/api/developers/${githubId}`).then((response) => {return response.json()}).then((data) => 
    // //         {
    // //             setAvatar(data['avatar_url'])
    // //             setHackerRank(data['hackerrank_id'])
    // //             setLinkedIn(data['linkedin_id'])
    // //             setCodechef(data['codechef_id'])
    // //             setMedium(data['medium_id']);
    // //             setTwitter(data['twitter_id'])
    // //             setEmail(data['email'])
    // //             setBio(data['bio'])
    // //             setBlog(data['blog'])
    // //             setLocation(data['location'])
    // //             setName(data['name'])
    // //             setRepos(data['repos']);
    // //             setCompany(data['company'])
    // //             setData(data);

    // //         }
    // //     );

        
    // })

    function DisplayRepos(){

        console.log('*****************');

        const s = repos.map((item) => {
            <h1>h1</h1>
        })

        return s;
    }

    console.log(avatar);
    console.log(hackerrank);
    console.log(linkedin);
    console.log(twiter);
    console.log(medium);
    console.log(codechef);
    console.log(repos);
    console.log(Data);


    return (
       <React.Fragment>
        <div className='devloperProfileHeader'>
            <h3>The Developer Profile</h3>
            <button onClick={() => (navigate('/'))}>All Developers</button>
        </div>
        <div className='developerProfileContent'>
            <div className='developerProfileSubContent'>
                <img src={avatar} alt={AccountCircle} className="devloperProfileImage"/>
                <h3>{name}</h3>
                <p>{bio}</p>
                <a href='https://www.google.com/?hl=en-GB&authuser=1' ><img src={githubIcon} alt='Github'/></a>
                <a href='https://www.google.com/?hl=en-GB&authuser=1' ><img src={linkedicon} alt='Linkedin'/></a>
                <a href='https://www.google.com/?hl=en-GB&authuser=1' ><img src={hackericon} alt='Hackerrank'/></a>
                <a href='https://www.google.com/?hl=en-GB&authuser=1' ><img src={twitericon} alt='Twitter'/></a>
                <a href='https://www.google.com/?hl=en-GB&authuser=1' ><img src={codecheficon} alt='Codechef'/></a>
                <a href='https://www.google.com/?hl=en-GB&authuser=1' ><img src={mediumicon} alt='Medium'/></a>
                <a href='https://www.google.com/?hl=en-GB&authuser=1' ><img src={MailIcon} alt='Mail' /></a>
                <img src={LocationIcon} /><p>{location}</p>
                <img src={BusinessIcon} /><p>{company}</p>
                <img src={BlogIcon} /><p>{blog}</p>
            </div>
            <hr></hr>
            <div>
               <h1>Github Repositories</h1>
               <DisplayRepos />

            </div>
        </div>

        
       </React.Fragment>
    )
}


export default DevInfo;