import Counter from "@/Components/Counter/Counter";
import Link from "next/link";


const HomePage = () => {
  return (
    <div>
     <Counter></Counter>
     <Link href="/about" >
            <button className="btn btn-primary">About</button>
    </Link>
    </div>
  );
};

export default HomePage;