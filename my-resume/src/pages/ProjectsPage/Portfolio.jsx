import { useState } from "react";
import { useRef } from "react";
import milkcarton_tn from "../../assets/images/milkcarton_tn.png"
import dino_tn from "../../assets/images/dino_tn.png"
import xhotel_tn from "../../assets/images/xhotel_tn.png"
import solmate_tn from "../../assets/images/solmate2_tn.png"
import CornerBorder from "../../components/CornerBorder";
import BackButton from "../../components/BackButton";


export default function Portfolio(){
    const [showDescription, setShowDescription] = useState(null);
    const descriptionRef = useRef(null);

    const handleClick = (project) => {
        setShowDescription(project);
        setTimeout(() => {
            if (descriptionRef.current){
                descriptionRef.current.scrollIntoView({behavior: 'smooth'});
            }
        }, 100);
    };

    return(
        <div className="min-h-dvh px-4 py-5 sm:px-6 sm:py-8">
            <div className="mx-auto w-full max-w-3xl">
                <BackButton/>
                <div className="mt-6 mb-4">
                    <h1 className="text-right text-neutral-800 font-semibold mb-4 text-4xl leading-none sm:text-5xl">
                        <div>PROJECT</div>
                        <div>PORTFOLIO</div>
                    </h1>
                    <footer className="text-right text-sm sm:text-base">
                        <p>&copy; {new Date().getFullYear()} Made by Alliana:p </p>
                    </footer>
                </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-2">
                        <div className="flex flex-col gap-6 sm:gap-12 md:p-4">
                            <ProjectCard
                                projectnr = "01"
                                projectyear = "2025 - IN2000 course project"
                                projecttitle = "SolMate App"
                                projectimage = {solmate_tn}
                                onClick = {handleClick}
                                description = {
                                    <div>
                                        <div>
                                            <img src={solmate_tn} alt="projectImage" className="w-full max-w-md h-auto object-contain mx-auto rounded-xl"></img>
                                        </div>
                                        <div className="space-y-4 mt-6">
                                            <p>'SolMate' is an app my team and I developed as a group project for the course IN2000 - Software Engineering with project work. 
                                                Developed using Kotlin and Jetpack Compose, the app estimates how much electricity solar panels can potencially produce on users' property, and
                                                that can help them assess whether an investment in solar panels will be profitable. 
                                            </p>
                                            <p> The app is aimed at both users who have previous experience and/or knowledge of solar panels and energy, and users with less experience.
                                                Not for commersial use. 
                                            </p>
                                            {/* The <ul> is a sibling of the <p>, not a child: a
                                                list nested inside a paragraph is invalid HTML and
                                                the browser silently closes the <p> before it. */}
                                            <p>We used multiple APIs for the development of the app, including:</p>
                                            <ul className="ms-5 list-disc space-y-1">
                                                <li>Frost (MET) - Weather data (avg. temperature, cloud cover and snow cover) used to calculate electricity production and savings</li>
                                                <li>PVGIS (Photovoltaic Geographical Information System) - Relevant data about solar radiation</li>
                                                <li>HvaKosterStrømmen - Real-time electricity prices based on different price areas in Norway</li>
                                                <li>Mapbox - Map and for searching up addresses. The adresses are linked to the coordinates that are sent to the other APIs that need it for their data</li>
                                            </ul>
                                            <p>My tasks were mainly datacollection, dataanalysis and UX/UI</p>
                                        </div>
                                    </div>
                                }
                            />
                            <ProjectCard
                                projectnr = "02"
                                projectyear = "2024 - IN1060 course project"
                                projecttitle = "Milk Carton"
                                projectimage = {milkcarton_tn}
                                onClick = {handleClick}
                                description = {
                                    <div>
                                        <div>
                                            <img src={milkcarton_tn} alt="projectImage" className="w-full max-w-md h-auto object-contain mx-auto rounded-xl"></img>
                                        </div>
                                        <p className="mt-4">This smart milk carton was a tangible prototype my team, Innotink, designed and produced for the IN1060 - User-oriented design course. 
                                            This project’s main goal was to collaborate closely with users and create a technical solution related to the theme “on/off”. 
                                            The icons serves as a signal for both users and customers when type of milk is low or empty. 
                                            More details about the project can be found on Innotink’s website via IN1060 course page
                                        </p>
                                    </div>
                                }
                            />
                            <ProjectCard
                                projectnr = "03"
                                projectyear = "2022 - IT2 course assignment"
                                projecttitle = "Dino Game"
                                projectimage = {dino_tn}
                                onClick = {handleClick}
                                description = "Dino-Game is a game I developed as a part of an assignemnt for my highschool IT2 course, inspired by Google's iconic dinosaur game. This assignment was coded using Python and Pygame, and was programmed using Thonny."
                            />
                        </div>

                        <div className="flex flex-col gap-6 sm:gap-12 md:p-4 md:mt-30">
                            <ProjectCard
                                projectnr = "04"
                                projectyear = "2021 - IT1 course assignment"
                                projecttitle = "X-Hotel Website"
                                projectimage = {xhotel_tn}
                                onClick = {handleClick}
                                description = "'X Hotel is a website I developed as an assignment for my highschool IT1 course. This assignment was coded in Visual Studio Code, using HTML and CSS. The code to the website is on my GitHub under XXX."
                            />
                            <ProjectCard
                                projectnr = "05"
                                projectyear = "2025 - Summer project"
                                projecttitle = "This Website"
                                projectimage= "/ANlogo.png"
                                onClick = {handleClick}
                                description = {
                                    <div>
                                        <div>
                                            <img src="/ANlogo.png" alt="projectImage" className="w-full max-w-md object-contain mx-auto rounded-xl"></img>
                                        </div>
                                        <p className="mt-6"> papoi
                                        </p>
                                    </div>
                                }
                            />
                            
                        </div>
                    </div>
                    
                { showDescription && (
                    <div
                        ref = {descriptionRef}
                        className="relative mt-10 p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200"
                    >
                        <p className="text-xl sm:text-2xl font-semibold mb-2">
                            {/* {showDescription.projectnr}  */}
                            {showDescription.projecttitle}
                        </p>
                        <p className="text-sm sm:text-base text-gray-500">{showDescription.projectyear}</p>
                        <div className="mt-4 text-sm sm:text-base space-y-2"> {showDescription.description} </div>
                        <CornerBorder/>
                    </div>
                )}
            </div>
        </div>
    );
}

