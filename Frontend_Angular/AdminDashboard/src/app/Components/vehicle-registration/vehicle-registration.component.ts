import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/Models/vehicle';
import { VehicledataService } from '../../Services/vehicledata.service';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css'],
})
export class VehicleRegistrationComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  brands: any[] = [];
  models: any[] = [];

  vehicle = new Vehicle();

  id;
  modelId;
  brandId;
  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicledataService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.aRouter.params.subscribe(params =>{
      this.id = params['id'];
    });

    if(this.id && this.id != ""){
      this.vehicleService.getSpecificVehicle(this.id).subscribe(data => {this.vehicle = data;
        console.log(this.vehicle);
        this.brandId = data.modelMaster.brand.id;
        this.modelId = data.modelMaster.id;
      });       
    }

    this.vehicleService.getAllBrands().subscribe((data: any[]) => {
      this.brands = data;
    });

    this.vehicleService.getAllModels().subscribe((data: any[]) => {
      this.models = data;
      console.log("models",this.models);
    });

    this.registerForm = this.formBuilder.group({
      brandId: [''],
      modelId: [''],
      name: [''],
      shortDiscription: [''],
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
  }

  onSubmit() {
    console.log(this.registerForm.value);

    this.vehicleService
      .createVehicle(this.registerForm.value)
      .subscribe((res) => {
        console.log('Vehicle registered successfully!');
      });
  }

  onUpdate() {
    this.vehicle.brandId = this.registerForm.value.brandId;
    this.vehicle.modelId = this.registerForm.value.modelId;
    this.vehicle.name = this.registerForm.value.name;
    this.vehicle.shortDiscription = this.registerForm.value.shortDiscription;
    this.vehicle.vINNum = this.registerForm.value.vINNum;
    this.vehicle.licencePlate = this.registerForm.value.licencePlate;
    this.vehicle.averageUsage = this.registerForm.value.averageUsage;
    this.vehicle.seatingCapacity = this.registerForm.value.seatingCapacity;
    this.vehicle.engine = this.registerForm.value.engine;
    this.vehicle.bodyType = this.registerForm.value.bodyType;
    this.vehicle.fuelType = this.registerForm.value.fuelType;
    this.vehicle.numOfAirbags = this.registerForm.value.numOfAirbags;
    this.vehicle.numOfDoors = this.registerForm.value.numOfDoors;
    this.vehicle.vehicleConfiguration = this.registerForm.value.vehicleConfiguration;
    this.vehicle.wheelbase = this.registerForm.value.wheelbase;
    this.vehicle.color = this.registerForm.value.color;
    this.vehicle.fuelCapacity = this.registerForm.value.fuelCapacity;
    this.vehicle.cargoVolume = this.registerForm.value.cargoVolume;
    this.vehicle.salesPrice = this.registerForm.value.salesPrice;

    this.vehicleService.updateVehicle( this.vehicle)
                      .subscribe(res => {
                        console.log(res);
                        
                      })
  }
}
