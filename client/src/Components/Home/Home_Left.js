
import { useContext } from 'react';
import { TransactionContext } from '../Context/Transaction_Context';

const HomeLeft = () =>{

    const {connectWallet,currentAccount} = useContext(TransactionContext);
    console.log(currentAccount,"<====currentAccount")
    return( 
        <div className = "home_left">
            <div className = "home_left_upper">
                <p>Connect To World....</p>
            </div>
            {!currentAccount?
            <div className = "home_left_lower">
                <p>Please connect to wallet to send ethers</p>
                <button onClick={connectWallet}>Connect</button>
            </div>
            :
            <div className = "home_left_lower">
                <p>Wallet is connected with Address.......</p>
                <p>{currentAccount.slice(0,14)}.............{currentAccount.slice(29,currentAccount.length)}</p>
            </div>
            }
        </div>
    )
}

export default HomeLeft;