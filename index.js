
    function Modal() {
        const [employe, setEmploye] = React.useState([]);
        const [isLoading, setIsLoading] = React.useState(false);
    
        React.useEffect(() => {
            console.log("asdasd");
            setIsLoading(true);
            apiService.getAllEmployes().then((res) => {
                res.then
                if (res.ok) {
                    console.log(res); //first consume it in console.log
                }
            });
            setIsLoading(false);
        }, [isLoading])
        let device;
        const handleCall = (phoneClient) => {
            apiService.generateToken()
            .then(async (data) => {
                console.log("phone number", phoneClient);
                device = new Device(data.data.token);
                await device.connect(
                {params: {
                To: phoneClient
                }});
            })
        } 
    
        const declineCall = () => {
            console.log("decline");
            device.disconnectAll();
        }
    
        return (
            <div className='wrapper-modal'>
                <div className="modal">
                {!isLoading && employe.map((item) => 
                    <div className='employe' key={item.id}>
                    <p>{item.department}</p>
                    <img src={item.image}/>
                    <p style={{"fontWeight": "bold"}}>{item.name}</p>
                    <p>{item.position}</p>
                    <button onClick={() => handleCall(item.phone_number)}>Call {item.name}</button>
                    <button className="decline" onClick={() => declineCall()}>Decline</button>
                    </div>
                )}
                </div>
            </div>
        );
        }
    
    
    
            function Button({isOpen, setIsOpen}) {
            const startCall = () => {
                console.log(`Modal is ${ isOpen ? 'Closed' : 'Open'}`);
                setIsOpen(!isOpen);
            }
                
            return (
                <div>
                    <img className="img-button" src="./img/button.png" onClick={startCall} />
                    <button className="call-button" onClick={startCall}>
                    <div className="flex-button">
                        <img className="phone" src="./img/phone.png"/>
                        <p className="button-value">Lets Talk!</p>
                    </div>
                    </button>
                </div>
            );
            }
    
    
            function Main() {
            const [isOpenModal, setIsOpenModal] = React.useState(false);
    
            return (
                <div>
                    { isOpenModal ? <Modal /> : null }
                    <Button isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
                </div>
            );
            }
    
            function App() {
            return (
            <div className="App">
                <Main />
            </div>
            );
            }
    
            function Root () {
                return (
                    <App />
                );
            }
    
    
            let domContainer = document.querySelector('#root');
            ReactDOM.render(<Root />, domContainer);