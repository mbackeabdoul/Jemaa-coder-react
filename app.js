// // Importation de React et ReactDOM depuis les CDNs pour le développement
// const { useState, useEffect } = React;
// const ReactDOM = window.ReactDOM;

// // Composant principal de l'application
// function App() {
//   // Déclaration des états du composant
//   const [prenom, setPrenom] = useState(""); // État pour le prénom
//   const [nom, setNom] = useState(""); // État pour le nom
//   const [email, setEmail] = useState(""); // État pour l'email
//   const [telephone, setTelephone] = useState(""); // État pour le téléphone
//   const [utilisateurs, setUtilisateurs] = useState([]); // État pour la liste des utilisateurs
//   const [idModifier, setIdModifier] = useState(""); // État pour l'ID de l'utilisateur à modifier

//   // Hook useEffect pour charger les utilisateurs depuis le localStorage au démarrage du composant
//   useEffect(() => {
//     // Chargement des utilisateurs depuis le localStorage
//     const utilisateursStockes = JSON.parse(localStorage.getItem("utilisateurs")) || [];
//     setUtilisateurs(utilisateursStockes);
//   }, []);

//   // Fonction pour gérer les changements dans les champs du formulaire
//   const gererChangement = (setter) => (e) => {
//     setter(e.target.value); // Met à jour l'état avec la nouvelle valeur du champ
//   };

//   // Fonction pour gérer la soumission du formulaire
//   const gererSoumission = (e) => {
//     e.preventDefault(); // Empêche le rechargement de la page

//     if (idModifier) {
//       // Si un utilisateur est en mode modification
//       const utilisateursMiseAJour = utilisateurs.map((utilisateur) =>
//         utilisateur.id === idModifier
//           ? { id: idModifier, prenom, nom, email, telephone } // Met à jour l'utilisateur
//           : utilisateur
//       );
//       setUtilisateurs(utilisateursMiseAJour); // Met à jour l'état des utilisateurs
//       localStorage.setItem("utilisateurs", JSON.stringify(utilisateursMiseAJour)); // Sauvegarde dans le localStorage
//       setIdModifier(""); // Réinitialise l'ID de l'utilisateur à modifier
//     } else {
//       // Si c'est un nouvel utilisateur
//       const nouvelUtilisateur = {
//         id: Date.now(), // Utilisation de Date.now() pour générer un ID unique
//         prenom,
//         nom,
//         email,
//         telephone,
//       };
//       const utilisateursMiseAJour = [...utilisateurs, nouvelUtilisateur];
//       setUtilisateurs(utilisateursMiseAJour); // Met à jour l'état des utilisateurs
//       localStorage.setItem("utilisateurs", JSON.stringify(utilisateursMiseAJour)); // Sauvegarde dans le localStorage
//     }

//     // Réinitialisation du formulaire
//     setPrenom("");
//     setNom("");
//     setEmail("");
//     setTelephone("");
//   };

//   // Fonction pour gérer la modification d'un utilisateur
//   const gererModification = (id) => {
//     const utilisateur = utilisateurs.find((utilisateur) => utilisateur.id === id);
//     if (utilisateur) {
//       setPrenom(utilisateur.prenom);
//       setNom(utilisateur.nom);
//       setEmail(utilisateur.email);
//       setTelephone(utilisateur.telephone);
//       setIdModifier(id); // Définit l'ID de l'utilisateur à modifier
//     }
//   };

//   // Fonction pour gérer la suppression d'un utilisateur
//   const gererSuppression = (id) => {
//     const utilisateursMiseAJour = utilisateurs.filter((utilisateur) => utilisateur.id !== id);
//     setUtilisateurs(utilisateursMiseAJour); // Met à jour l'état des utilisateurs
//     localStorage.setItem("utilisateurs", JSON.stringify(utilisateursMiseAJour)); // Sauvegarde dans le localStorage
//   };

