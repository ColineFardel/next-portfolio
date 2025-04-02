import RetroWindow from "./retro-window";
import Title from "./title";

export default function Experiences() {

    const extraStyling = 'w-full sm:w-2/7';

    return(
        <section id="experiences" className="h-screen bg-(--secondary) flex flex-col">
            <Title primary title="Experiences"/>
            <div className="flex flex-col sm:flex-row justify-around items-center h-full lg:w-[80%] sm:m-auto md:pb-40 ">
                <RetroWindow extraStyling={extraStyling} primary title="Intern" body={
                    <div className="exp-body">
                        <p>C:Windows&gt;company</p>
                        <p>HES-SO Valais-Wallis</p>
                        <br />
                        <p>C:Windows&gt;period</p>
                        <p>2021</p>
                        <br />
                        <p>C:Windows&gt;tasks</p>
                        <p>Research</p>
                        <p>Presentation clients</p>
                        <br />
                        <p>C:Windows&gt;_</p>
                    </div>
                }/>
                <RetroWindow extraStyling={extraStyling} primary title="Backend Developer" body={
                    <div className="exp-body">
                    <p>C:Windows&gt;company</p>
                    <p>Fiducial Winbiz</p>
                    <br />
                    <p>C:Windows&gt;period</p>
                    <p>2021-2022</p>
                    <br />
                    <p>C:Windows&gt;tasks</p>
                    <p>Development web app for accountability</p>
                    <p>Documentation Swagger for REST API</p>
                    <p>Development admin page in React</p>
                    <p>Development connection features in PHP Laravel</p>
                    <br />
                    <p>C:Windows&gt;_</p>
                </div>
                }/>
                <RetroWindow extraStyling={extraStyling} primary title="Fullstack Developer" body={
                    <div className="exp-body">
                    <p>C:Windows&gt;company</p>
                    <p>Utopix</p>
                    <br />
                    <p>C:Windows&gt;period</p>
                    <p>2022-2024</p>
                    <br />
                    <p>C:Windows&gt;tasks</p>
                    <p>Development PLM for luxury clock industry</p>
                    <p>Adaptation survey feature both backend and frontend</p>
                    <br />
                    <p>C:Windows&gt;_</p>
                </div>
                }/>
            </div>
        </section>
    );
}