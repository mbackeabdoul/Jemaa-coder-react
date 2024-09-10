class EssaieCoder extends React.Component{
    constructor (props){
        super(props)
        this.state={
         prenomInput : "",
         nomInput: "",
         emailInput:"",
         telephoneInput:"",
         table:[]
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        const tableu ={
            prenom : this.state.prenomInput,
            nom : this.state.nomInput,
            email : this.state.emailInput,
            telephone: this.state.telephoneInput,
        }
        this.setState({table : [tableu, ...this.state.table]})
    }
    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <label>Prenom</label>
                        <input type="text"
                         value={this.state.prenomInput}
                         onChange={(e)=> {
                            this.setState({prenomInput : e.target.value})
                         }}
                        className="form-control"
                        />
                    </div>
                    <div className="col-6">
                        <label>Nom</label>
                        <input type="text"
                        value={this.state.nomInput}
                         onchange ={(e)=>{
                            this.setState({nomInput : e.target.value})
                         }}
                        className="form-control"
                        />
                    </div>
                </div>

                    <div className="row">
                    <div className="col-6">
                        <label>Email</label>
                        <input type="text"
                         value={this.state.emailInput}
                         onChange={(e)=> {
                            this.setState({emailInput : e.target.value})
                         }}
                        className="form-control"
                        />
                    </div>

                    <div className="col-6">
                        <label>Telephone {this.state.telephoneInput}</label>
                        <input type="text"
                         value={this.state.telephoneInput}
                         onChange={(e)=>{
                            this.setState({telephoneInput: e.target.value})
                         }}
                        className="form-control"
                        />
                    </div>
                    </div>
                <button className="mt-2 btn btn-primary w-100"
                onClick={this.handleClick}
                >Envoyer</button>
    
                <div className="container mt-4">
                    <h5 className="text-center mt-3">Afficher</h5>
                    <table  class="table">
                        <thead>
                            <tr>
                            <th scope="col">Prenom</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telephone</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.map((tab) =>{
                                return (
                                    <tr>
                                        <td>{tab.prenom}</td>
                                        <td>{tab.nom}</td>
                                        <td>{tab.email}</td>
                                        <td>{tab.telephone}</td>
                                        {/* <button onClick={} className="btn-danger">Supprimer</button> */}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>  
        )
    }
}

ReactDOM.render(<EssaieCoder/>, document.getElementById("root"))