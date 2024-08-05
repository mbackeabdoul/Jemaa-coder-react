const { Component } = React;
const ReactDOM = window.ReactDOM;

class FormulaireUtilisateur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      idModifier: null
    };
  }
  gererChangement = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  gererSoumission = (e) => {
    e.preventDefault(); 

    const { prenom, nom, email, telephone, idModifier } = this.state;

    if (idModifier) {
      this.props.onModifierUtilisateur({
        id: idModifier,
        prenom,
        nom,
        email,
        telephone
      });
      this.setState({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        idModifier: null
      });
    } else {
      this.props.onAjouterUtilisateur({
        id: Date.now(),
        prenom,
        nom,
        email,
        telephone
      });
      this.setState({
        prenom: '',
        nom: '',
        email: '',
        telephone: ''
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.utilisateur !== this.props.utilisateur) {
      const { utilisateur } = this.props;
      if (utilisateur) {
        this.setState({
          prenom: utilisateur.prenom,
          nom: utilisateur.nom,
          email: utilisateur.email,
          telephone: utilisateur.telephone,
          idModifier: utilisateur.id
        });
      }
    }
  }

  render() {
    const { prenom, nom, email, telephone, idModifier } = this.state;

    return (
      <form onSubmit={this.gererSoumission} className="shadow p-4 mb-4 bg-light">
        <div className='d-flex gap-3'>
        <div className="mb-3 w-75">
          <label htmlFor="prenom" className="form-label">Prénom</label>
          <input
            type="text"
            id="prenom"
            className="form-control"
            value={prenom}
            onChange={this.gererChangement}
            required
          />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="nom" className="form-label">Nom</label>
          <input
            type="text"
            id="nom"
            className="form-control"
            value={nom}
            onChange={this.gererChangement}
            required
          />
        </div>
        </div>
        <div className='d-flex gap-3'>
          <div className="mb-3 w-75">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={this.gererChangement}
              required
            />
          </div>
          <div className="mb-3 w-75">
            <label htmlFor="telephone" className="form-label">Téléphone</label>
            <input
              type="tel"
              id="telephone"
              className="form-control"
              value={telephone}
              onChange={this.gererChangement}
              required
            />
          </div>
        </div>
        <button type="submit" className={`btn ${idModifier ? 'btn-warning' : 'btn-success'}`}>
          {idModifier ? 'Modifier' : 'Ajouter'}
        </button>
      </form>
    );
  }
}

//beneen Composant TableauUtilisateur pour afficher la liste des utilisateurs
class TableauUtilisateur extends Component {
  render() {
    const { utilisateurs, onModifier, onSupprimer } = this.props;

    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {utilisateurs.map((utilisateur) => (
            <tr key={utilisateur.id}>
              <td>{utilisateur.prenom}</td>
              <td>{utilisateur.nom}</td>
              <td>{utilisateur.email}</td>
              <td>{utilisateur.telephone}</td>
              <td>
                <button className="btn btn-primary" onClick={() => onModifier(utilisateur.id)}>
                  Modifier
                </button>
                <button className="btn btn-danger ms-2" onClick={() => onSupprimer(utilisateur.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

// Composant principal  de l'application
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utilisateurs: JSON.parse(localStorage.getItem("utilisateurs")) || [],
      utilisateurAEditer: null
    };
  }

  ajouterUtilisateur = (utilisateur) => {
    this.setState(
      (prevState) => ({
        utilisateurs: [...prevState.utilisateurs, utilisateur]
      }),
      () => localStorage.setItem("utilisateurs", JSON.stringify(this.state.utilisateurs))
    );
  };

  modifierUtilisateur = (utilisateur) => {
    this.setState(
      (prevState) => ({
        utilisateurs: prevState.utilisateurs.map((u) =>
          u.id === utilisateur.id ? utilisateur : u
        ),
        utilisateurAEditer: null
      }),
      () => localStorage.setItem("utilisateurs", JSON.stringify(this.state.utilisateurs))
    );
  };

  supprimerUtilisateur = (id) => {
    this.setState(
      (prevState) => ({
        utilisateurs: prevState.utilisateurs.filter((u) => u.id !== id)
      }),
      () => localStorage.setItem("utilisateurs", JSON.stringify(this.state.utilisateurs))
    );
  };

  gererModifier = (id) => {
    const utilisateur = this.state.utilisateurs.find((u) => u.id === id);
    this.setState({ utilisateurAEditer: utilisateur });
  };

  render() {
    const { utilisateurs, utilisateurAEditer } = this.state;

    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Gestion des Utilisateurs</h1>
        <FormulaireUtilisateur
          onAjouterUtilisateur={this.ajouterUtilisateur}
          onModifierUtilisateur={this.modifierUtilisateur}
          utilisateur={utilisateurAEditer}
        />
        <TableauUtilisateur
          utilisateurs={utilisateurs}
          onModifier={this.gererModifier}
          onSupprimer={this.supprimerUtilisateur}
        />
      </div>
    );
  }
}
// Rendu de l'application dans l'élément avec l'ID 'root'
ReactDOM.render(<App />, document.getElementById("root"));
