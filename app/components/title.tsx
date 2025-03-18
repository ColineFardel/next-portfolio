export default function Title({ title }: { title: string }) {

    return (
        <div>
            <h1 className="text-2xl font-bold pt-18 m-auto text-center">{title}</h1>
            <div className="border-t-1 border-black w-[50%] m-auto"></div>
        </div>
    )
}