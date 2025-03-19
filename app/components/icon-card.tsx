export default function IconCard({ icon }: { icon: string }) {

    return (
        <div className="bg-(--secondary) p-4 rounded-lg w-[60px] h-[60px]">
            <img src={icon} alt="" />
        </div>
    )
}