import Link from "next/link";
import { playfairDisplay } from "./layout";

export default function Home() {
  return (
    <div>
      <header className="fixed w-full">
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Contact Us</Link>
        </nav>
        <div>
          <h4>barberia</h4>
        </div>
        <nav>
          <Link href={"/"}>Our Services</Link>
          <Link href={"/"}>Membership</Link>
          <Link href={"/"}>Shop Now</Link>
        </nav>
      </header>
      <section className="h-screen relative">
        <img
          className="w-full h-full object-cover"
          src="https://static.wixstatic.com/media/bd10eec5564a47b78638ff005f18261d.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bd10eec5564a47b78638ff005f18261d.jpg"
          alt=""
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
                <span className="bg-neutral-200 text-black px-2 rounded-lg">
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
      <section>
        <header>
          <h2>About Us</h2>
          <p>The Barber Shop Since 2020</p>
        </header>
        <div>
          <div></div>
          <div>
            <h3>We Will Change Your Our Looks</h3>
            <p>Handcrafted by our talented barbers</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
              voluptate! Corrupti sapiente nemo expedita, rem explicabo mollitia
              hic? Provident dignissimos quaerat aperiam eligendi culpa,
              praesentium quos similique aliquam repellat reprehenderit!
            </p>
            <div>
              <div>
                <p>22</p>
                <p>Year Of Experience</p>
              </div>
              <div>
                <p>26</p>
                <p>Our Awesome Expect</p>
              </div>
            </div>
            <button>Lear More</button>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h2>Our Services</h2>
        </header>
        <div className="grid grid-cols-4">
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <h3>Hair Cut</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos exercitationem molestiae, voluptatum doloribus
              accusantium, consequuntur, dolore ab nesciunt sit quo impedit
              velit alias unde soluta pariatur. Adipisci accusamus et nisi.
            </p>
            <button>Start at forty dollors</button>
          </div>
        </div>
        <div>
          <button>learn more</button>
        </div>
      </section>
      <section>
        <header>
          <h2>Enjoy Our Gallery</h2>
        </header>
        <div className="grid grid-cols-4">
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h2>logo</h2>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
          dignissimos fuga pariatur
        </h3>
        <button>learn more</button>
      </section>

      <footer>
        <div>logo</div>

        <div className="grid grid-cols-4">
          <div>
            <div>Nav</div>
            <nav>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Home</Link>
            </nav>
          </div>
          <div>
            <div>Nav</div>
            <nav>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Home</Link>
            </nav>
          </div>
          <div>
            <div>Nav</div>
            <nav>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Home</Link>
            </nav>
          </div>
          <div>
            <div>Nav</div>
            <nav>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Home</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
