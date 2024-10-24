
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import wave from '../assets/wave.svg'
const Home = () => {
    return (
        <div className='min-h-[calc(100vh-120px)] flex flex-col justify-center relative'>
            <Hero></Hero>
            <img src={wave} alt="" className='w-full absolute bottom-0'/>
        </div>
    );
};

export default Home;