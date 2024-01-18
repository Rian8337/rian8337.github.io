import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import "./assets/main.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Drawer from "./components/drawer/Drawer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import PostList from "./pages/PostList";
import { useEffect } from "react";
import scrollex from "./utils/scrollex";
import breakpoints from "./utils/breakpoints";

export default function App() {
    useEffect(() => {
        // Breakpoints.
        breakpoints.init({
            xlarge: ["1281px", "1680px"],
            large: ["981px", "1280px"],
            medium: ["737px", "980px"],
            small: ["481px", "736px"],
            xsmall: ["361px", "480px"],
            xxsmall: [null, "360px"],
        });

        // Play initial animations on page load.
        const preloadTimeout = setTimeout(() => {
            document.body.classList.remove("is-preload");
        }, 100);

        // Scrollex initialization.
        scrollex.init();

        return () => {
            breakpoints.dispose();
            scrollex.dispose();

            clearTimeout(preloadTimeout);
        };
    });

    return (
        <>
            <Drawer />
            <Header />

            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<PostList />} />
                    <Route
                        path="/post/:year/:month/:index"
                        element={<PostPage />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>

            <Footer />
        </>
    );
}
