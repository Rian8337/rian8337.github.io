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
import DummyLogin from "./pages/DummyLogin";
import DummyPrivacyPolicy from "./pages/DummyPrivacyPolicy";

export default function App() {
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
                    <Route path="/login" element={<DummyLogin />} />
                    <Route
                        path="/privacy-policy"
                        element={<DummyPrivacyPolicy />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>

            <Footer />
        </>
    );
}
