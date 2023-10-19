import { Component } from '@angular/core';
import { PersonaNaturalService } from '../../../services/PersonaNatural/persona-natural.service';
import { PersonaNaturalMainModel } from '../../../models/PersonaNaturalEntity';
import { ButtonStyles } from '../../../models/StylesPrime';
import { Router } from '@angular/router';
@Component({
  selector: 'app-persona-natural-main',
  templateUrl: './persona-natural-main.component.html',
  styleUrls: ['./persona-natural-main.component.css']
})
export class PersonaNaturalMainComponent {

  buttonStyle = ButtonStyles.primary;
  visibleVentena: boolean = false;
  loading: boolean = true;
  cities: PersonaNaturalMainModel[] | undefined;
  selectedCity: PersonaNaturalMainModel | undefined;
  ListaMainItems: PersonaNaturalMainModel[] = [];
  selectedItems!: PersonaNaturalMainModel[] | null;
  showSpinner: boolean = false;
  constructor(private router: Router, private personanaturalServiceService: PersonaNaturalService) {
  }
  async ngOnInit() {
    this.showSpinner = true;
    await this.GetAllItems();
    this.loading = false;
  }

  async GetAllItems() {
    try {
      this.showSpinner = true;
      
      const dat = await this.personanaturalServiceService.GetItems();
      this.ListaMainItems = dat;

      this.showSpinner = false;
    } catch (error) {
      // console.error(error);
      this.showSpinner = false;
    }

  }
  async GetlistaOrdenar() {
    await this.ListaMainItems.sort((a, b) => b.PersonaNaturalId - a.PersonaNaturalId);
    await this.ListaMainItems.forEach((cargo, index) => {
      cargo.Item = index + 1;
    });

  }

  showDialog() {
    this.visibleVentena = true;
  }

  navigateToDestino() {
    this.router.navigate(['/PersonaNaturalSave', 0]);
  }
  Delete_Metho(Id: number) {
    this.router.navigate(['/PersonaNaturalSave', Id]);
  }
}
