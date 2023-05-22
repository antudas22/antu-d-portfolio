import { Carousel } from 'flowbite-react';
import React from 'react';
import rf1 from '../../assets/rf1.png';
import rf2 from '../../assets/rf2.png';
import rf3 from '../../assets/rf3.png';

const SecondProject = () => {
    return (
        <div>
            <div className="h-[600px]">
  <Carousel slide={false}>
    <img
      src={rf1}
      alt="..."
    />
    <img
      src={rf2}
      alt="..."
    />
    <img
      src={rf3}
      alt="..."
    />
  </Carousel>
</div>
<div className='my-5 p-5'>
<h3 className='text-3xl font-bold mb-5'>Recipe Finder</h3>

<p># In the homepage, users can view all the recipes displayed in cards by default, utilizing the mealDB API.</p>
<p># Users can search for their favorite dish, and below the search bar, all the recipes matching the dish they are looking for will be displayed.</p>
<p># Additionally, there is a details page where users can view the food picture, food details, tags, and the food area.</p><br/>
<p><span className='font-bold'>Technologies:</span> React JS, React Bootstrap, React Router Dom.</p>
<br/>
<a href="https://github.com/antudas22/recipe-finder" className='link' target='blank'>Github Link - Client</a><br/>
<a href="https://courageous-cobbler-222c66.netlify.app/" className='link' target='blank'>Live Website Link</a>
</div>

        </div>
    );
};

export default SecondProject;