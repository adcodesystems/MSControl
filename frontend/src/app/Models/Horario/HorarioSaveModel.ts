import { HorarioDetalleModel } from 'src/app/Models/Horario/HorarioDetalleModel';

export class HorarioSaveModel {
    HorarioId: number = 0;
    Nombre: string = '';
    InicioHora: number = 0;
    InicioMinutos: number = 0;
    TerminoHora: number = 0;
    TerminoMinutos: number = 0;
    TotalHorasTrabajo: number = 0;
    TurnoId: number = 0;
    TipoHorarioId: number = 0;
    ModalidadHorarioId: number = 0;
    FechaRegistro= new Date();
    UsuarioRegistro: string = '';
    EstadoRegistro: boolean = false;
    data: Array<HorarioDetalleModel> = [];
}
