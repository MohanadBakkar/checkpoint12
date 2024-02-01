import React, { useState, useEffect} from 'react';
const App = () => {
  const [person, setPerson] = useState({
    fullName: 'Christiano Ronaldo',
    bio: 'A football player in the Al-Nassr team',
    imgSrc: 'https://assets-fr.imgfoot.com/media/cache/1200x675/cristiano-ronaldo-al-nassr.jpg',
    profession: 'Football Player',
  });

  const [show, setShow] = useState(false);
  const [mountTime, setMountTime] = useState(new Date());

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  const calculateMountTime = () => {
    const currentTime = new Date();
    const elapsedTime = currentTime - mountTime;
    return Math.floor(elapsedTime / 1000); // Convert milliseconds to seconds
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the component to trigger re-render every second
      setMountTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []); // Empty dependency array ensures it runs only once after initial render

  return (
    <div>
      <button onClick={toggleShow}>Toggle Profile</button>
      {show && (
        <div>
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt="Person"  width= "300pxl" height= "200pxl"/>
          <p>Profession: {person.profession}</p>
        </div>
      )}
      <p>Time since mount: {calculateMountTime()} seconds</p>
    </div>
  );
};

export default App;
