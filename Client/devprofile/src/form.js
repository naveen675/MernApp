import React, { useEffect, useState } from 'react';
import giticon from './Images/iconfinder_github_317712.png';
import linkedicon from './Images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import codecheficon from './Images/codechef-1324440139527402917_32.png';
import hackericon from './Images/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import twitericon from './Images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import mediumicon from './Images/iconfinder_Circled_Medium_svg5_5279113.png';
import {useNavigate} from 'react-router-dom';
import Developers from './developers';
import {formVisibility} from './adddev';


function GetGithubData(githubId,linkedinId,codechefId,hackerrankId,twiterId,mediumId){

  
  
    const navigate = useNavigate();
    var data = {
      "github_id": githubId,
      "linkedin_id": linkedinId,
      "codechef_id": codechefId,
      "hackerrank_id": hackerrankId,
      "twitter_id": twiterId,
      "medium_id": mediumId
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
      
      var response  = fetch(`/api/create/developer/`, requestOptions).
      then((response) => {return response.json()}).then((data) => {console.log(data)});
  }



function Form() {

  

    const [githubId, setGitId] = useState("");
    const [linkedinId, setLinkedinId] =useState("");
    const [codechefId, setCodechefId] = useState("");
    const [hackerrankId, setHackerrankId] = useState("");
    var [twiterId, setTwiterId] = useState("");
    var [mediumId, setMediumId] = useState("");
    
    



return (
    <div className="devAddform">
      <label>
        <img src={giticon} alt='github' id='giticon' />
        Github
      </label>
      <input type='text' id='gitin' value={githubId} onInput = {(event) => setGitId(event.target.value)} />
      <label >
        <img src={linkedicon} alt='linkedin' id='linkedicon'  />
        Linkedin
      </label >
      <input type='text' id='linkedin' value={linkedinId} onChange = {(event) => setLinkedinId(event.target.value)} />
      <label >
        <img src={codecheficon} alt='codechef' id='codecheficon' />
        Codechef
      </label >
      <input type='text' id='codechefin' value={codechefId} onChange = {(event) => setCodechefId(event.target.value)} />
      <label >
        <img src={hackericon} alt='hackerrank' id='hackericon' />
        HackerRank
      </label>
      <input type='text' id='hackerin' value={hackerrankId} onChange = {(event) => setHackerrankId(event.target.value)} />
      <label >
        <img src={twitericon} alt='twitter' id='twitericon' />
        Twitter
      </label>
      <input type='text' id='twiterin' value={twiterId} onChange = {(event) => setTwiterId(event.target.value)} />
      <label >
        <img src={mediumicon} alt='medium' id='mediumicon' />
        Medium
      </label>
      <input type='text' id='mediumin' value={mediumId} onChange = {(event) => setMediumId(event.target.value) }/>
      <button id={'devformsubmit'} onClick= {() => GetGithubData(githubId,linkedinId,codechefId,hackerrankId,twiterId,mediumId)} >Submit </button>
      <button id={'devformcancel'} > Cancel </button>
    </div>
  );

  
}

export default Form;