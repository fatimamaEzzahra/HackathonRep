

// import './HeroSwiper.css'



const HeroSwiper = () => {
  const Services = [
    {title:"أهلا بك في بيتــك"},
    {title:"أهلا بك في بيتــك"},
    {title:"أهلا بك في بيتــك"},
    {title:"أهلا بك في بيتــك"},
    {title:"أهلا بك في بيتــك"},
    {title:"أهلا بك في بيتــك"},

  ];
  

 


  return (
    <div className="hero-line">
      {Services.map((service, index) => (
        <div key={index}>
          <img src={service.image} alt="" className="hero-image" />
          <div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <button>{service.sercheNow}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSwiper