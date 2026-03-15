import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Contact } from "./contact";

interface ContactSheetProps {
    handleClose: () => void;
    open: boolean;
}

export function ContactSheet({ handleClose, open }: ContactSheetProps) {
  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetTrigger>{""}</SheetTrigger>
      <SheetContent className=" h-full flex justify-center items-center overflow-auto pt-0" side="bottom">
        <Contact/>
      </SheetContent>
    </Sheet>
  );
}
