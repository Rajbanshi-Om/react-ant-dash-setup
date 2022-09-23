import { useFetchData } from "../../hooks/useDefault";


const AgentsPage = () => {
    const {data} = useFetchData()
    return ( 
        <div>this is agents page</div>
     );
}
 
export default AgentsPage;