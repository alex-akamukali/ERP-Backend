import { useForm } from "@inertiajs/inertia-react";

const Dashboard = ({ logout_route, csrf }) => {
    const { post } = useForm();
    const logOut = () => {
        post(logout_route, {
            __token: csrf,
        });
    };
    return (
        <>
            <div>
                Dashboard ....
                <button onClick={logOut}>Logout</button>
            </div>
        </>
    );
};
export default Dashboard;