const ProjectCard = ({projectnr, projectyear, projecttitle, projectimage, onClick, description}) => {
    const handleCardClick = () => {
        onClick({projectnr, projectyear, projecttitle, description});
    }; 
    return(
        /* A flex column so the image takes whatever height is left under the
           title instead of being given the card's full height and spilling out
           the bottom. `min-h-0` is what lets that flex child actually shrink. */
        <button
            type="button"
            className="flex w-full flex-col rounded-lg shadow-lg h-72 sm:h-90 border border-gray-200 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition text-left bg-transparent p-0"
            onClick={handleCardClick}
        >
            <p className="p-4 sm:p-6 me-2 w-full text-right">
                <span className="text-2xl sm:text-3xl text-neutral-800 font-semibold"> {projecttitle} </span>
                {/* <span className="text-5xl font-semibold text-right"> {projectnr}</span> */}
            </p>
            <img src={projectimage} alt={projecttitle} className="min-h-0 w-full flex-1 object-contain"></img>
            <CornerBorder/>
        </button>
    );
}



{/* <div className="bg-red-300 grid grid-cols-10 gap-2">
    <div className="col-span-5 bg-blue-200 p-4 gap-4">
        <div className="bg-red-700 rounded-2xl h-100"></div>
        <br/>
        <div className="bg-red-700 rounded-xl h-100"></div>
        <br/>
        <div className="bg-red-700 rounded-xl h-30"></div>
    </div>
    <div className="col-span-5 col-start-6 bg-red-50 p-4 gap-4 mt-36">
        <div className="bg-red-700 rounded-xl h-100"></div>
        <br/>
        <div className="bg-red-700 rounded-xl h-100"></div>
    </div>
</div> */}
{/* <div className="bg-red-600 grid grid-cols-2 sm:grid-cols-1 gap-6">
    <div className="bg-red-300 rounded-xl h-100"></div>
    <div className="bg-red-300 rounded-xl h-100 mt-20"></div>
    <div className="bg-red-300 rounded-xl h-100"></div>
    <div className="bg-red-300 rounded-xl h-100"></div>
    <div className="bg-red-300 rounded-full h-16 max-sm:col-span-1 col-span-2"></div>
</div> */}