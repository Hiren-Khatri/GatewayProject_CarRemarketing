import { Component, OnInit } from '@angular/core';
import { VehicledataService } from '../../Services/vehicledata.service';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { Brand } from 'src/app/Models/vehicle';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands :any[];
  displayColumns= ['name']

  constructor(private brandService: VehicledataService,
              private route: Router) { }

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe((data: any)=>{
      this.brands=data ;
      console.log(this.brands);
    })
  }

  onEdit(id) {
    this.route.navigate(['/addbrand',id]);
  }

  onDelete(id) {
    this.brandService.deleteBrand(id).subscribe(data => {
      console.log(data);
    })
  }

}
