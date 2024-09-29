import Button from "./Button";
import LogoCarousel from "./LogoCarousel";
import robot from '../../public/assets/hero/robot.jpg'
import curve from '../../public/assets/hero/curve.png'



const Hero = () => {

  return (
  /*   <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    > */
    <>
      <div className="relative mt-20">
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
  <h1 className="h1 mb-6 text-4xl lg:text-6xl mx-5 font-bold ">
  Découvrez l'Avenir de la Conversation IA avec MindFlow
   
      
      <img
                src={curve}
                className=" top-full left-0 w-full"
                width={624}
                height={28}
                alt="Curve"
              />
  </h1>
  <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
  Propulsez votre créativité et votre efficacité grâce à MindFlow, 
  l'assistant IA qui repousse les limites de l'innovation.
  </p>
  <Button href="/pricing" >
    Lancez-vous
  </Button>
</div>
        <div className="relative max-w-[23rem] mx-auto border border-gray-500 rounded-xl p-5 md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" m-5 p-5 ">
          
      <LogoCarousel/>
        </div>

      </div>
      <div>
        
      </div >
      
    </>
  );
};

export default Hero;
