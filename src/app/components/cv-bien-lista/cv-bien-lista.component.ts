import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { cvBien } from 'src/app/models/cvBien';
import { CvBienesService } from 'src/app/services/cv-bienes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-bien-lista',
  templateUrl: './cv-bien-lista.component.html',
  styleUrls: ['./cv-bien-lista.component.css'],
})
export class CvBienListaComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'cvDescripcion',
    'cvCantidad',
    'cvPrecioUnitario',
    'cvValorResidual',
    'cvDepreciacion',
  ];
  dataSource = new MatTableDataSource<cvBien>();

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.getBienes();
  }

  constructor(
    private cvBienService: CvBienesService,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {}

  getBienes(): void {
    this.cvBienService.getBienes().subscribe((data: cvBien[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onNuevaFactura() {
    this.router.navigate(['/factura']);
  }
}
