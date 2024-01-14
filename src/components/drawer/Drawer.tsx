import { useState } from "react";
import DrawerButton from "./DrawerButton";
import DrawerContent from "./DrawerContent";
import DrawerBackdrop from "./DrawerBackdrop";
import { AnimatePresence } from "framer-motion";

export default function Drawer() {
    const [open, setOpen] = useState(false);

    return (
        <div className="drawer-container">
            <DrawerButton
                onClick={() => {
                    setOpen(true);
                }}
            />

            <AnimatePresence mode="wait">
                {open ? (
                    <section>
                        <DrawerContent
                            onEntryClick={() => {
                                setOpen(false);
                            }}
                        />
                        <DrawerBackdrop
                            onClick={() => {
                                setOpen(false);
                            }}
                        />
                    </section>
                ) : null}
            </AnimatePresence>
        </div>
    );
}
