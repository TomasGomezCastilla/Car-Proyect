export class Car{

    constructor(public id:string,
                public brand:string,
                public registration:string,
                public country:string,
                public created_at:string,
                public last_update:string){

        this.id = id;
        this.brand = brand;
        this.registration = registration;
        this.country = country;
        this.created_at = created_at;
        this.last_update = last_update;
    }

}