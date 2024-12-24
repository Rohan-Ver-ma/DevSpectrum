import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {

  
  return (
    <>
      <section className="text-gray-600 dark:text-neutral-50 dark:bg-neutral-950 body-font mb-2">
        <div className="container px-5 mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-4">
              <h1 className="sm:w-2/5 text-gray-900 dark:text-neutral-50 tracking-tighter font-semibold text-5xl mb-1 sm:mb-0">
                Discover
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-5">
            <Link to="/">
              <Button className="dark:focus:bg-neutral-950 dark:focus:text-neutral-50">
                All
              </Button>
            </Link>
            <Link to="/crypto-web3">
              <Button className="dark:focus:bg-neutral-950 dark:focus:text-neutral-50">
                Crypto & Web3
              </Button>
            </Link>
            <Link to="/artificial-intelligence">
              <Button className="dark:focus:bg-neutral-950 dark:focus:text-neutral-50">
                Artificial Intelligence
              </Button>
            </Link>
            <Link to="/business">
              <Button className="dark:focus:bg-neutral-950 dark:focus:text-neutral-50">
                Business
              </Button>
            </Link>
            <Link to="/finance">
              <Button className="dark:focus:bg-neutral-950 dark:focus:text-neutral-50">
                Finance
              </Button>
            </Link>
            <Link to="/entertainment">
              <Button className="dark:focus:bg-neutral-950 dark:focus:text-neutral-50">
                Entertainment
              </Button>
            </Link>
            <Link to="/health">
              <Button className="dark:focus:bg-neutral-950 dark:focus:text-neutral-50">
                Health & Fitness
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
