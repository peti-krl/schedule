import React, { Component }  from 'react';
import { Timeline, Event } from 'react-trivial-timeline';

const Example = () =>{
  return (<div>
    <Timeline lineColor="white">
        <Event interval="14:00" title="Speakers test" >
        </Event>
        <Event interval="15:00" title="Sample text">
        </Event>
        <Event interval="15:00" title="Sample text">
        </Event>
        <Event interval="15:00" title="Sample text">
        </Event>
        <Event interval="15:00" title="Sample text">
        </Event>
        <Event interval="15:00" title="Sample text">
        </Event>
        <Event interval="15:00" title="Sample text">
        </Event>
        <Event interval="15:00" title="Sample text">
        </Event>
        <Event interval="15:00" title="Sample text">
        </Event>
        <Event interval="15:00" title="Sample text">
        </Event>
      </Timeline>
  </div>)

};

export default Example;