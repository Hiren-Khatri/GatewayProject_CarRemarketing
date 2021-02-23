import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VehicledataService } from '../../Services/vehicledata.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles :any[];

  constructor(private vehicleServie: VehicledataService,
    private route: Router) { }
  
    ngOnInit(): void {
      this.vehicleServie.getAllVehicles().subscribe((data: any)=>{
        this.vehicles=data ;
        console.log(this.vehicles);
      })
    }

    onEdit(id) {
      this.route.navigate(['/addvehicle',id]);
    }
  
    onDelete(id) {
      this.vehicleServie.deleteVehicle(id).subscribe(data => {
        console.log(data);
      })
    }
}
