import { Component, OnInit } from '@angular/core';
import { ButtonStyles, DropdownStyles } from '../../../models/StylesPrime';
import { TipoDocumentoIdentidadItemModel, EstadoCivilItemModel, TipoSexoItemModel, UbigeoItemModel } from '../..//../models/GeneralEntity'
import { GeneralService } from '../..//../services/General/general.service'
import { PersonaNaturalService } from '../..//../services/PersonaNatural/persona-natural.service'
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { PersonaNaturalMainModel, PersonaNaturalSaveModel } from '../../../models/PersonaNaturalEntity'

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-persona-natural-save',
  templateUrl: './persona-natural-save.component.html',
  styleUrls: ['./persona-natural-save.component.css']
})
export class PersonaNaturalSaveComponent implements OnInit {

  visibleVentena: boolean = false;
  TipoDocumentoIdentidadItems: TipoDocumentoIdentidadItemModel[] = [];
  SelectTipoDocumentoIdentidadItem: TipoDocumentoIdentidadItemModel = new TipoDocumentoIdentidadItemModel;

  UbigeoItems: UbigeoItemModel[] = [];
  SelectUbigeoItem: UbigeoItemModel = new UbigeoItemModel;

  GeneroItems: TipoSexoItemModel[] = [];
  SelectGeneroItem: TipoSexoItemModel = new TipoSexoItemModel;

  EstadoCivilItems: EstadoCivilItemModel[] = [];
  SelectEstadoCivilItem: EstadoCivilItemModel = new EstadoCivilItemModel;


  date: Date = new Date;

  buttonStyle = ButtonStyles.primary;
  DropdownStyle = DropdownStyles.Data;
  newItem: PersonaNaturalSaveModel = new PersonaNaturalSaveModel;
  activeIndex: number = 0;
  id: number = 0;

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private serviceGeneral: GeneralService, private personanaturalService: PersonaNaturalService) {

  }
  async ngOnInit() {

    await this.CargadoInicial();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    if (this.id > 0) {

      await this.getPersonaNatural(this.id);
    }
  }

  async CargadoInicial() {

    this.TipoDocumentoIdentidadItems = await this.serviceGeneral.GetTipoDocuemntoIdentidadItems();
    this.GeneroItems = await this.serviceGeneral.GetTipoSexoItems();
    this.EstadoCivilItems = await this.serviceGeneral.GetTipoEstadoCivilItems();
  }

  async getPersonaNatural(Id: number) {

    const dataServer = await this.personanaturalService.GetItem(Id);
    console.log(dataServer);
    this.newItem = dataServer[0];

    const m_Tipodocumento = await this.serviceGeneral.GetTipoDocuemntoIdentidadItem(this.newItem.TipoDocumentoIdentidadId);
    this.SelectTipoDocumentoIdentidadItem = m_Tipodocumento[0];


    const m_TipoSexo = await this.serviceGeneral.GetTipoSexoItem(this.newItem.TipoSexoId);
    this.SelectGeneroItem = m_TipoSexo[0];

    const m_TipoEstadoCivil = (await this.serviceGeneral.GetTipoEstadoCivilItem(this.newItem.EstadoCivilId));
    this.SelectEstadoCivilItem = m_TipoEstadoCivil[0];


    const m_Ubigeo = (await this.serviceGeneral.GetUbigeoItem(this.newItem.UbigeoId));
    this.SelectUbigeoItem = m_Ubigeo[0];


    this.date = new Date(this.newItem.FechaNacimiento);



  }


  async GetUbigeoLikeItemEvent(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    this.UbigeoItems = await this.serviceGeneral.GetUbigeoItemLike(query.toLowerCase())
  }


  async saveItem() {

    await this.confirmationService.confirm({
      message: '¿Deseas guardar el registro?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });

        this.newItem.Action = this.newItem.PersonaNaturalId > 0 ? 3 : 1;
        this.newItem.UbigeoId = this.SelectUbigeoItem.UbigeoId;
        this.newItem.TipoDocumentoIdentidadId = this.SelectTipoDocumentoIdentidadItem.TipoDocumentoIdentidadId;
        this.newItem.TipoSexoId = this.SelectGeneroItem.TipoSexoId;
        this.newItem.EstadoCivilId = this.SelectEstadoCivilItem.EstadoCivilId;
        this.newItem.FechaNacimiento = this.date;

        console.log(this.newItem);

        const DataRest = this.personanaturalService.saveItem(this.newItem);


      },

    });
  }

  productDialog: boolean = false;
  submitted: boolean = false;
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
    this.visibleVentena = false;
  }


  showDialog() {
    this.newItem.Action = 1;
    this.visibleVentena = true;
  }






}
