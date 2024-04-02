/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { playfairDisplay } from "./layout";
import Image from "next/image";
import SliderHover from "./components/sliderHover";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="absolute w-full  z-20 text-white flex justify-between items-center p-4">
        <nav className="hidden sm:flex   gap-4">
          <Link href={"/#services"}>Home</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Contact Us</Link>
        </nav>
        <div>
          <h3 className="text-3xl  text-secondary">barberia</h3>
        </div>
        <nav className="hidden">
          <Link href={"/"}>Our Services</Link>
          <Link href={"/"}>Membership</Link>
          <Link href={"/"}>Shop Now</Link>
        </nav>
        {/* mobile */}
        <div>
          <svg className="text-seventh hover:text-secondary" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16M4 6h16M4 18h16" /></svg>
        </div>
      </header>

      <section className="h-screen ">
        <Image
          src="/img_hero.webp"
          fill

          style={{
            objectFit: 'cover',
          }}
          alt="image principal de un hombre cortandose el cabello"
          title="corte de cabello"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
          <div className="max-w-7xl mx-auto px-12 h-full flex flex-col justify-center">
            <div>
              <span className="py-1 px-4 rounded bg-neutral-600 text-white inline-block mb-4">
                HAIRCUTS SHOP
              </span>
              <h1
                className={
                  playfairDisplay.className +
                  " text-white text-5xl leading-[4rem] mb-8"
                }
              >
                A Modern Take on a<br />
                Time{" "}
                <span className="text-3xl block sm:inline bg-neutral-200 text-black mt-2 px-2 py-2 rounded-lg">
                  Honored Tradition
                </span>
              </h1>
              <p className="text-white mb-8">
                Handcrafted by our talented barbers - just for you
              </p>
              <div className="flex gap-3">
                <button className="py-3 px-6 bg-amber-300 rounded">
                  Make Appointment
                </button>
                <button className="py-3 px-6 border border-amber-300 text-amber-300 rounded">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="w-full relative bg-primary text-sixth ">
        <div className="pt-16 pb-16 p-4 max-w-7xl sm:px-8 m-auto">
          <article className="px-4  flex gap-4 aspect-video " >
            <figure className="bg-blue-500 w-full hover:grow transition duration-150 ease-in-out  "
            >
            </figure>
            <figure className="bg-green-500 min-w-4 hover:w-full transition duration-150 ease-in-out  hover:shrink  ">

            </figure>

          </article>
          <header >
            <h2 className="pt-16 text-3xl text-center font-bold flex justify-center items-center" >
              <span><hr className="w-10 m-auto mr-3" /> </span> About Us <span><hr className="w-10 m-auto  ml-3" /></span></h2>
            <p className="italic text-center pb-16">The Barber Shop Since 2020</p>
          </header>
          <div className="md:grid grid-cols-2 md:gap-8">
            <div className="flex gap-2 justify-center items-center mb-12 sm:gap-4">
              <figure className="w-full max-w-sm pt-7 sm:pt-16  ">
                <img src="/hombre_formal.jpg" alt="hombre vestido formalmente con un gran peinado" title="hombre con un gran peinado"
                  className="rounded-md " />
              </figure>
              <figure className="w-full max-w-sm  relative ">
                <img src="/hombre_formal.jpg" alt="hombre vestido formalmente con un gran peinado" className="rounded-md rounded-tr-[70px] w-full" />

              </figure>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mt-8 text-center">We Will Change Your Our Looks</h3>
              <p className="italic text-lg mb-4 text-secondary text-center">Handcrafted by our talented barbers</p>
              <p className="pretty mb-8 text-seventh sm:text-center  ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
                voluptate! Corrupti sapiente nemo expedita, rem explicabo mollitia
                hic? Provident dignissimos quaerat aperiam eligendi culpa,
                praesentium quos similique aliquam repellat reprehenderit!
              </p>
              <div className="flex gap-4 mb-8 justify-center">
                <div className="border-[1px] border-secondary/10 rounded-lg p-4">
                  <p className="text-[50px] font-bold text-secondary text-center">22</p>
                  <p className="italic text-seventh">Year Of Experience</p>
                </div>
                <div className="border-[1px] border-secondary/10 rounded-lg p-4">
                  <p className="text-[50px] font-bold text-secondary text-center">26</p>
                  <p className="italic text-seventh">Our Awesome Expect</p>
                </div>
              </div >
              <button className="border-[2px] border-secondary/40 rounded-lg px-10 py-2 block text-sixth/80 m-auto">Lear More</button>
            </div>
          </div>
        </div>
      </section>
      {/* Our Services */}
      <section id="services" className="pt-16  bg-fifth text-sixth p-4 pb-16 sm:px-8 sm:py-32  ">
        <div className="max-w-7xl h-full m-auto  ">
          <header className="mb-8">
            <h2 className=" text-3xl  text-center font-bold flex justify-center items-center sm:text-5xl sm:pb-8" >
              <span><hr className="w-10 m-auto" /> </span> Our Services<span><hr className="w-10 m-auto  ml-3" /></span></h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 grow">
            {/* item  */}
            <div className="border-[2px] border-secondary/20 rounded-lg p-4">
              <div>
                <img src="" alt="" />
              </div>
              <h3 className="text-center text-xl font-bold mb-4">Hair Cut</h3>
              <p className="max-w-sm px-4 text-center mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos exercitationem molestiae, voluptatum doloribus
                accusantium, consequuntur, dolore ab nesciunt sit quo impedit
                velit alias unde soluta pariatur. Adipisci accusamus et nisi.
              </p>
              <button className="block m-auto text-secondary underline underline-offset-2">Start at forty dollors</button>
            </div>
            {/* item  de muestra */}
            <div className="border-[2px] border-secondary/20 rounded-lg p-4">
              <div>
                <img src="" alt="" />
              </div>
              <h3 className="text-center text-xl font-bold mb-4">Hair Cut</h3>
              <p className="max-w-sm px-4 text-center mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos exercitationem molestiae, voluptatum doloribus
                accusantium, consequuntur, dolore ab nesciunt sit quo impedit
                velit alias unde soluta pariatur. Adipisci accusamus et nisi.
              </p>
              <button className="block m-auto text-secondary underline underline-offset-2">Start at forty dollors</button>
            </div>
            <div className="border-[2px] border-secondary/20 rounded-lg p-4">
              <div>
                <img src="" alt="" />
              </div>
              <h3 className="text-center text-xl font-bold mb-4">Hair Cut</h3>
              <p className="max-w-sm px-4 text-center mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos exercitationem molestiae, voluptatum doloribus
                accusantium, consequuntur, dolore ab nesciunt sit quo impedit
                velit alias unde soluta pariatur. Adipisci accusamus et nisi.
              </p>
              <button className="block m-auto text-secondary underline underline-offset-2">Start at forty dollors</button>
            </div>
            <div className="border-[2px] border-secondary/20 rounded-lg p-4">
              <div>
                <img src="" alt="" />
              </div>
              <h3 className="text-center text-xl font-bold mb-4">Hair Cut</h3>
              <p className="max-w-sm px-4 text-center mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos exercitationem molestiae, voluptatum doloribus
                accusantium, consequuntur, dolore ab nesciunt sit quo impedit
                velit alias unde soluta pariatur. Adipisci accusamus et nisi.
              </p>
              <button className="block m-auto text-secondary underline underline-offset-2">Start at forty dollors</button>
            </div>

          </div>
          <div >
            <button className="block m-auto px-8 py-2 border-2 border-secondary rounded-md">learn more</button>
          </div>
        </div>
      </section>
      {/* Meet Our Team */}
      <section className="pt-16  bg-third p-4 pb-16 sm:py-32">
        <header className="mb-12">
          <h2 className=" text-3xl text-center font-bold flex justify-center items-center sm:text-5xl" >
            <span><hr className="w-10 m-auto mr-3 border-black" /> </span> Meet Our Team<span><hr className="w-10 m-auto  ml-3 border-black" /></span></h2>
        </header>
        <div className="flex  relative px-4 justify-center gap-4 sm:gap-8 flex-wrap">
          <img src="/barbero.jpg" alt="" className="w-full rounded-md aspect-[4/5] object-cover max-w-sm" />
          <img src="/barber_2.jpg" alt="" className="w-full rounded-md aspect-[4/5] object-cover max-w-sm" />
          <img src="/barber_3.jpg" alt="" className="w-full rounded-md aspect-[4/5] object-cover max-w-sm" />
        </div>
      </section>
      {/* Enjoy our Galery */}


      {/* promociones */}
      <section className="bg-secondary py-16   text-center sm:py-32">
        <div className="max-w-7xl px-4 m-auto">
          <h2 className="text-3xl font-bold mb-4 sm:m-8">BARBERIA</h2>
          <h3 className="max-w-4xl text-2xl sm:text-4xl  font-bold mb-12 m-auto sm:mb-8 ">
            Los mejores cortes se encuentran en esta barberia. Generamos confianza.
          </h3>
          <button className="block m-auto px-5 py-1 border-2 border-fourth rounded-md font-bold">SOLICITAR CORTE</button>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-fifth text-white py-16 sm:py-32">
        <div className="max-w-7xl m-auto lg:flex ">
          <div className="m-auto text-center mb-8 lg:m-auto flex flex-col justify-center items-center">
            <p className="text-4xl p-0 lg:text-5xl font-extrabold">B.A.R.B.E.R </p>
            <sub className="relative  bg-fourth p-1 rounded-md text-xl lg:text-3xl font-bold px-4">CORTE DE CABELLO</sub>
          </div>

          <div className="grid sm:grid-cols-2 m-auto lg:gap-8  lg:justify-end font-bold ">
            <div className="flex flex-col gap-4 pb-8 ">
              <div className="text-center text-lg text-secondary text-transparent bg-clip-text bg-gradient-to-b from-secondary to-fifth/10 lg:text-center">SECCIÓNES</div>
              <nav className="flex gap-6 justify-center  text-seventh lg:flex-col lg:text-center">
                <Link className="ease-in duration-200 hover:text-sixth" href={"/"}>Inicio</Link>
                <Link className="ease-in duration-200 hover:text-sixth" href={"/"}>Nosotros</Link>
                <Link className="ease-in duration-200 hover:text-sixth" href={"/"}>Servicios</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-4 mb-8  ">
              <div className="text-center text-lg text-secondary text-transparent bg-clip-text bg-gradient-to-b from-secondary to-fifth/10 lg:text-center">REDES SOCIALES</div>
              <nav className="flex gap-6 justify-center text-seventh lg:flex-col lg:text-center">
                <Link href={"/"} className="ease-in duration-200 hover:text-sixth">facebook</Link>
                <Link href={"/"} className="ease-in duration-200 hover:text-third">Instagram</Link>
                <Link href={"/"} className="ease-in duration-200 hover:text-third">Tiktok</Link>
              </nav>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
