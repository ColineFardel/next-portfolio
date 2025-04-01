import Icon from "./icon";

export default function IconCard({ icon, name, knowledge }: { icon: string, name: string, knowledge: number }) {

    const starArray = Array.from({ length: knowledge }, (element, index) => index);
    const emptyArray = Array.from({ length: 5 - knowledge }, (element, index) => index);

    return (
        <div className="icon-card relative">
            <div className="absolute w-[90%] h-[90%] left-[50%] top-[50%] transform-[translate(-50%,-50%)]">
                <Icon styles="icon-img w-full h-full object-contain" iconName={icon} />
            </div>

            <div className="hidden-text w-full h-full flex flex-col gap-2 items-center justify-center">
                <div>{name}</div>
                <div className="">
                    {starArray.map((el) => <Icon key={el} styles="inline" iconName="star-full" />)}
                    {emptyArray.map((el) => <Icon key={el} styles="inline" iconName="star-empty" />)}
                </div>
            </div>
        </div>
    )
}