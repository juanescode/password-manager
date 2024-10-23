"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";
import { Button } from "@/components/ui/button";

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-slate-600 text-white">
        <SheetHeader className="text-left mb-5">
          <SheetTitle className="text-white">Passwords</SheetTitle>
        </SheetHeader>
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
}
