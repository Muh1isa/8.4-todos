import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import List from "./components/List";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <List />
    </>
  );
}
