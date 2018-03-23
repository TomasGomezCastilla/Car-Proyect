export class Car{

    constructor(private id:string,
                private brand:string,
                private registration:string,
                private country:string,
                private created_at:string,
                private last_update:string){

        this.id = id;
        this.brand = brand;
        this.registration = registration;
        this.country = country;
        this.created_at = created_at;
        this.last_update = last_update;
    }

}