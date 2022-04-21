import { UserProfileLayout } from "../Profile/Profile";
import Layout from "./Layout";
const Dashboard =()=>{


    return (<>
      <UserProfileLayout tabIndex={1}>
Dashboard...
      </UserProfileLayout>
    </>);

};

Dashboard.layout = page=><Layout children={page} />;

export default Dashboard;
