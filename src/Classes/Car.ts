export class Car{

    constructor(public id:string,
                public brand:string,
                public registration:number,
                public country:string,
                public createdAt:number,
                public lastUpdate:number){

        this.id = id;
        this.brand = brand;
        this.registration = registration;
        this.country = country;
        this.createdAt = createdAt;
        this.lastUpdate = lastUpdate;
    }

}