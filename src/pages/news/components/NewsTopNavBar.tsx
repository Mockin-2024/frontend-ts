import TopNavBar from "../../../components/common/TopNavBar";
import BackSpace from "../../../components/Icon/BackSpace";

const NewsTopNavBar = () => {
    return (
        <div>
            <TopNavBar
                Left={BackSpace}
                RightFirst={null}
                RightSecond={null}
                RightThird={null}
            />
        </div>
    )
}

export default NewsTopNavBar