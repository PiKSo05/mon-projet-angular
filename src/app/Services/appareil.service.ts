export class AppareilService {

    listeAppareils = [
        {
            id: 1,
            nom: "Machine à laver",
            statut: "éteint"
        },
        {
            id: 2,
            nom: "Réfrigérateur",
            statut: "allumé"
        },
        {
            id: 3,
            nom: "Four",
            statut: "éteint"
        }
    ];

    getAppareilById(id: number){
        const appareil = this.listeAppareils.find(
            (s) => {
                return s.id === id;
            }
        );
        return appareil;
    }
    switchOnAll() {
        for (let appareil of this.listeAppareils) {
            appareil.statut = 'allumé';
        }
    }
    switchOffAll() {
        for (let appareil of this.listeAppareils) {
            appareil.statut = 'éteint';
        }
    }
    switchOnOne(i: number) {
        this.listeAppareils[i].statut = 'allumé';
    }
    switchOffOne(i: number) {
        this.listeAppareils[i].statut = 'éteint';
    }
}