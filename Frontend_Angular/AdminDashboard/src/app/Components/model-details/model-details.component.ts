import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicledataService } from 'src/app/Services/vehicledata.service';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css']
})
export class ModelDetailsComponent implements OnInit {

  models :any[];

  constructor(private modelService:VehicledataService,private route: Router) { }

  ngOnInit(): void {
    this.modelService.getAllModels().subscribe((data: any)=>{
      this.models=data ;
      console.log(this.models);
    })
  }

  onEdit(id) {
    this.route.navigate(['/addmodel',id]);
  }

  onDelete(id) {
    this.modelService.deleteModel(id).subscribe(data => {
      console.log(data);
    })
  }

}
