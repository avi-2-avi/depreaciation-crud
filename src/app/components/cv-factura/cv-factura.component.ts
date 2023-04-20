import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { cvBien } from 'src/app/models/cvBien';
import { CvBienesService } from 'src/app/services/cv-bienes.service';

@Component({
  selector: 'app-cv-factura',
  templateUrl: './cv-factura.component.html',
  styleUrls: ['./cv-factura.component.css'],
})
export class CvFacturaComponent {
  @ViewChild('cvBienForm', { static: false })
  cvBienForm!: NgForm;

  dataSource = new MatTableDataSource<cvBien>();
  cvBienData!: cvBien;

  constructor(private cvBienService: CvBienesService, private router: Router) {
    this.cvBienData = {} as cvBien;
  }

  ngOnInit(): void {
    this.getBienes();
  }

  getBienes(): void {
    this.cvBienService.getBienes().subscribe((data: cvBien[]) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  addBien() {
    this.cvBienService
      .createBien(this.cvBienData)
      .subscribe((response: any) => {
        this.dataSource.data.push({ ...response });
        this.dataSource.data = this.dataSource.data.map((o: any) => {
          return o;
        });
      });
  }

  onSubmit() {
    if (this.cvBienForm.valid) {
      this.addBien();
      this.onListarBien();
    }
  }

  onListarBien() {
    this.router.navigate(['/lista']);
  }
}
