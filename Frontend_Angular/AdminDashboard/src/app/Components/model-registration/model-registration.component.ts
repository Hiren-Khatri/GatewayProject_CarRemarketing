import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from 'src/app/Models/vehicle';
import { VehicledataService } from '../../Services/vehicledata.service';
 
@Component({
  selector: 'app-model-registration',
  templateUrl: './model-registration.component.html',
  styleUrls: ['./model-registration.component.css']
})
export class ModelRegistrationComponent implements OnInit {

  modelForm: FormGroup;
  brands: any[] = []; 
  model = new Model();
  id;

  constructor(private formBuilder: FormBuilder,
    private modelService: VehicledataService,
    private router:Router,
    private aRouter:ActivatedRoute) { }


  ngOnInit(): void {
    
    this.aRouter.params.subscribe(params =>{
      this.id = params['id'];
    });

    if(this.id && this.id != ""){
      this.modelService.getSpecificModel(this.id).subscribe(data => this.model = data);       
    }

    this.modelService.getAllBrands().subscribe((data: any[]) => {
      this.brands = data;
    })

    this.modelForm = this.formBuilder.group({

      brandId: [''],
      name: [''],
      shortDiscription: [''],
      modelYear: ['']
    })

  }

  onSubmit() {

    this.modelService.createModel(this.modelForm.value).subscribe(res => {
        console.log(res);
    })
  }

  onUpdate() {
    this.model.name = this.modelForm.value.name;
    this.model.modelYear = this.modelForm.value.modelYear;
    this.model.brandId = this.modelForm.value.brandId;
    this.model.shortDiscription = this.modelForm.value.shortDiscription;

    this.modelService.updateModel( this.model)
                      .subscribe(res => {
                        console.log(res);
                        
                      })
  }

}
