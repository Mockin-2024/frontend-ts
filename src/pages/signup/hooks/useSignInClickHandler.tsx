import useButtonClickHandler from "../../../hooks/useButtonClickHandler";


const useSignInClickHandler = () => {
    return useButtonClickHandler(() => {
        console.log("clicked");
    });
};

export default useSignInClickHandler;