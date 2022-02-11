import ReactAudioPlayer from "react-audio-player";
import moment from "moment";
import React from 'react';
import ThumbUpIcon from '../components/@material-ui/icons/ThumbUp';
import ThumbDownIcon from '../components/@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
import  { useState } from 'react';

export default function Music({ musicList, index }) {
  const [countUp, setCountUp] = useState(0)
  const [countDown, setCountDown] = useState(0)
  
  return (
    <div className="col-md-4">
      <div className="card p-3 mb-2" key={index}>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-mailchimp"></i>{" "}
            </div>
            <div className="ms-2 c-details">
              <h6 className="mb-0">{musicList.name}</h6>{" "}
              <span>{moment(musicList.created_at).format("MMMM DD YYYY")}</span>
            </div>
          </div>
          <div className="badge">
            {" "}
            <span role="img" aria-label="">
              Hot 🔥
            </span>{" "}
          </div>
        </div>
        <div className="mt-2">
          <h4 className="heading">{musicList.title}</h4>
          <div className="mt-2">
            <ReactAudioPlayer src={`${musicList.url}`} controls />
          </div>
        </div>
        <div>
        <Button onClick={() => setCountUp(countUp + 1)}>
        <ThumbUpIcon />{`${countUp === 0 ? ' ' : countUp}`}
        </Button>
        <Button onClick={() => setCountDown(countDown + 1)}>
        <ThumbDownIcon />{`${countDown === 0 ? ' ' : countDown}`}
        </Button>
        </div>
      </div>
    </div>
  );
}
