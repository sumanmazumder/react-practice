import Dashboard from "./Dashboard";
import WithAuth from "./WithAuth";

const ProtectedRouter = WithAuth(Dashboard);

export default ProtectedRouter;