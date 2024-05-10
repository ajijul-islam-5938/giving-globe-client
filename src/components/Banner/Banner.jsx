import { Carousel } from "@material-tailwind/react";
 
export default function Banner() {
  return (
    <Carousel
      className="rounded-xl w-full my-32 h-[50vh] md:h-[80vh]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://img.freepik.com/free-photo/young-black-woman-with-glasses-stands-outdoors-arms-crossed-looking-camera-diverse-group-volunteers-supports-non-profit-program-dedicated-hunger-relief-helping-needy-individuals_482257-70284.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/premium-photo/volunteer-group-team-community-service-eco-friendly-help-with-people-portrait-solidarity-sustainability-green-environment-green-sustainable-development-volunteering-clean_590464-158742.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/premium-photo/hands_3579-2346.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}