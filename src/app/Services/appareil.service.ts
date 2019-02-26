import { Subject } from 'rxjs';

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
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

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            }
        );
        return appareil;
    }

    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.statut = 'allumé';
            this.emitAppareilSubject();
        }
    }
    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.statut = 'éteint';
            this.emitAppareilSubject();
        }
    }
    switchOnOne(i: number) {
        this.emitAppareilSubject();
        this.appareils[i].statut = 'allumé';
    }
    switchOffOne(i: number) {
        this.emitAppareilSubject();
        this.appareils[i].statut = 'éteint';
    }
    addAppareil(name: string, status: string){
        const appareilObject = {
            id: 0,
            nom:'',
            statut:''
        }
        appareilObject.nom = name;
        appareilObject.statut = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id +1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
}