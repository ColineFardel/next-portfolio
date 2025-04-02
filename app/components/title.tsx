import RetroWindow from "./retro-window";

export default function Title({ title, primary }: { title: string, primary?: boolean }) {

    return (
        <div className="w-full items-center flex justify-center mt-25 text-center">
            <RetroWindow extraStyling="w-xs" smallTitle primary={primary} title="Title" body={<div className="font-bold sm:text-sm md:text-xl">{title}</div>} />
        </div>
    )
}