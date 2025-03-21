import RetroWindow from "./retro-window";
import Title from "./title";

export default function Experiences() {

    return(
        <section id="experiences" className="h-screen bg-(--secondary) flex flex-col">
            <Title primary title="Experiences"/>
            <div className="flex justify-around items-center h-full">
                <RetroWindow extraStyling="w-2/7" primary title="Intern" body={
                    <div className="exp-body">
                        <p>C:Windows&gt;company</p>
                        <p>HES-SO Valais-Wallis</p>
                        <p>C:Windows&gt;period</p>
                        <p>2021</p>
                        <p>C:Windows&gt;tasks</p>
                        <p>Research</p>
                        <p>Presentation clients</p>
                        <p>C:Windows&gt;_</p>
                    </div>
                }/>
                <RetroWindow extraStyling="w-2/7" primary title="Backend Developer" body={
                    <div className="exp-body">
                    <p>C:Windows&gt;company</p>
                    <p>Fiducial Winbiz</p>
                    <p>C:Windows&gt;period</p>
                    <p>2021-2022</p>
                    <p>C:Windows&gt;tasks</p>
                    <p>Development web app for accountability</p>
                    <p>Documentation Swagger for REST API</p>
                    <p>Development admin page in React</p>
                    <p>Development connection features in PHP Laravel</p>
                    <p>C:Windows&gt;_</p>
                </div>
                }/>
                <RetroWindow extraStyling="w-2/7" primary title="Fullstack Developer" body={
                    <div className="exp-body">
                    <p>C:Windows&gt;company</p>
                    <p>Utopix</p>
                    <p>C:Windows&gt;period</p>
                    <p>2022-2024</p>
                    <p>C:Windows&gt;tasks</p>
                    <p>Development PLM for luxury clock industry</p>
                    <p>Adaptation survey feature both backend and frontend</p>
                    <p>C:Windows&gt;_</p>
                </div>
                }/>
            </div>
        </section>
    );
}