//   // Fonction pour afficher les utilisateurs dans un tableau
//   const afficherUtilisateurs = () => (
//     <table className="table table-striped table-hover">
//       <thead>
//         <tr>
//           <th>Prénom</th>
//           <th>Nom</th>
//           <th>Email</th>
//           <th>Téléphone</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {utilisateurs.map((utilisateur) => (
//           <tr key={utilisateur.id}>
//             <td>{utilisateur.prenom}</td>
//             <td>{utilisateur.nom}</td>
//             <td>{utilisateur.email}</td>
//             <td>{utilisateur.telephone}</td>
//             <td>
//               <button className="btn btn-warning" onClick={() => gererModification(utilisateur.id)}>
//                 Modifier
//               </button>
//               <button className="btn btn-danger ms-2" onClick={() => gererSuppression(utilisateur.id)}>
//                 Supprimer
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Gestion des Utilisateurs</h1>
//       <form onSubmit={gererSoumission} className="shadow p-4 mb-4 bg-light">
        
//         <div className="mb-3">
//           <label htmlFor="prenom" className="form-label">Prénom</label>
//           <input
//             type="text"
//             id="prenom"
//             className="form-control"
//             value={prenom}
//             onChange={gererChangement(setPrenom)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="nom" className="form-label">Nom</label>
//           <input
//             type="text"
//             id="nom"
//             className="form-control"
//             value={nom}
//             onChange={gererChangement(setNom)}
//             required
//           />
//         </div>

        
//         <div className='d-flex gap-3'>
//         <div className="mb-3 w-75">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input
//             type="email"
//             id="email"
//             className="form-control"
//             value={email}
//             onChange={gererChangement(setEmail)}
//             required
//           />
//         </div>
//         <div className="mb-3 w-75">
//           <label htmlFor="telephone" className="form-label">Téléphone</label>
//           <input
//             type="tel"
//             id="telephone"
//             className="form-control"
//             value={telephone}
//             onChange={gererChangement(setTelephone)}
//             required
//           />
//         </div>
//         </div>
//         <button type="submit" className={`btn ${idModifier ? 'btn-warning' : 'btn-success'}`}>
//           {idModifier ? 'Modifier' : 'Ajouter'}
//         </button>
//       </form>
//       {afficherUtilisateurs()}
//     </div>
//   );
// }

// // Rendu de l'application dans l'élément avec l'ID 'root'
// ReactDOM.render(<App />, document.getElementById("root"));

// Importation de React et ReactDOM depuis les CDNs pour le développement
const { Component } = React;
const ReactDOM = window.ReactDOM;

// Composant Formulaire pour la gestion des utilisateurs
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

  // Méthode pour gérer les changements dans les champs du formulaire
  gererChangement = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // Méthode pour gérer la soumission du formulaire
  gererSoumission = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

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

  // Méthode pour pré-remplir le formulaire pour modification
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
        <div className="mb-3">
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
        <div className="mb-3">
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

// Composant TableauUtilisateur pour afficher la liste des utilisateurs
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
                <button className="btn btn-warning" onClick={() => onModifier(utilisateur.id)}>
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

// Composant principal de l'application
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utilisateurs: JSON.parse(localStorage.getItem("utilisateurs")) || [],
      utilisateurAEditer: null
    };
  }

  // Méthode pour ajouter un utilisateur
  ajouterUtilisateur = (utilisateur) => {
    this.setState(
      (prevState) => ({
        utilisateurs: [...prevState.utilisateurs, utilisateur]
      }),
      () => localStorage.setItem("utilisateurs", JSON.stringify(this.state.utilisateurs))
    );
  };

  // Méthode pour modifier un utilisateur
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

  // Méthode pour supprimer un utilisateur
  supprimerUtilisateur = (id) => {
    this.setState(
      (prevState) => ({
        utilisateurs: prevState.utilisateurs.filter((u) => u.id !== id)
      }),
      () => localStorage.setItem("utilisateurs", JSON.stringify(this.state.utilisateurs))
    );
  };

  // Méthode pour définir l'utilisateur à modifier
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
