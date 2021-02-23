import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Vehicle, Brand } from '../Models/vehicle';
import { VehicledataService } from '../Services/vehicledata.service';


@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  brandForm: FormGroup = new FormGroup({});

  car: Vehicle;
  brand: Brand;
  
  constructor(private vehicleService: VehicledataService,
              private brandService: VehicledataService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
        name: [''],
        shortDiscription: [''],
        modelYear: [''],
        vINNum: [''],
        licencePlate: [''],
        averageUsage: [''],
        kilometers: [''],
        seatingCapacity: [''],
        engine: [''],
        bodyType: [''],
        fuelType: [''],
        numOfAirbags: [''],
        numOfDoors: [''],
        vehicleConfiguration: [''],
        wheelbase: [''],
        color: [''],
        fuelCapacity: [''],
        cargoVolume: [''],
        salesPrice: [''],
    });
  
    this.brandForm = this.formBuilder.group({
      name: [''],
      shortDiscription: [''],
    });

  }

  registerVehicle() { 
    console.log(this.registerForm.value);
    this.car = this.registerForm.value;

    this.vehicleService.createVehicle(this.car).subscribe(res => {
      console.log('Vehicle registered successfully!');
    })
  }

  registerBrand() {
    console.log(this.brandForm.value);
    this.brand = this.brandForm.value;

    this.brandService.createBrand(this.brand).subscribe(res => {
      console.log('Brand registered successfully!');
    })

  }

}
