class JangReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turInput: '',
      santInput: '',
      mailInput: '',
      limateInput: '',
      table: [],
      modifierIndex:null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSupprimer = this.handleSupprimer.bind(this); 
    this.handleModifier=this.handleModifier.bind(this)
  }
    handleClick() {
      const samaObjet = {
        prenom: this.state.turInput,
        nom: this.state.santInput,
        email: this.state.mailInput,
        telephone:this.state.limateInput
      };
    // ajouter un nouveau codeur
    this.setState({ table: [samaObjet, ...this.state.table]});
    // vider le formulaire
    this.setState({
      turInput: "",
      santInput: "",
      mailInput: "",
      limateInput: ""
    });

    }
    

    //  modifier
    handleModifier (index){
        const idModif = this.state.table[index]
        this.setState({//dafniouy may niou modifier li nekkoon ci etat bi
            turInput: idModif.prenom,
           santInput:idModif.nom,
           mailInput:idModif.email,
           telephone:idModif.telephonec,
           modifierIndex: index 
        })
    }

    // handleSave (){
    //     if){

    //     }
    // }
    handleSupprimer(index){
        const Supprimer = this.state.table.filter((_, i) => i !== index);
        this.setState({table : Supprimer})
    }

  render(){
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <label>Prenom</label>
            <input
              type="text"
              value={this.state.turInput}
              onChange={(e) => {
                this.setState({ turInput: e.target.value });
              }}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Nom</label>
            <input
              type="text"
              value={this.state.santInput}
              onChange={(e) => {
                this.setState({ santInput: e.target.value });
              }}
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <label>Email</label>
            <input
              type="text"
              value={this.state.mailInput}
              onChange={(e) => {
                this.setState({ mailInput: e.target.value });
              }}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Telephone</label>
            <input
              type="text"
              value={this.state.limateInput}
              onChange={(e) => {
                this.setState({ limateInput: e.target.value });
              }}
              className="form-control"
            />
          </div>
        </div>
        <button
          className="btn btn-primary mt-2 w-100"
          onClick={this.handleClick}
        >
          Envoyer
        </button>
        {/* <button
                                onClick={()=> this.handleModifier(index)}
                                    className="btn btn-warning ms-2">Modifier</button>  */}
        <div className="mt-5 container">
            <h3 className="text-center">Affiche</h3>
            <table class="table">
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
                {this.state.table.map((tab, index) => {
                  return (
                    <tr>
                      <td key={index}>{tab.prenom}</td>
                      <td>{tab.nom}</td>
                      <td>{tab.email}</td>
                      <td>{tab.telephone}</td>
                        <td>
                           <button
                           onClick={()=> this.handleSupprimer(index)}
                            className="btn btn-danger"> Supprimer</button> 
                        <button
                           onClick={()=> this.handleModifier(index)}
                            className="btn btn-warning ms-2">Modifier</button> 
                        </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}
ReactDOM.render(<JangReact />, document.getElementById('root'));
