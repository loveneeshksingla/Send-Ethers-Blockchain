import React, {useEffect , useState} from 'react';
import {ethers} from 'ethers';
import {contractABI,contractAddress} from '../../Constants'




export const TransactionContext = React.createContext();


const {ethereum} = window;


const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);


    return transactionContract;
}

export const TransactionProvider = ({children}) => {
    const [connectedAccount,setConnectedAccount] = useState();
    const [currentAccount,setCurrentAccount]=useState();
    const [formData,setFormData] = useState({addressTo:"",amount:"",keyword:"",message:""});

    const handleData = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const connectWallet = async () => {
        console.log("inside connect wallet")
        try{
            if(!ethereum) return alert("Please install Metamask");
            const accounts = await ethereum.request({method:"eth_requestAccounts"});
            console.log(accounts,"<===accounts")
            setConnectedAccount(accounts[0]);
        }catch(error){
            console.error(error,"<===error")
        }
    }

    const sendTransaction = async() =>{
        try{
            if(!ethereum) return alert("Please install metamask");
            const {addressTo, amount, keyword, message} = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);
            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from:currentAccount,
                    to:addressTo,
                    gas:'0x5208',
                    value:parsedAmount._hex,
                }]
            });
            const transactionHash = await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);
            console.log("Loading",transactionHash);
            await transactionHash.wait();
            // setFormData({addressTo:"",amount:"",keyword:"",message:""})
        }catch(error){
            console.log(error,"<===error")
        }
    }

    const checkIfWalletIsConnected = async () => {
        try{
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({method: "eth_accounts"});
            if(accounts.length){
                setCurrentAccount(accounts[0]);
            }else{
                console.log("no account found")
            }
        }catch(err){
            console.log(err,"<====error")
        }
    }

    useEffect(()=>{
        checkIfWalletIsConnected();
    },[connectedAccount])

    

    return(
        <TransactionContext.Provider value = {{connectWallet,currentAccount,handleData,formData,sendTransaction}}>
            {children}
         </TransactionContext.Provider>
    )
}


