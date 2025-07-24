import { useState } from "react";
import { useRef } from "react";
import milkcarton_tn from "./assets/images/milkcarton_tn.png"
import dino_tn from "./assets/images/dino_tn.png"
import xhotel_tn from "./assets/images/xhotel_tn.png"
import milkcarton_tn from "./assets/images/milkcarton_tn.png"
import CornerBorder from "./CornerBorder";

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
        <div className="min-h-screen flex items-center justify-center p-10">
            <div className="bg-red-900 w-full max-w-5xl">
                <h1 className="text-right bg-red-200 font-semibold mb-4"> 
                    <div>PROJECT</div>
                    <div>PORTFOLIO</div>
                </h1>

                <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex flex-col gap-4 bg-blue-200 p-4">
                        <ProjectCard
                            projectnr = "01"
                            projecttitle = "Milk Carton"
                            projectimage = {milkcarton_tn}
                            onClick = {handleClick}
                            description = "jkhefo iq oeidhq eufhweuf uwefjwe uefgw uehfouwyewb iuwej wiuefhwjeb "
                        />
                        <div className="bg-red-700 rounded-xl h-100"></div>
                        <div className="bg-red-700 rounded-xl h-100"></div>
                    </div>

                    <div className="flex flex-col gap-4 bg-red-50 p-4 md:mt-30">
                        <div className="bg-red-700 rounded-xl h-100"></div>
                        <div className="bg-red-700 rounded-xl h-100"></div>
                    </div>
                </div>
                
                { showDescription && (
                    <div 
                        ref = {descriptionRef}
                        className="mt-12 p-4 bg-blue-300 rounded-xl border border-gray-200"
                    >
                        <p className="text-2xl font-semibold mb-2">
                            {showDescription.projectnr} {showDescription.projecttitle}
                        </p>
                        <p className="text-base mb-2"> {showDescription.description} </p>
                    </div>
                )}
            </div>
        </div>
    );
}

const ProjectCard = ({projectnr, projecttitle, projectimage, onClick, description}) => {
    const handleCardClick = () => {
        onClick({projecttitle, projectnr, description});
    }; 
    return(
        <div 
            className="bg-amber-200 rounded-lg shadow-lg h-100 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition"
            onClick={handleCardClick} 
        >
            <p className="p-4 text-right">
                <span className="text-3xl"> {projecttitle} </span>
                <span className="text-5xl font-semibold text-right"> {projectnr}</span>
            </p>
            <img src={projectimage} alt="projectImage" className="object-cover h-full w-auto"></img>
            <CornerBorder/>
        </div>
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