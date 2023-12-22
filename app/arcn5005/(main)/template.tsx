"use client";


import { SlidesFooter } from "../../../components/Footer";
import { HeaderOfSlide } from "../../../components/Header";
import { slides } from "../../MainMenu";
import { ThemeContext } from "../../../middleware/Theme/context";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useContext(ThemeContext)["state"]["theme"];
  return (
    <main className={`flex flex-col h-screen justify-between `}>
      <header
        className={`top-0 sticky h-24 w-full z-50 ${
          mode === "light" ? "bg-light" : "bg-dark "
        }`}
      >
        <HeaderOfSlide slides={slides} />

    </main>
  );
}
