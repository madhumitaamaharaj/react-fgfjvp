import React from 'react';
import Card from './Card';

export default function App() {
 const user1={
   name: 'Amit',
   image : 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
   designation : 'Graphic Designer',
   description : 'Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.' 
 };
 
 const user2={
	name : 'Ruhi' ,
	image : 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	description : 'perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,and other types of music groups.' ,
	designation : 'Singer'
};
return(
    <div>
     <Card user={user1} />
     <Card user={user2} />
    </div>
  );
}