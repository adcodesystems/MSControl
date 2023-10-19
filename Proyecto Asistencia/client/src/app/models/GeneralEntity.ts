
export class EstadoCivilItemModel {
    constructor(
        public EstadoCivilId: number = 0,
        public Nombre: string = ''
    ) { }
}


export class TipoSexoItemModel {
    constructor(
        public TipoSexoId: number = 0,
        public Nombre: string = ''
    ) { }
}


export class TipoDocumentoIdentidadItemModel {
    constructor(
        public TipoDocumentoIdentidadId: number = 0,
        public Codigo: number = 0,
        public Alias: string = ''
    ) { }
}



export class UbigeoItemModel {
    constructor(
        public UbigeoId: number = 0,
        public CodUbigeo: number = 0,
        public DesUbigeo: string = ''
    ) { }
}
