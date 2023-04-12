import dynamic from "next/dynamic";
import Load from "@/components/Load";

const Home = dynamic(()=> import("@/components/Home"), {
  loading: ()=> <Load/>
});

export default function HomePage() {
  return <Home/>
}