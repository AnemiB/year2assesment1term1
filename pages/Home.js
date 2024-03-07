import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className='page'>
       <img
          src="https://images.squarespace-cdn.com/content/5b071ddea2772cebc1662831/1623874375983-Q02PVDKYMX9VWKFBJFLC/moon-jellyfish-ume-y.jpg?format=1500w&content-type=image%2Fjpeg"
          alt="Moon Jellyfish" height="200px" width= "100%" class="cover"
        />
      <header>
        <h1>Everything to Know About the Sea</h1>
        <p>
          Welcome to an extraordinary voyage into the depths of the ocean, where a myriad of captivating sea creatures await your discovery. Our website is a portal to the wonders of the underwater world, a place where you can embark on an immersive journey to explore the diverse and enchanting life forms that inhabit the vast expanses of our oceans.
        </p>
      </header>
      <br></br>
      <br></br>
      <section>
        <h2>Explore Sea Creatures</h2>
        <p>
          From the mysterious depths to the sunlit shallows, our comprehensive guide introduces you to an astonishing array of sea creatures, each with its unique adaptations and behaviors. Dive into the intricacies of marine biology, as we unveil the stories of the majestic whales, the playful dolphins, the vibrant coral reefs, and the elusive deep-sea denizens that lurk in the darkness.
        </p>
        <br></br>
        <ul>
    <p>These are a few of our most frequently spotted fish</p>
          <li>Moon Jellyfish</li>
          <li>Tiger Fish</li>
          <li>Reef Shark</li>
        </ul>
      </section>
      <br></br>
      <section>
        <h2>Exciting News: Moon Jellyfish Population Flourishing!</h2>
        <p>
          In a recent breakthrough for marine enthusiasts and conservationists alike, it has been revealed that the population of moon jellyfish is experiencing a significant resurgence. These ethereal creatures, known for their translucent bells and gentle pulsating movements, have been thriving in various oceanic ecosystems, marking a positive shift in their overall numbers.
        </p>
        <p>
          Scientists attribute this encouraging trend to a combination of environmental factors, including improved water quality, balanced marine ecosystems, and ongoing conservation efforts. The resilient nature of moon jellyfish and their ability to adapt to changing conditions have played a crucial role in this success story.
        </p>
      </section>
      <br></br>
      <section>
        <h3>Sign Up for Daily Newsletters</h3>
        <button>Sign Up</button>
      </section>
    </div>
  );
};

export default Home;
