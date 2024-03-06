import { useContext } from "react";
import { TransactionContext } from "../Context/Transaction_Context";

const HomeRight = () => {

    const {handleData,formData,sendTransaction} = useContext(TransactionContext);

    const handleSubmit = (e)=> {
        e.preventDefault();
        const {addressTo,amount,keyword,message} = formData;

        if(!addressTo || !amount || !keyword || !message){
            alert("Please fill all details to send ether");
        }

        sendTransaction();
    }

    return(
        <div className="home_right">
            <div className = "home_right_form">
                <p>Send Crypto across the world</p>
                <p>Explore the crypto world.Buy and sell cryptocurrencies easily on bitBank..</p>
                <form>
                    <input placeholder="Address To" type= "text" name="addressTo" onChange={handleData}/>
                    <input placeholder="Amount(ETH)" type= "text" name="amount" onChange={handleData}/>
                    <input placeholder="Keyword" type= "text" name = "keyword" onChange={handleData}/>
                    <input placeholder="Enter Message" type= "text" name="message" onChange={handleData}/>
                    <button onClick={handleSubmit}>Send Ethers</button>
                </form>
            </div>
        </div>
    )
}

export default HomeRight;