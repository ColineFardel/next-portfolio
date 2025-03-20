import RetroWindow from "./retro-window";

export default function Title({ title }: { title: string }) {

    return (
        <div className="w-full items-center flex justify-center mt-10 text-center">
            <RetroWindow extraStyling="w-md" smallTitle primary title="Title" body={<div className="font-bold text-xl">{title}</div>} />
        </div>
    )
}