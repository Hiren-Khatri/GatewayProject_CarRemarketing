import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Brand, Vehicle } from '../Models/vehicle';
import { VehicledataService } from '../Services/vehicledata.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  brands: Brand[] = [];
  vehicles: Vehicle[] = [];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 8, cols: 2, rows: 1 },
          { title: 'Card 2', cols: 2, rows: 1 },
        ];
      }

      return [
        { title: 8, cols: 2, rows: 1 },
        { title: 'Card 2', cols: 2, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private brandService: VehicledataService,
              private vehicleService: VehicledataService ) {}

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe((data: Brand[])=>{
      this.brands = data;
    })

    this.vehicleService.getAllVehicles().subscribe((data: Vehicle[])=>{
      this.vehicles = data;
    })

  }

  deleteBrand(id) {
      this.brandService.deleteBrand(id).subscribe((res)=>{
        console.log(res);
      })
  }

}
