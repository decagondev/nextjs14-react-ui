"use client";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
    const pathName = usePathname();
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    useEffect(() => {
        onClose();
    },[pathName, onClose])

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Button
            onClick={onOpen}
            className="block md:hidden mr-2"
            variant="ghost"
            size="sm"
            >
            <Menu className="h-4 w-4" />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side="left" className="p-2 pt-10">
                    <Sidebar storageKey="t-sidebar-mobile-state"/>
                </SheetContent>
            </Sheet>
        </>
    );
}