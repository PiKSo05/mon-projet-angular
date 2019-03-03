import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppareilService {

    appareilSubject = new Subject<any[]>();

    constructor(private httpClient: HttpClient) { }


    private appareils = [];
    

    getAppareilFromServer() {
        this.httpClient
            .get<any[]>('https://monprojetangularvv.firebaseio.com/appareils.json')
            .subscribe(
                (response) => {
                    this.appareils = response;
                    this.emitAppareilSubject();
                },
                (error) => {
                    console.log('Erreur de récupération des données: ' + error);
                });
    }

    saveAppareilToServer() {
        this.httpClient
            .put('https://monprojetangularvv.firebaseio.com/appareils.json', this.appareils)
            .subscribe(
                () => {
                    console.log('Enregistrement terminé!');
                },
                (error) => {
                    console.log('Erreur d\'enregistrement des données: ' + error);
                });
    }

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
    addAppareil(name: string, status: string) {
        const appareilObject = {
            id: 0,
            nom: '',
            statut: ''
        }
        appareilObject.nom = name;
        appareilObject.statut = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
}