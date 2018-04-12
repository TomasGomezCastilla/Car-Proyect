export class Car{

    constructor(public id:string,
                public brand:string,
                public registration:string,
                public country:string,
                public createdAt:string,
                public lastUpdated:string){

        this.id = id;
        this.brand = brand;
        this.registration = registration;
        this.country = country;
        this.createdAt = createdAt;
        this.lastUpdated = lastUpdated;
    }

}