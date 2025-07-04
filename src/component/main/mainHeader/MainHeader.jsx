import Expend from "./expend/Expend";
import Goal from "./goal/Goal";

export default function MainHeader() {
    return (
        <section className='mainHeader'>
            <Goal />
            <Expend />
        </section>
    )
}