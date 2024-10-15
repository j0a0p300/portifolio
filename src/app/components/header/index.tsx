import { ModeToggle } from "@/components/button-theme";


export function Header(){
  return(
    <header className="border h-16 w-auto flex items-center justify-end px-10">
      <ModeToggle/>
    </header>
  );
}