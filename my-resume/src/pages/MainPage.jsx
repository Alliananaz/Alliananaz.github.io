import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Middle from "../assets/camerabuttons/Middle.svg";
import Down from "../assets/camerabuttons/Down.svg";
import Up from "../assets/camerabuttons/Up.svg";
import Left from "../assets/camerabuttons/Left.svg";
import Right from "../assets/camerabuttons/Right.svg";
import Background from "../assets/camerabuttons/Background.svg";
import CornerBorder from "../components/CornerBorder";

function Home() {
    const [selected, setSelected] = useState(0);
    const selectedRef = useRef(selected);
    const nLinks = 3;

    useEffect(() => {
        selectedRef.current = selected;
    }, [selected]);

    const pressDown = () => {
        setSelected((prev) => (prev + 1) % nLinks);
    };

    const pressUp = () => {
        setSelected((prev) => (prev === 0 ? nLinks - 1 : prev - 1));
    };

    const pressOk = (index = selected) => {
        const links = ["/projects", "/resume", "/"];
        window.location.href = links[index];
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                pressOk(selectedRef.current);
            }
            if (event.key === "ArrowDown") {
                const next = (selectedRef.current + 1) % nLinks;
                setSelected(next);
            }
            if (event.key === "ArrowUp") {
                const prev = selectedRef.current === 0 ? nLinks - 1 : selectedRef.current - 1;
                setSelected(prev);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const CameraButton = () => {
        return (
            <div className={`relative size-32 ml-5 mt-6`}>
                {/* Middle */}
                <button
                    className="absolute w-[40%] h-[40%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-transparent"
                    onClick={() => pressOk()}
                >
                    <img src={Middle} alt="Middle" className="absolute w-full h-full z-0" />
                    <span
                        className={`relative text-white text-xl font-bold z-10 leading-none`}
                    >
                        OK
                    </span>
                </button>

                {/* Up */}
                <button
                    className="absolute top-0 left-[50%] -translate-x-1/2 w-[70.8%] h-[34.2%] bg-transparent"
                    onClick={pressUp}
                >
                    <img src={Up} alt="Up" />
                </button>

                {/* Down */}
                <button
                    className="absolute bottom-0 left-[50.5%] -translate-x-1/2 w-[72%] h-[34.2%] bg-transparent"
                    onClick={pressDown}
                >
                    <img src={Down} alt="Down" />
                </button>

                {/* Left */}
                <button
                    className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[50%] h-[55%] bg-transparent"
                    onClick={pressUp}
                >
                    <img src={Left} alt="Left" />
                </button>

                {/* Right */}
                <button
                    className="absolute left-[60.8%] top-1/2 -translate-y-1/2 w-[50%] h-[55%] bg-transparent"
                    onClick={pressDown}
                >
                    <img src={Right} alt="Right" />
                </button>

                {/* Background */}
                <img src={Background} alt="ButtonBackground" />
            </div>
        );
    };

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="bg-zinc-300 p-8 flex flex-row rounded-2xl gap-2">
                <div className="flex flex-col justify-center items-center bg-white p-10 border-4">
                    <div className="relative p-10">
                        <p className="mb-12 text-3xl text-center">Welcome to my website:p</p>
                        <p className="text-xl text-center font-semibold">Please select a filter</p>
                        <ul className="list-none text-center text-xl/10 mt-4">
                            <li>
                                {selected === 0 && <span>&gt;</span>}
                                <Link to="/projects" className="text-amber-300 hover:text-amber-700" onMouseEnter={() => { setSelected(0) }}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                {selected === 1 && <span>&gt;</span>}
                                <Link to="/resume" className="text-amber-300 hover:text-amber-700" onMouseEnter={() => { setSelected(1) }}>
                                    Resume
                                </Link>
                            </li>
                            <li>
                                {selected === 2 && <span>&gt;</span>}
                                <Link to="/" className="text-amber-300 hover:text-amber-700" onMouseEnter={() => { setSelected(2) }}>
                                    Home
                                </Link>
                            </li>
                        </ul>
                        <CornerBorder/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-8 ml-5 mt-20">
                        <div className="w-12 h-12 bg-stone-950 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            MODE
                        </div>
                        <div className="w-12 h-12 bg-stone-950 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"></div>
                        </div>
                    </div>
                    <CameraButton />
                </div>
            </div>
        </div>
    );
}

export default Home;