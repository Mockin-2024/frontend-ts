import React from "react";

import TopNavBar from "../../../components/common/TopNavBar";
import BackSpace from "../../../components/Icon/BackSpace";

const FavoriteTopNavBar: React.FC = () => {
    return(
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

export default FavoriteTopNavBar