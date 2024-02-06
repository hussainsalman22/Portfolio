import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            🎓 Currently pursuing a degree in Mechatronics Engineering at Mehran University with a track record of excellence, having completed Intermediate with an A1 grade.<br/>

            💻 Proficient in React, Next.js, Firebase, and skilled in leveraging GitHub for version control. Actively diving into the world of Express and Nodejs, driven by a passion for honing versatile development skills.<br/>

            🌟 Eager to contribute and learn, I'm currently undertaking online projects pro bono to craft a robust portfolio. My dedication and hard work fuel my growth as I aim to solidify my expertise.<br/>

            🤝 A team player at heart, I excel in collaborative environments, leveraging strong communication skills to foster productive teamwork and achieve shared goals.

            🔍 Open to opportunities that allow me to apply and expand my skill set in a dynamic setting. Let's connect and explore how we can collaborate!


          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
