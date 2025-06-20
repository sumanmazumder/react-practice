import CreateContext from "./CreateContext";
import Count from "./Count";
const ContextTwo = () => {
  return (
    <>
        <h2>Context two</h2>
        <CreateContext>
            <Count />
        </CreateContext>
    </>
  )
}

export default ContextTwo