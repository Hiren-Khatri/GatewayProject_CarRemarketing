import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Brand } from '../../Models/vehicle';
import { VehicledataService } from '../../Services/vehicledata.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-brand-registration',
  templateUrl: './brand-registration.component.html',
  styleUrls: ['./brand-registration.component.css']
})
export class BrandRegistrationComponent implements OnInit {

  brandForm: FormGroup = new FormGroup({});
  brand = new Brand();

  id="";

  constructor(private formBuilder: FormBuilder,
              private brandService: VehicledataService,
              private router:Router,
              private aRouter:ActivatedRoute) { }

  ngOnInit(): void {

    this.aRouter.params.subscribe(params =>{
      this.id = params['id'];
    });

    if(this.id && this.id != ""){
      this.brandService.getSpecificBrand(this.id).subscribe(data => this.brand = data);       
    }

     this.brandForm = this.formBuilder.group({
      name: [''],
      shortDiscription: ['']
    })

    
  } 

  onSubmit() {  
    console.log(this.brandForm.value);

    this.brandService.createBrand(this.brandForm.value)
                    .subscribe(data =>{
                        console.log(data);
                    })

  }

  onUpdate() {

    this.brand.name = this.brandForm.value.name;
    this.brand.shortDiscription = this.brandForm.value.shortDiscription;

    this.brandService.updateBrand( this.brand)
                      .subscribe(res => {
                        console.log(res);
                        
                      })
  }

}
