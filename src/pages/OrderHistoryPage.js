import { checkToken } from "../utilities/users-service";



const OrderHistoryPage = () => {
    const handleCheckToken = async () =>{
        const expirationDate = await checkToken ()
        console.log(expirationDate);  
      }
    return(
    <div>
     <h1>OrderHistoryPage</h1>
     <button onClick={handleCheckToken}>"Check When My Login Expires"</button>
    </div>
    );
}


export default OrderHistoryPage;