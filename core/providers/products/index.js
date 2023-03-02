import CardContext from "./context";


export default function Provider({ children }) {
    return (
        <>
            <CardContext>
                {children}
            </CardContext>

        </>
    )
}