import React from 'react';
import Banner from '../layout/Banner';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Banner />

      <div className='q'>
        <div className='home__section'>
          <Card
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuo-LCqk7UpYs-7d87m4QQOyaTbFL5PhyoGQ&usqp=CAU'
            title='6 Bedroom Flat in Tehran'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores repudiandae illo voluptates! Asperiores, assumenda quae?'
            price='£133/night'
          />
          <Card
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqFXCse1u99TVNQt407XqerUp-_IysDJp1w&usqp=CAU'
            title='6 Bedroom Flat in Tehran'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores repudiandae illo voluptates! Asperiores, assumenda quae?'
            price='£143/night'
          />
          <Card
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbqHNNgQh4ilUyiRaS3H56T4Byzgm4wKqOw&usqp=CAU'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores repudiandae illo voluptates! Asperiores, assumenda quae?'
            title='mountain'
            price='£223/night'
          />
        </div>
        <div className='home__section'>
          <Card
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlri-UR5j0_7dPfAHivaDeaJZfgKJipMR0zQ&usqp=CAU'
            title='Penthouse in London'
            description='Enjoy the amazing sights of London with this stunning penthouse'
            price='£350/night'
          />
          <Card
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0XZGZIR26fS_srgVj3duQ1QhLwLQqm0_Mw&usqp=CAU'
            title='3 Bedroom Flat in Bournemouth'
            description='Superhost with a stunning view of the beachside in Sunny Bournemouth'
            price='£130/night'
          />

          <Card
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhOt9tQucE3uKGf4IZRkbMnlKWl9_DRkRDA&usqp=CAU'
            title='1 Bedroom apartment'
            description='Superhost with great amenities and a fabolous shopping complex nearby'
            price='£70/night'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
