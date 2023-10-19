export class PersonaNaturalMainModel {
    constructor(
        public Item : number=0,
        public PersonaNaturalId: number = 0,
        public NomDocumento: string = '',
        public NumDocumento: string = '',
        public Nombres: string = '',
        public ApellidoPaterno: string = '',
        public ApellidoMaterno: string = '',
        public FechaRegistro: Date = new Date,
        public CodUsuario: string = ''
    ) { }
}

export class PersonaNaturalSaveModel {
    constructor(
        public Item: number = 0,
        public PersonaNaturalId: number = 0,
        public TipoDocumentoIdentidadId: number = 0,
        public NumDocumento: string = '',
        public Nombres: string = '',
        public ApellidoPaterno: string = '',
        public ApellidoMaterno: string = '',
        public FechaNacimiento: Date = new Date,
        public FechaVencimiento: Date = new Date,
        public TipoSexoId: number = 0,
        public EstadoCivilId: number = 0,
        public Direccion: string = '',
        public DireccionReferencia: string = '',
        public UbigeoId: number = 0,
        public FechaRegistro: Date = new Date,
        public UsuarioRegistro: string = '',
        public EstadoRegistro: boolean = true,
        public Action: number = 0,

    ) { }
}

