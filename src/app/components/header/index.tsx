import { ModeToggle } from "@/components/button-theme";


export function Header(){
  return(
    <header className="border h-16 flex items-center justify-end px-10 w-screen">
      <ModeToggle/>
    </header>
  );
}